export default function Data({ userData }) {
    // {
    //     "login": "sidharthpunathil",
    //     "id": 31244727,
    //     "node_id": "MDQ6VXNlcjMxMjQ0NzI3",
    //     "avatar_url": "https://avatars.githubusercontent.com/u/31244727?v=4",
    //     "gravatar_id": "",
    //     "url": "https://api.github.com/users/sidharthpunathil",
    //     "html_url": "https://github.com/sidharthpunathil",
    //     "followers_url": "https://api.github.com/users/sidharthpunathil/followers",
    //     "following_url": "https://api.github.com/users/sidharthpunathil/following{/other_user}",
    //     "gists_url": "https://api.github.com/users/sidharthpunathil/gists{/gist_id}",
    //     "starred_url": "https://api.github.com/users/sidharthpunathil/starred{/owner}{/repo}",
    //     "subscriptions_url": "https://api.github.com/users/sidharthpunathil/subscriptions",
    //     "organizations_url": "https://api.github.com/users/sidharthpunathil/orgs",
    //     "repos_url": "https://api.github.com/users/sidharthpunathil/repos",
    //     "events_url": "https://api.github.com/users/sidharthpunathil/events{/privacy}",
    //     "received_events_url": "https://api.github.com/users/sidharthpunathil/received_events",
    //     "type": "User",
    //     "site_admin": false,
    //     "name": "Sidharth Punathil",
    //     "company": null,
    //     "blog": "https://www.buymeacoffee.com/iamsidharth",
    //     "location": "Calicut, India",
    //     "email": null,
    //     "hireable": true,
    //     "bio": "#knowledgeispower. \r\n",
    //     "twitter_username": "iamsidharthp",
    //     "public_repos": 18,
    //     "public_gists": 1,
    //     "followers": 32,
    //     "following": 45,
    //     "created_at": "2017-08-22T12:16:09Z",
    //     "updated_at": "2021-09-04T15:35:59Z"
    //   }

    return (
        <>
            <h3>Name</h3>
            <h1>{userData.name}</h1>
            <img alt="author-name" src={userData.avatar_url} />
        </>
    );
}
