import React from "react";
import { Row } from "./Styled";
import { useHistory } from "react-router";
import gitIcon from "../assets/git.png";
const Header = () => {
    let history = useHistory();
    return (
        <Row
            style={{
                backgroundColor: "rgb(15, 19, 83",
                padding: "2rem 4rem",
                justifyContent: "space-between",
                alignItem: "center",
            }}
        >
            <Row
                onClick={() => history.push("/")}
                style={{ cursor: "pointer" }}
            >
                <div
                    style={{
                        maxHeight: "3rem",
                        width: "3rem",
                        padding: ".5rem",
                        margin: "0 1rem",
                        backgroundColor: "rgb(198, 200, 225)",
                        borderRadius: "50%",
                    }}
                >
                    <img src={gitIcon} alt='icon' style={{ height: "100%" }} />
                </div>
                <h1
                    style={{ color: "rgb(198, 200, 225)", alignSelf: "center" }}
                >
                    Git Workers!
                </h1>
            </Row>

            <h3
                style={{
                    color: "rgb(198, 200, 225)",
                    alignSelf: "center",
                    maxWidth: "25%",
                }}
            >
                Find your next colaborators
            </h3>
        </Row>
    );
};

export default Header;
