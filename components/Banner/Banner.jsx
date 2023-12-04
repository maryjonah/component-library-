import React from "react";
import "./Banner.css";
import classnames from "classnames"
import { FaCheckCircle, FaExclamationTriangle } from "react-icons/fa";
import { MdDangerous } from "react-icons/md";
import { IoIosInformationCircle } from "react-icons/io";

export default function Banner({ children, status, title, description, ...rest}) {
    let statusClass = status && `banner-${status}`
    const allClasses = classnames(statusClass);
    console.log(allClasses)

    let displayedIcon = "";

    if (status === "success") {
        displayedIcon = <FaCheckCircle />
    } else if (status == "warning") {
        displayedIcon = <FaExclamationTriangle />
    } else if (status == "error") {
        displayedIcon = <MdDangerous />
    } else {
        displayedIcon = <IoIosInformationCircle />
    }

    return (
        <div className={`banner ${allClasses}`}>
            <div className="banner--icon">
                { displayedIcon }
            </div>
            <div className={`banner--details`}>
                <p className="banner--details--title">{title}</p>
                <p className="banner--details--info">{description ? description : ""}</p>
            </div>
        </div>
    )
}