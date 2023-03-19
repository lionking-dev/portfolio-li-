import React from 'react'
import { Helmet } from 'react-helmet'

import { Navbar, Footer, Landing, About, Skills, Testimonials, Blog, Education, Experience, Contacts, Projects, Services, Achievement } from '../../components'
import devInfo from '../../data/data.json'

function Main() {
    return (
        <div>
            <Helmet>
                <title>{devInfo.headerData.name} - Porfolio</title>
            </Helmet>

            <Navbar />        
            <Landing />
            {
                devInfo.aboutData &&
                <About />
            }
            {
                devInfo.educationData.content.length > 0 &&
                <Education />
            }
            {
                devInfo.skillsData.content.length > 0 &&
                <Skills />
            }
            {
                devInfo.experienceData.content.length > 0 &&
                <Experience />
            }
            {
                devInfo.projectsData.content.length > 0 &&
                <Projects />
            }
            {
                devInfo.achievementData.achievements.length > 0 &&
                <Achievement />
            }
            {
                devInfo.servicesData.content.length > 0 &&
                <Services />
            }
            {
                devInfo.testimonialsData.length > 0 &&
                <Testimonials />
            }
            {
                devInfo.blogData.length > 0 &&
                <Blog />
            }
            <Contacts />
            <Footer />
        </div>
    )
}

export default Main
