import React from "react";
import styled from "styled-components";

const StyledInput = styled.input`
    cursor: pointer;
    width: 200px;
    height: 22px;

    border-radius: 12px;
    box-shadow: 0px;
    outline: none;
    text-align: center;
`;

export default function Input({ setInput }) {
    return (
        <StyledInput onChange={(e) => setInput(e.target.value)}></StyledInput>
    );
}
