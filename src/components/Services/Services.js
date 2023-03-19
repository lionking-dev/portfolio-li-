import React, { useContext } from 'react';
import Marquee from "react-fast-marquee";

import { ThemeContext } from '../../contexts/ThemeContext';

import devInfo from '../../data/data.json';
import './Services.css'
import SingleService from './SingleService/SingleService';

function Services() {
    const servicesData = devInfo.servicesData;
    const { theme } = useContext(ThemeContext);
    return (
        <>
            {servicesData.content.length > 0 && (
                <div className="services" id="services" style={{ backgroundColor: theme.secondary }}>
                    <div className="services-header">
                        <h1 style={{ color: theme.primary }}>Services</h1>
                    </div>
                    <div className="services-body">
                        <p style={{ color: theme.tertiary80 }}>
                            These are some of the services I offer. Reach out to me if I can help you with any!
                        </p>
                        <div className="services-bodycontainer">
                            {
                                servicesData.configuration.animationMode ?
                                    <div className='service--scroll'>
                                        <Marquee
                                            gradient={false}
                                            speed={80}
                                            pauseOnHover={true}
                                            pauseOnClick={true}
                                            delay={0}
                                            play={true}
                                            direction="left"
                                        >
                                            {servicesData.content.map(services => (
                                                <div className='single-service-animation'>
                                                    <SingleService
                                                        key={services.id}
                                                        id={services.id}
                                                        title={services.title}
                                                    />
                                                </div>

                                            ))}
                                        </Marquee>
                                    </div>
                                    :
                                    servicesData.content.map(services => (
                                        <SingleService
                                            key={services.id}
                                            id={services.id}
                                            title={services.title}
                                            icon={services.icon} />
                                    ))

                            }


                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default Services
