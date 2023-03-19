import React, { useContext } from 'react';

import { ThemeContext } from '../../contexts/ThemeContext';

import './Experience.css';

// import { experienceData } from '../../data/experienceData'
import devInfo from '../../data/data.json'
import ExperienceCard from './ExperienceCard';

function Experience() {
    const experienceData = devInfo.experienceData;
    const { theme } = useContext(ThemeContext);
    return (
        <div className="experience" id="experience" style={{ backgroundColor: theme.secondary }}>
            <div className="experience-body">
                {
                    experienceData.configuration.rightMode ?
                        <>
                            <div className="experience-image">
                                <img src={theme.expimg} alt="" />
                            </div>
                            <div className="experience-description">
                                <h1 style={{ color: theme.primary }}>Experience</h1>
                                {experienceData.content.map(exp => (
                                    <ExperienceCard
                                        key={exp.id}
                                        id={exp.id}
                                        jobtitle={exp.jobtitle}
                                        company={exp.company}
                                        startYear={exp.startYear}
                                        endYear={exp.endYear} />
                                ))}
                            </div>
                        </> :
                        <>
                            <div className="experience-description experience-desc-leftMode">
                                <h1 style={{ color: theme.primary }}>Experience</h1>
                                {experienceData.content.map(exp => (
                                    <ExperienceCard
                                        key={exp.id}
                                        id={exp.id}
                                        jobtitle={exp.jobtitle}
                                        company={exp.company}
                                        startYear={exp.startYear}
                                        endYear={exp.endYear} />
                                ))}
                            </div>
                            <div className="experience-image experience-image-leftMode">
                                <img src={theme.expimg} alt="" />
                            </div>
                        </>
                }
            </div>
        </div>
    )
}

export default Experience
