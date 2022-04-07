import { REGISTER_SUCCESS, REGISTER_FAILURE } from "../utils/authConsts";

const signUp = (state = {}, action) => {
    switch (action.type) {
        case REGISTER_SUCCESS:
            return {
                isRegistered: true
            };
        case REGISTER_FAILURE:
            return {};
        default:
            return state;
    }
};

export default signUp;