import {Routes, Route, Navigate} from 'react-router-dom';
import { authRoutes, publicRoutes } from '../../routes';
import { LOGIN_ROUTE } from '../../utils/routesConsts';

const AppRouter = () => {
    return (
        <Routes>
            {localStorage.getItem('user') && authRoutes.map(({path, Component}) => 
                <Route key={path} path={path} element={<Component/>}/>
            )}
            {publicRoutes.map(({path, Component}) => 
                <Route key={path} path={path} element={<Component/>}/>
            )}
            <Route path='*' element={<Navigate to={LOGIN_ROUTE}/>}/>
        </Routes>
    );
};

export default AppRouter;