import { SUCCESS, ERROR, CLEAR } from "../utils/alertContsts";

const success = (message) => {
    return {
        type: SUCCESS, message
    };
};

const error = (message) => {
    return {
        type: ERROR, message
    };
};

const clear = () => {
    return {
        type: CLEAR
    };
};

export const alertActions = {
    success,
    error,
    clear
}