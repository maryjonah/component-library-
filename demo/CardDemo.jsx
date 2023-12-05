import React from "react";
import Cards from "../components/Cards/Cards.jsx";

export default function CardDemo() {
    return (
        <section className="component">
            <h3 className="component-title">CARDS</h3>
            <Cards 
                title="Easy Deployment" 
                description="Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis." 
            />
        </section>
    )
}