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

export default function Button({ date }) {
    const GetData = (value) => {
        console.log(value);
        console.log("working");
    };
    return (
        <>
            <StyledButton onClick={() => GetData(date)} type="submit">
                Search
            </StyledButton>
        </>
    );
}
