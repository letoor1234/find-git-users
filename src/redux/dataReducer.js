let initState = {
    loading: false,
    user: {},
    repos: [],
    organizations: [],
    failure: false,
};

const dataReducer = (state = initState, action) => {
    switch (action.type) {
        case "START_FETCH_DATA": {
            return {
                loading: true,
                failure: false,
                user: state.user,
                repos: state.repos,
                organizations: state.organizations,
            };
        }
        case "END_FETCH_DATA": {
            return {
                loading: false,
                user: action.payload.user,
                repos: [...action.payload.repos],
                organizations: [...action.payload.organizations],
                failure: false,
            };
        }
        case "FAIL_FETCH_DATA":
            return {
                loading: false,
                failure: true,
                user: state.user,
                repos: state.repos,
                organizations: state.organizations,
            };
        default:
            return state;
    }
};

export default dataReducer;
