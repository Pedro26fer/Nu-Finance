import { Route,Switch } from "react-router-dom";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Home from "../pages/Home";




export function Routes(){

    return(
        <Switch>
            <Route exact path='/register'>
                <Register/>
            </Route>
            <Route exact path='/login'>
                <Login/>
            </Route>
            <Route exact path='/'>
                <Home/>
            </Route>

        </Switch>
    )
}