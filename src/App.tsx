import * as React from 'react';
import * as Loadable from 'react-loadable';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

const Loading = function() {
    return <div className="pt-3 text-center">
        <div className="sk-spinner sk-spinner-pulse">Loang...</div>
    </div>
}
    
// Pages
const Login = Loadable({
    loader: () => import('./pages/login/Login'),
    loading: Loading,
    delay: 2000,
    timeout: 10000,
});
const Error = Loadable({
    loader: () => import('./pages/error/Error'),
    loading: Loading,
    delay: 2000,
    timeout: 10000,
});
// const Login = React.lazy(() => import('./pages/login/Login'));

class App extends React.Component {
    render() {
        return (
            <BrowserRouter basename="/">
                <div>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/login">Login</Link>
                        </li>
                        <li>
                            <Link to="/error">Error</Link>
                        </li>
                        {/* <li>
                            <Link to="/dashboard">Dashboard</Link>
                        </li> */}
                    </ul>
                </div>
                <React.Suspense fallback={Loading}>
                    <Switch>
                        {/* <Route exact path="/login" render={() => <div>Login</div>} /> */}
                        {/* <Route exact path="/register" name="Register Page" render={props => <Register {...props} />} />
                        <Route exact path="/404" name="Page 404" render={props => <Page404 {...props} />} />
                        <Route exact path="/500" name="Page 500" render={props => <Page500 {...props} />} /> */}
                        <Route path="/login" component={props => <Login {...props}/>} />
                        <Route path="/error" component={props => <Error {...props}/>} />
                        <Route path="/" render={() => <div>Home</div>} />
                    </Switch>
                </React.Suspense>
                
            </BrowserRouter>
        );
    }
}

export default App;
