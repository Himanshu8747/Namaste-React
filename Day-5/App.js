import React from "react";
import ReactDOM  from "react-dom/client";
import Header from './Components/Header';
import CardContainer from "./Components/CardContainer";

const AppLayout=()=>{
    return(
        <div>
            <Header/>
            <CardContainer/>
        </div>
    )
}

let root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout/>);