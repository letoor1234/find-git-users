const start = (payload) => {
    return {
        type: "START_FETCH_USERS",
        payload,
    };
};
const failure = () => {
    return {
        type: "FAIL_FETCH_USERS",
    };
};
const end = (payload) => {
    return {
        type: "END_FETCH_USERS",
        payload,
    };
};

const fetchUsers = (term, page) => {
    return (dispatch) => {
        dispatch(start({ page }));

        const API = "https://api.github.com/search/users";
        let request = "";
        if (page === 1) {
            request = "?q=" + term;
        } else {
            request = "?q=" + term + "&page=" + page;
        }

        fetch(API + request)
            .then((res) => {
                if (res.status === 200) {
                    return res.json();
                } else {
                    return false;
                }
            })
            .then((json) => {
                if (!json) {
                    dispatch(failure());
                } else {
                    if (page === 1) {
                        dispatch(
                            end({
                                term,
                                page,
                                list: [...json.items],
                                total: json.total_count,
                            })
                        );
                    } else {
                        dispatch(
                            end({
                                term,
                                page,
                                list: [...json.items],
                                total: json.total_count,
                            })
                        );
                    }
                }
            });
    };
};

export default fetchUsers;
