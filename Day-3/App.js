import React from "react";
import ReactDOM  from "react-dom/client";
import './index.css';
import userLogo from './assets/logo.png';
import user from './assets/user icon.png';

// Using React.createElement
let div = React.createElement('div',{className:"title"},[React.createElement("h1",{}, "This is H1 tag"),React.createElement('h2',{},"This is H2 tag") ,React.createElement('h3',{},"This is H3 Tag")]);

// Using JSX
const header = (
    <div className="title">
        <h1>This is h1 tag</h1>
        <h2>This is h2 tag</h2>
        <h3>This is h3 tag</h3>
    </div>
) 

// Create a functional component of the same with JSX
// Components name should always be in capital
const Heading =()=>{
    return (
        <div className="title">
            <h1>This is h1 tag</h1>
            <h2>This is h2 tag</h2>
            <h3>This is h3 tag</h3>  
        </div>
    )
}

// passing attributes in JSX

const Header =()=>{
    return (
        <div className="title">
            <h1 style={{color:"red"}}>This is h1 tag</h1>
            <h2 style={{color:"blue"}}>This is h2 tag</h2>
            <h3 style={{color:"green"}}>This is h3 tag</h3>  
        </div>
    )
}

// Composition of a component ie. using one component in another. 

const Component2 =()=>{
    return(
    <div>I'm a different Component render me anywhere !</div>  
    )
}

const Header1 =()=>{
    return (
        <div className="title">
            <h1 style={{color:"red"}}>This is h1 tag</h1>
            <h2 style={{color:"blue"}}>This is h2 tag</h2>
            <Component2/>
            <h3 style={{color:"green"}}>This is h3 tag</h3>  
        </div>
    )
}

// `{TitleComponent}` vs `{<TitleComponent/>}` vs `{<TitleComponent></TitleComponent>}` in JSX.

const element = <h1>This is React Element</h1>; // This is React element or {TitleComponent}

const TitleElement = () => {
    return <h2 style={{ color: "red" }}>This Title Element</h2>;
}; // This is Title Component  can be rendered as {<TitleComponent></TitleComponent>} or shorthand for this or no need to pass any childrens inside component than use {<TitleComponent/>}

// Q: Create a Header Component from scratch using Functional Component with JSX
// - Add a Logo on Left
// - Add a search bar in middle
// - Add User icon on right
// - Add CSS to make it look nice

const HeaderMain =()=>{
    return(
        <div className="Title" key="title"> 
            <div  className="left">
                <img alt="logo" src={userLogo}></img>
            </div> 
            <div className="center">
                <input className="inputs" type="text" placeholder="Search"/>
            </div>
            <div className="right">
                <img alt="userIcon" src={user}/>
            </div>
        </div>
    )
}

let root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<HeaderMain/>);