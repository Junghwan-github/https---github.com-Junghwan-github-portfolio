import React from "react";
import { SectionTitle } from "../Common";
import CreateSkillsList from "./CreateSkillsList";

const FullStackSkills = () => {
    return (
        <div className="skills__wrap">
            <section className="frontend-wrap sec">
            <SectionTitle  title={'Frontend'} bgc={'#4c00ff'} />
            <div className="info-box">
               <CreateSkillsList use={'front'} />
            </div>   
            </section>

            <section className="backend-wrap sec">
            <SectionTitle  title={'Backend'} bgc={'#4c00ff'} />
            <CreateSkillsList use={'back'} />
            </section>

            <section className="tools-wrap sec">
            <SectionTitle  title={'Tools'} bgc={'#4c00ff'} />
            <CreateSkillsList use={'tools'} />
            </section>
        </div>
    );
}

export default FullStackSkills;