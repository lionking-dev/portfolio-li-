import React, { useContext } from 'react';
import Fade from 'react-reveal/Fade';

import { ThemeContext } from '../../../contexts/ThemeContext';
import './SingleService.css'
import { serviceIcons } from '../../../utils/serviceIcons';
import devInfo from '../../../data/data.json'
function SingleService({ id, title }) {
    const servicesData = devInfo.servicesData;
    const { theme } = useContext(ThemeContext);
    return (
        servicesData.configuration.animationMode ?
            <div key={id} className="single-service" style={{ backgroundColor: theme.primary400 }}>
                <div className="service-content" style={{ color: theme.tertiary }}>
                    <i className="service-icon">{serviceIcons(title)}</i>
                    <h4 style={{ color: theme.tertiary }}>{title}</h4>
                </div>
            </div> :
            <Fade bottom>
                <div key={id} className="single-service" style={{ backgroundColor: theme.primary400 }}>
                    <div className="service-content" style={{ color: theme.tertiary }}>
                        <i className="service-icon">{serviceIcons(title)}</i>
                        <h4 style={{ color: theme.tertiary }}>{title}</h4>
                    </div>
                </div>
            </Fade>
    )
}

export default SingleService
