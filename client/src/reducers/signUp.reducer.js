import { REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_FAILURE } from "../utils/authConsts";

const signUp = (state = {}, action) => {
    switch (action.type) {
        case REGISTER_REQUEST:
            return {
                isRegistered: true
            };
        case REGISTER_SUCCESS:
            return {};
        case REGISTER_FAILURE:
            return {};
        default:
            return state;
    }
};

export default signUp;