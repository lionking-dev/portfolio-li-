import React, { useContext } from 'react';
import { Button } from '@material-ui/core';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import { makeStyles } from '@material-ui/core/styles';

import './Landing.css';
import { ThemeContext } from '../../contexts/ThemeContext';
import devInfo from '../../data/data.json'

import {
    FaTwitter,
    FaFacebook,
    FaLinkedin,
    FaInstagram,
    FaCodepen,
    FaReddit,
    FaMedium,
    FaStackOverflow,
    FaGitlab,
    FaGithub,
    FaYoutube,
    FaBlogger,
} from 'react-icons/fa';

function Landing() {
    const headerData= devInfo.headerData;
    const socialsData = devInfo.socialsData;
    const { theme, drawerOpen } = useContext(ThemeContext);

    const useStyles = makeStyles((t) => ({
        resumeBtn: {
            color: theme.primary,
            borderRadius: '30px',
            textTransform: 'inherit',
            textDecoration: 'none',
            width: '150px',
            fontSize: '1rem',
            fontWeight: '500',
            height: '50px',
            fontFamily: 'var(--primaryFont)',
            border: `3px solid ${theme.primary}`,
            transition: '100ms ease-out',
            '&:hover': {
                backgroundColor: theme.tertiary,
                color: theme.secondary,
                border: `3px solid ${theme.tertiary}`,
            },
            [t.breakpoints.down('sm')]: {
                width: '180px',
            },
        },
        contactBtn: {
            backgroundColor: theme.primary,
            color: theme.secondary,
            borderRadius: '30px',
            textTransform: 'inherit',
            textDecoration: 'none',
            width: '150px',
            height: '50px',
            fontSize: '1rem',
            fontWeight: '500',
            fontFamily: 'var(--primaryFont)',
            border: `3px solid ${theme.primary}`,
            transition: '100ms ease-out',
            '&:hover': {
                backgroundColor: theme.secondary,
                color: theme.tertiary,
                border: `3px solid ${theme.tertiary}`,
            },
            [t.breakpoints.down('sm')]: {
                display: 'none',
            },
        },
    }));

    const classes = useStyles();

    return (
        <div className='landing'>
            <div className='landing--container'>
                <div
                    className='landing--container-left'
                    style={{ backgroundColor: theme.primary }}
                >
                    <div className='lcl--content'>
                        {socialsData.linkedIn && (
                            <a
                                href={socialsData.linkedIn}
                                target='_blank'
                                rel='noreferrer'
                            >
                                <FaLinkedin
                                    className='landing--social'
                                    style={{ color: theme.secondary }}
                                    aria-label='LinkedIn'
                                />
                            </a>
                        )}
                        {socialsData.facebook && (
                            <a
                                href={socialsData.facebook}
                                target='_blank'
                                rel='noreferrer'
                            >
                                <FaFacebook
                                    className='landing--social'
                                    style={{ color: theme.secondary }}
                                    aria-label='Facebook'
                                />
                            </a>
                        )}
                        {socialsData.github && (
                            <a
                                href={socialsData.github}
                                target='_blank'
                                rel='noreferrer'
                            >
                                <FaGithub
                                    className='landing--social'
                                    style={{ color: theme.secondary }}
                                    aria-label='GitHub'
                                />
                            </a>
                        )}
                        {socialsData.twitter && (
                            <a
                                href={socialsData.twitter}
                                target='_blank'
                                rel='noreferrer'
                            >
                                <FaTwitter
                                    className='landing--social'
                                    style={{ color: theme.secondary }}
                                    aria-label='Twitter'
                                />
                            </a>
                        )}
                        {socialsData.instagram && (
                            <a
                                href={socialsData.instagram}
                                target='_blank'
                                rel='noreferrer'
                            >
                                <FaInstagram
                                    className='landing--social'
                                    style={{ color: theme.secondary }}
                                    aria-label='Instagram'
                                />
                            </a>
                        )}
                        {socialsData.codepen && (
                            <a
                                href={socialsData.codepen}
                                target='_blank'
                                rel='noreferrer'
                            >
                                <FaCodepen
                                    className='landing--social'
                                    style={{ color: theme.secondary }}
                                    aria-label='Codepen'
                                />
                            </a>
                        )}
                        {socialsData.reddit && (
                            <a
                                href={socialsData.reddit}
                                target='_blank'
                                rel='noreferrer'
                            >
                                <FaReddit
                                    className='landing--social'
                                    style={{ color: theme.secondary }}
                                    aria-label='Reddit'
                                />
                            </a>
                        )}
                        {socialsData.medium && (
                            <a
                                href={socialsData.medium}
                                target='_blank'
                                rel='noreferrer'
                            >
                                <FaMedium
                                    className='landing--social'
                                    style={{ color: theme.secondary }}
                                    aria-label='Medium'
                                />
                            </a>
                        )}
                        {socialsData.stackOverflow && (
                            <a
                                href={socialsData.stackOverflow}
                                target='_blank'
                                rel='noreferrer'
                            >
                                <FaStackOverflow
                                    className='landing--social'
                                    style={{ color: theme.secondary }}
                                    aria-label='StackOverFlow'
                                />
                            </a>
                        )}
                        {socialsData.gitlab && (
                            <a
                                href={socialsData.gitlab}
                                target='_blank'
                                rel='noreferrer'
                            >
                                <FaGitlab
                                    className='landing--social'
                                    style={{ color: theme.secondary }}
                                    aria-label='Gitlab'
                                />
                            </a>
                        )}
                        {socialsData.youtube && (
                            <a
                                href={socialsData.youtube}
                                target='_blank'
                                rel='noreferrer'
                            >
                                <FaYoutube
                                    className='landing--social'
                                    style={{ color: theme.secondary }}
                                    aria-label='YouTube'
                                />
                            </a>
                        )}
                        {socialsData.blogger && (
                            <a
                                href={socialsData.blogger}
                                target='_blank'
                                rel='noreferrer'
                            >
                                <FaBlogger
                                    className='landing--social'
                                    style={{ color: theme.secondary }}
                                    aria-label='Blogger'
                                />
                            </a>
                        )}
                    </div>
                </div>
                {
                    headerData.configuration.showAvatar &&
                    <img
                        src={headerData.image ? headerData.image : headerData.defaultAvatar}
                        alt=''
                        className='landing--img'
                        style={{
                            opacity: 1,
                            borderColor: theme.secondary,
                        }}
                    />
                }
                <div
                    className='landing--container-right'
                    style={{ backgroundColor: theme.secondary }}
                >
                    <div
                        className='lcr--content'
                        style={{ color: theme.tertiary }}
                    >
                        <h6>{headerData.title}</h6>
                        <h1>{headerData.name}</h1>
                        <p>{headerData.desciption}</p>

                        <div className='lcr-buttonContainer'>
                            {headerData.resumePdf && (
                                <a
                                    href={headerData.resumePdf}
                                    download='resume'
                                    target='_blank'
                                    rel='noreferrer'
                                >
                                    <Button className={classes.resumeBtn}>
                                        Download CV
                                    </Button>
                                </a>
                            )}
                            <NavLink
                                to='/#contacts'
                                smooth={true}
                                spy='true'
                                duration={2000}
                            >
                                <Button className={classes.contactBtn}>
                                    Contact
                                </Button>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Landing;
