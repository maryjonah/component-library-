import React from "react";
import Badge from "../components/Badge/Badge";
import "./BadgeDemo.css";

export default function BadgeDemo() {
    return (
        <section className="component">
            <h3 className="component--title">Badges</h3>

            <div className="badges">
                <div className="first-row">
                    <Badge color="gray">Badge</Badge>
                    <Badge color="red">Badge</Badge>
                    <Badge color="yellow">Badge</Badge>
                    <Badge color="green">Badge</Badge>
                    <Badge color="blue">Badge</Badge>
                    <Badge color="indigo">Badge</Badge>
                    <Badge color="purple">Badge</Badge>
                    <Badge color="pink">Badge</Badge>
                </div>
                <div className="second-row">
                    <Badge color="gray" type="pill">Badge</Badge>
                    <Badge color="red" type="pill">Badge</Badge>
                    <Badge color="yellow" type="pill">Badge</Badge>
                    <Badge color="green" type="pill">Badge</Badge>
                    <Badge color="blue" type="pill">Badge</Badge>
                    <Badge color="indigo" type="pill">Badge</Badge>
                    <Badge color="purple" type="pill">Badge</Badge>
                    <Badge color="pink" type="pill">Badge</Badge>
                </div>  
            </div>

        </section>
    )
}
