import React, {useContext}from "react";
import { Route, Redirect } from "react-router";
import StoreContext from "../../Store/Context";
import { useContext } from "react";

const RoutesPrivate =  ({components: Component,...rest}) =>{

    const {} = useContext(StoreContext);
        return(
            <Route
            {...rest}
                    render={() => token 
                       ? <Component{...rest}/>
                       : <Redirect to="./login"/>
                    }
            >
                

            </Route>
        )
}

export default RoutesPrivate;