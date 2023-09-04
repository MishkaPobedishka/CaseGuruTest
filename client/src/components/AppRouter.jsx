import { observer } from 'mobx-react-lite';
import { Context } from '../index';
import { useContext } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { privateRoutes, publicRoutes } from '../routes/routes';
import { LOGIN_ROUTE, STAFF_ROUTE } from '../utils/const ';


const AppRouter = () => {
    const {store} = useContext(Context);

    return store.isAuth ?
    (
        <Routes>
            {
                privateRoutes.map(({path, Component}) =>
                    <Route key = {path} path = {path} element = {<Component/>} exact = {true} />
                )
            }
            <Route path = '*' element = {<Navigate to = {STAFF_ROUTE}/>}/>
        </Routes>
    )
    :
    (
        <Routes>
            {
                publicRoutes.map(({path, Component}) =>
                    <Route key = {path} path = {path} element = {<Component/>} exact = {true} />
                )
            }
            <Route path = '*' element = {<Navigate to = {LOGIN_ROUTE}/>}/>
        </Routes>
    )
};

export default observer(AppRouter);