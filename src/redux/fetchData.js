const start = () => {
    return {
        type: "START_FETCH_DATA",
    };
};
const failure = () => {
    return {
        type: "FAIL_FETCH_DATA",
    };
};
const end = (payload) => {
    return {
        type: "END_FETCH_DATA",
        payload,
    };
};

const fetchData = (url) => {
    return (dispatch) => {
        dispatch(start());
        fetch(url)
            .then((res) => res.json())
            .then((user) => {
                fetch(user.repos_url)
                    .then((res) => res.json())
                    .then((repos) => {
                        fetch(user.organizations_url)
                            .then((res) => res.json())
                            .then((organizations) => {
                                const payload = {
                                    user,
                                    repos: [...repos],
                                    organizations: [...organizations],
                                };
                                dispatch(end(payload));
                            });
                    });
            })
            .catch((err) => {
                console.log("error");
                dispatch(failure());
            });
    };
};

export default fetchData;
