import React from "react";
import Cards from "../Cards/Cards";
import "./Main.css"

const Main = props => (
    <div
        className={
            props.shake
                ? 'container d-flex flex-wrap justify-content-center shake'
                : 'container d-flex flex-wrap justify-content-center'
        }
    >
        {props.characters.map((a, i) => 
        <Cards name={a} key={i} clickEvent={props.clickEvent} />)}
    </div>
);

export default Main;