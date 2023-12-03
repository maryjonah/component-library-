import React from "react"
import classnames from "classnames"
import "./Badge.css";

export default function Badge({ children, className, size, color, type, ...rest }) {
    let sizeClass = size && `button-${size}`
    let colorClass = color && `button-${color}`
    let typeClass = type && `button-${type}`;
    const allClasses = classnames(sizeClass, colorClass, className, typeClass)
    console.log(allClasses)
    
    return (
        <button className={allClasses} {...rest}>
            {children}
        </button>
    )
}