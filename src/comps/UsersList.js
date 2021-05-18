import React, { useEffect, useState } from "react";
import { Column, Row, Button, NoButton } from "./Styled";
import { useHistory } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import fetchUsers from "../redux/fetchUsers";
import fetchData from "../redux/fetchData";
import Loader from "./Loader";

const UsersList = () => {
    const term = useSelector((state) => state.users.term);
    const total = useSelector((state) => state.users.total);
    const users = useSelector((state) => state.users.list);
    const loading = useSelector((state) => state.users.loading);
    const [page, setPage] = useState(1);
    const secondLoading = useSelector((state) => state.users.secondLoading);
    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        if (page !== 1) {
            dispatch(fetchUsers(term, page));
        }
    }, [page]);

    const selectHandler = (url) => {
        dispatch(fetchData(url));
        history.push("/user-info");
    };
    return (
        <Column
            style={{
                width: "100%",
            }}
        >
            <h5 style={{ width: "100%", textAlign: "center" }}>
                {" "}
                {total + " results found"}{" "}
            </h5>
            {users.length === 0 && !loading ? (
                <h3 style={{ width: "100%", textAlign: "center" }}>
                    Nothing found, try again!
                </h3>
            ) : loading ? (
                <Loader />
            ) : (
                users.map((user, i) => {
                    return (
                        <button
                            onClick={() => selectHandler(user.url)}
                            style={{
                                maxWidth: "95%",
                                alignSelf: "center",
                                borderRadius: "24px",
                                backgroundColor: "rgba(15, 19, 83, .3)",
                                margin: "1rem auto",
                                border: "none",
                                display: "flex",
                            }}
                            key={i}
                        >
                            <Row
                                style={{
                                    padding: "1rem 2rem",
                                    display: "flex",
                                    alignSelf: "center",
                                    margin: "0 auto",
                                }}
                            >
                                <div
                                    style={{
                                        overflow: "hidden",
                                        height: "4rem",
                                        width: "4rem",
                                        borderRadius: "50%",
                                        margin: "0 1rem",
                                    }}
                                >
                                    <img
                                        alt='avatar'
                                        src={user.avatar_url}
                                        style={{ width: "100%" }}
                                    />
                                </div>
                                <Column>
                                    <h4 style={{ margin: ".5rem" }}>
                                        {" "}
                                        {user.login}{" "}
                                    </h4>
                                    <NoButton>
                                        See more about this user
                                    </NoButton>
                                </Column>
                            </Row>
                        </button>
                    );
                })
            )}
            {total >= 30 * page + 1 &&
                (secondLoading ? (
                    <Loader />
                ) : (
                    <Button onClick={() => setPage(page + 1)}>More +</Button>
                ))}
        </Column>
    );
};

export default UsersList;
