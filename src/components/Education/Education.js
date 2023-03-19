import React, { useContext } from 'react';

import { ThemeContext } from '../../contexts/ThemeContext';

import './Education.css'
import EducationCard from './EducationCard';

// import { educationData } from '../../data/educationData'
import devInfo from '../../data/data.json'

function Education() {
    const educationData = devInfo.educationData;
    const { theme } = useContext(ThemeContext);
    return (
        <div className="education" id="resume" style={{ backgroundColor: theme.secondary }}>

            <div className="education-body">
                {
                    educationData.configuration.rightMode ?
                        <>
                            <div className="education-description">
                                <h1 style={{ color: theme.primary }}>Education</h1>
                                {educationData.content.map(edu => (
                                    <EducationCard
                                        key={edu.id}
                                        id={edu.id}
                                        institution={edu.institution}
                                        course={edu.course}
                                        startYear={edu.startYear}
                                        endYear={edu.endYear}
                                    />
                                ))}
                            </div>
                            <div className="education-image">
                                <img src={theme.eduimg} alt="" />
                            </div>
                        </> :
                        <>
                            <div className="education-image education-image-rightMode">
                                <img src={theme.eduimg} alt="" />
                            </div>
                            <div className="education-description education-description-rightMode">
                                <h1 className='education-title-rightMode' style={{ color: theme.primary }}>Education</h1>

                                {educationData.content.map(edu => (
                                    <div className='education-title-rightMode'>
                                        <EducationCard
                                            key={edu.id}
                                            id={edu.id}
                                            institution={edu.institution}
                                            course={edu.course}
                                            startYear={edu.startYear}
                                            endYear={edu.endYear}
                                        />
                                    </div>
                                ))}
                            </div>
                        </>
                }
            </div>
        </div>
    )
}

export default Education
