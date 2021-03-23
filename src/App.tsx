import * as React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

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
                        {/* <li>
                            <Link to="/dashboard">Dashboard</Link>
                        </li> */}
                    </ul>
                </div>
                <Switch>
                    <Route exact path="/login" render={() => <div>Login</div>} />
                    {/* <Route exact path="/register" name="Register Page" render={props => <Register {...props} />} />
                    <Route exact path="/404" name="Page 404" render={props => <Page404 {...props} />} />
                    <Route exact path="/500" name="Page 500" render={props => <Page500 {...props} />} /> */}
                    <Route path="/" render={() => <div>Home</div>} />
                </Switch>
            </BrowserRouter>
        );
    }
}

export default App;