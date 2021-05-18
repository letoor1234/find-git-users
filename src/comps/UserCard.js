import React from "react";
import { Column, Row, Link } from "./Styled";
import { useSelector } from "react-redux";
import Loader from "./Loader";

const UserCard = () => {
    let loading = useSelector((state) => state.currentUser.loading);
    let user = useSelector((state) => state.currentUser.user);
    let repos = useSelector((state) => state.currentUser.repos);
    let organizations = useSelector((state) => state.currentUser.organizations);

    return (
        <>
            {loading ? (
                <Loader />
            ) : (
                <Row id='to-column' style={{ padding: "1rem 2rem" }}>
                    <Column
                        style={{
                            alignItems: "center",
                            padding: "1rem 1rem 1rem 0",
                        }}
                    >
                        <div
                            style={{
                                overflow: "hidden",
                                height: "6rem",
                                width: "6rem",
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
                        <Link
                            target='_blank'
                            href={user.html_url}
                            style={{ marginTop: "1rem" }}
                        >
                            {" "}
                            {"@" + user.login}{" "}
                        </Link>
                    </Column>

                    <Row id='to-column' style={{}}>
                        <Column
                            style={{
                                marginRight: "1rem",
                                borderRight: "2px solid rgba(15, 19, 83, .3 )",
                                padding: "0 .5rem 1rem 0",
                            }}
                        >
                            <h4 style={{ marginTop: "1rem" }}>Repositories</h4>
                            {repos.length === 0 ? (
                                <h5 style={{ marginTop: "1rem" }}>
                                    Nothing here
                                </h5>
                            ) : (
                                repos.map((repo, i) => {
                                    return (
                                        <Link
                                            style={{ marginTop: "1rem" }}
                                            href={repo.html_url}
                                        >
                                            {" "}
                                            {"@" + repo.full_name}{" "}
                                        </Link>
                                    );
                                })
                            )}
                        </Column>
                        <Column>
                            <h4 style={{ marginTop: "1rem" }}>Organizations</h4>
                            {organizations.length === 0 ? (
                                <h5 style={{ marginTop: "1rem" }}>
                                    Nothing here
                                </h5>
                            ) : (
                                organizations.map((org, i) => {
                                    return (
                                        <Link style={{ marginTop: "1rem" }}>
                                            {" "}
                                            {"@" + org.login}{" "}
                                        </Link>
                                    );
                                })
                            )}
                        </Column>
                    </Row>
                </Row>
            )}
        </>
    );
};

export default UserCard;
