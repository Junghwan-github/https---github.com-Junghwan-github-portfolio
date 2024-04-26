import React from "react";

export function SectionTitle( {title, bgc} ) {
    return (
        <div className="section-title">
                <h2>{title}</h2>
                <span className="span-line-block" style={{'--bgc': bgc}}></span>
            </div>
    );
};


