import {Routes, Route, Navigate} from 'react-router-dom';

import { connect } from 'react-redux';

import { authRoutes, publicRoutes } from '../../routes';
import { history } from '../../services/history';
import { LOGIN_ROUTE } from '../../utils/routesConsts';
import {alertActions} from '../../actions';

const connectedApp = (props) => {

    history.listen((location, action) => {
        // clear alert on location change
        props.clearAlerts();
    });

    return (
        <div>
            {props.alert.message && <div className={props.alert.type}>{props.alert.message}</div>}
            <Routes history={history}>
                {localStorage.getItem('user') && authRoutes.map(({path, Component}) => 
                    <Route key={path} path={path} element={<Component/>}/>
                )}
                {publicRoutes.map(({path, Component}) => 
                    <Route key={path} path={path} element={<Component/>}/>
                )}
                <Route path='*' element={<Navigate to={LOGIN_ROUTE} replace/>}/>
            </Routes>
        </div>
    );
};

function mapState(state) {
    const { alert } = state;
    return { alert };
}

const actionCreators = {
    clearAlerts: alertActions.clear
};

const AppRouter = connect(mapState, actionCreators)(connectedApp);

export default AppRouter;