import requests
import sys
import json

class GithubTree:
    def __init__(self):
       self.users_array = []
       self.followers_of_user = []
       self.main()

    def main(self):
       username = self.get_username() 
       self.get_followers_length(username)
       self.follower_list(username)

    def get_username(self):
        self.username = sys.argv[1]
        return self.username

    def get_followers_length(self, username):
        user_data = requests.get(f'https://api.github.com/users/{username}')
        # print(user_data.text)
        json_data = json.loads(user_data.text)
        followers = (json_data['followers'])
        self.print_data(username, followers)
    
    def follower_list(self, username):
            try:
                users_followers = requests.get(f'https://api.github.com/users/{username}/followers')
                json_data = json.loads(users_followers.text)
                for each in json_data:
                    self.followers_of_user.append(each['login'])
            except:
                pass
            
            for each in self.followers_of_user:
                self.get_followers_length(each)
                

    def print_data(self, username, followers):
        print(f"{username}:{followers}")

if __name__ =='__main__':
    GithubTree()