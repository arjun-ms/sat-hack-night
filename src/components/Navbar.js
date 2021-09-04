import React from "react";
import styled from "styled-components";
import logo from "../assets/resume-and-cv.png";
import Input from "./Input";
import Button from "./Button";

const Navigation = styled.nav`
    position: sticky;
    top: 0;
    background: #fff;
    padding: 1rem 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
    img {
        width: 40px;
        height: 40px;
        margin: 0 10px;
    }
    .title {
        display: flex;
        align-items: center;
        a {
            color: var(--color);
        }
    }
    .nav-links {
        display: flex;
        align-items: flex-end;
        a,
        .anchor-style {
            cursor: pointer;
            margin: 0 10px;
            color: var(--color);
            :hover {
                color: var(--darkgrey);
            }
        }

        [class^="fa"] {
            margin-right: 4px;
        }
    }

    @media (max-width: 675px) {
        flex-direction: column;
    }
`;

function Navbar({ titleColor, setTitleColor }) {
    const printResume = () => window.print();

    return (
        <>
            <Navigation id="navbar">
                <div className="title">
                    <img src={logo} alt="logo" />
                </div>
                <div className="nav-links">
                    <>
                        <Input />
                        <Button />
                        <a href="https://github.com/arjun-ms/Sat-Hack-Night">
                            <i className="fab fa-github"></i>Open in Github
                        </a>
                        <span className="anchor-style" onClick={printResume}>
                            <i className="fas fa-print"></i>
                            Print
                        </span>
                    </>
                    <a href="https://github.com/arjun-ms/Sat-Hack-Night/fork">
                        <i className="fas fa-code-branch"></i>Fork
                    </a>
                </div>
            </Navigation>
        </>
    );
}

export default Navbar;
