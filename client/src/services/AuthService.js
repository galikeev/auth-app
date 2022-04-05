const apiUrl = 'http://localhost:4000/';

const handleResponse = (response) => {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                logout();
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}

const login = async (username, password) => {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    };

    const response = await fetch(`${apiUrl}users/login`, requestOptions);
    const user = await handleResponse(response);
    localStorage.setItem('user', JSON.stringify(user));
    return user;
}

const logout = () => {
    localStorage.removeItem('user');
}

const register = async (user) => {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    };

    const response = await fetch(`${apiUrl}users/registration`, requestOptions);
    return handleResponse(response);
}

export const authService = {
    login,
    logout,
    register,
};