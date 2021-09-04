import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
    font-size: 1em;
    margin-left: 1em;
    padding: 0.25em 1em;
    border: 2px solid gray;
    border-radius: 3px;
    font-weight: 400;
    border-radius: 20px;
`;

export default function Button({ date, setUserData }) {
    const fetchData = async (username) => {
        const res = await fetch(`https://api.github.com/users/${username}`);
        const data = await res.json();
        return data;
    };

    const returnData = async (value) => {
        const profileData = await fetchData(value);
        setUserData(profileData);
    };
    return (
        <>
            <StyledButton onClick={() => returnData(date)} type="submit">
                Search
            </StyledButton>
        </>
    );
}
