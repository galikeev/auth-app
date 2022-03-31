import { LOGIN_ROUTE, PASSWORD_ROUTE, REGISTRATION_ROUTE } from './utils/routesConsts';

import PasswordPage from './pages/PasswordPage';
import LoginPage from './pages/LoginPage';
import RegistrationPage from './pages/RegistrationPage';

export const authRoutes = [
    {
        path: PASSWORD_ROUTE,
        Component: PasswordPage
    }
]

export const publicRoutes = [
    {
        path: LOGIN_ROUTE,
        Component: LoginPage
    },
    {
        path: REGISTRATION_ROUTE,
        Component: RegistrationPage
    }
]