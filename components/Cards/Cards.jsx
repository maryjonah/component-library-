import React from "react";
import "./Cards.css";

export default function Cards({ children, title, description }) {
    return (
        
        <div className="card">
            <img className="card--icon" src="./brand-icon.png" />
            <div className="card--details">
                <p className="card--details--title">{title}</p>
                <p className="card--details--text">{ description }</p>
            </div>
        </div>
    )
}
