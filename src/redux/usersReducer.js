let initState = {
    loading: false,
    secondLoading: false,
    failure: false,
    list: [],
    term: "",
    total: 0,
};

const usersReducer = (state = initState, action) => {
    switch (action.type) {
        case "START_FETCH_USERS": {
            if (action.payload.page === 1) {
                return {
                    loading: true,
                    secondLoading: false,
                    failure: false,
                    list: [],
                    term: "",
                    total: 0,
                };
            } else {
                return {
                    loading: false,
                    secondLoading: true,
                    failure: false,
                    list: [...state.list],
                    term: "",
                    total: 0,
                };
            }
        }
        case "END_FETCH_USERS": {
            if (action.payload.page === 1) {
                return {
                    loading: false,
                    secondLoading: false,
                    failure: false,
                    list: [...action.payload.list],
                    term: action.payload.term,
                    total: action.payload.total,
                };
            } else {
                return {
                    loading: false,
                    secondLoading: false,
                    failure: false,
                    list: [...state.list, ...action.payload.list],
                    term: action.payload.term,
                    total: action.payload.total,
                };
            }
        }

        case "FAIL_FETCH_USERS":
            return {
                loading: false,
                secondLoading: false,
                failure: true,
                list: [...state.list],
                term: "",
                total: state.total,
            };
        default:
            return state;
    }
};

export default usersReducer;
