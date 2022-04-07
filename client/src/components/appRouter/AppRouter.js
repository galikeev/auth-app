import {Routes, Route, Navigate} from 'react-router-dom';

import { connect } from 'react-redux';

import { authRoutes, publicRoutes } from '../../routes';
import { LOGIN_ROUTE } from '../../utils/routesConsts';

function mapState(state) {
    return {
        state: state
    }
}

const AppRouter = connect(mapState)(({state}) => {

    const isLogged = state.signIn.isLogged;

    return (
        <>
            {state.alert.message && <div className={state.alert.type} style={{'textAlign':'center'}}>{state.alert.message}</div>}
            <div className='container'>
                {!isLogged && <Routes>
                    {localStorage.getItem('user') && authRoutes.map(({path, Component}) => 
                        <Route key={path} path={path} element={<Component/>}/>
                    )}
                    {publicRoutes.map(({path, Component}) => 
                        <Route key={path} path={path} element={<Component/>}/>
                    )}
                    <Route path='*' element={<Navigate to={LOGIN_ROUTE} replace/>}/>
                </Routes>}
            </div>
        </>
    );
});

export default AppRouter;