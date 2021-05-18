import React, { useState } from "react";
import { Row, TextInput, Button } from "./Styled";
import { useDispatch } from "react-redux";
import fetchUsers from "../redux/fetchUsers";

const Searcher = () => {
    const [input, setInput] = useState("");
    const dispatch = useDispatch();
    const sendHandler = (e) => {
        e.preventDefault();
        dispatch(fetchUsers(input, 1));
        setInput("");
    };
    return (
        <Row style={{ width: "100%" }}>
            <form
                style={{
                    alignSelf: "center",
                    borderRadius: "24px",
                    backgroundColor: "rgba(15, 19, 83, .3)",
                    padding: ".5rem 1rem",
                    display: "flex",
                    justifyContent: "center",
                    margin: "1rem auto",
                }}
                onSubmit={(e) => sendHandler(e)}
            >
                <TextInput
                    type='text'
                    placeholder='User Name'
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <Button
                    style={{
                        margin: "0 0 0 1rem",
                    }}
                    type='submit'
                >
                    SEARCH
                </Button>
            </form>
        </Row>
    );
};

export default Searcher;
