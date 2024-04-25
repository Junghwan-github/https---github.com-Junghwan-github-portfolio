import React from "react";
import ResumeIntroduction from "../../../data/ResumeIntroduction.json";

function CreateResumeIntroduction () {
    return (
        <div>
        {ResumeIntroduction.map((resumeItem) => (
        <div className="text-block" key={resumeItem.id}>
            <h4>{resumeItem.title}</h4>
            <p>{resumeItem.content}</p>
        </div>
         ))}
         </div>
    );
}

export default CreateResumeIntroduction;