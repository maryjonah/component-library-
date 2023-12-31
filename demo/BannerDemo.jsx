import React from "react";
import Banner from "../components/Banner/Banner";

export default function BannerDemo() {
    return (
        <section className="component">
            <h3 className="component--title">BANNERS</h3>
            <div className="banners multi-line">
                <h3>MULTI LINE</h3>
                <Banner 
                    status="success" 
                    title="Congratulations!"
                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum."
                />
                <Banner 
                    status="warning" 
                    title="Attention"
                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum."
                />
                <Banner 
                    status="error" 
                    title="There is a problem with your application"
                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum."
                />
                <Banner 
                    status="neutral" 
                    title="Update available"
                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum."
                />

                <h3>SINGLE LINE</h3>
                <Banner 
                    status="success"
                    title="Congratulations!"
                />

                <Banner 
                    status="warning" 
                    title="Attention"
                />
                <Banner 
                    status="error" 
                    title="There is a problem with your application"
                />
                <Banner 
                    status="neutral" 
                    title="Update available"
                />


            </div>
        </section>
    )
}