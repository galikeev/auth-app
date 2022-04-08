import {Routes, Route} from 'react-router-dom';

import { connect } from 'react-redux';

import { LOGIN_ROUTE, REGISTRATION_ROUTE } from '../../utils/routesConsts';
import Login from '../../pages/LoginPage';
import RegistrationPage from '../../pages/RegistrationPage';
import HomePage from '../../pages/HomePage';

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
                <Routes>
                    {!isLogged 
                        ? 
                        <>
                            <Route path={LOGIN_ROUTE} element={<Login/>}/>
                            <Route path={REGISTRATION_ROUTE} element={<RegistrationPage/>}/>
                        </> 
                        : 
                        <Route path='*' element={<HomePage/>}/>}
                    
                </Routes>
            </div>
        </>
    );
});

export default AppRouter;