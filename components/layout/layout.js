import { Fragment } from "react";
import MainHeader from "./main-header";
import Copyright from "../copyright/Copyright";

function Layout(props){
    return(
        <Fragment>
            <header>
                <MainHeader/>
            </header>
            <main>{props.children}</main>
            <footer>
                <Copyright/>
            </footer>
        </Fragment>
    )
}
export default Layout