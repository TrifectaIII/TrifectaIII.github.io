import React from 'react';

import {
    Box,
    Typography,
    Divider,
    Button,
    ButtonGroup,
    makeStyles,
} from '@material-ui/core';
import {
    FolderOpen,
    InsertDriveFileOutlined,
    GitHub,
} from '@material-ui/icons';

import ContactSection from '../PortfolioSection/ContactSection';
import PortfolioSection from '../PortfolioSection/PortfolioSection';
import general from '../data/general.json';
import resume from '../tex/dakotamaddenfong_resume.pdf';

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: '3rem',
    },
    text: {
        marginTop: '3rem',
    },
    mainbuttons: {
        marginTop: '3rem',
    },
    sectionheader: {
        marginTop: '2rem',
    },
    contactbuttons: {
        marginTop: '1rem',
    },
    divider: {
        width: '50%',
        margin: '10px',
    },
    icon: {
        marginRight: '0.5rem',
    },
    subheader: {
        marginTop: '3rem',
        marginBottom: '1.5rem',
    },
}));

// main index page for empty route
const MainPage = (props: {
    scrollToPortfolio: () => void,
}): JSX.Element => {

    const classes = useStyles();

    return (
        <Box
            alignItems='center'
            display='flex'
            flexDirection='column'
            className={classes.root}
        >
            <Typography variant='h2' align='center'>
                Dakota Madden-Fong
            </Typography>
            <Divider
                variant='fullWidth'
                className={classes.divider}
            />
            <Typography variant='h2' align='center'>
                TrifectaIII
            </Typography>

            <Typography
                variant='body1'
                className={classes.text}
                align='center'
            >
                A coder living and working in San Francisco, CA.
                I focus on software and web development.
            </Typography>

            <ButtonGroup
                orientation='vertical'
                className={classes.mainbuttons}
                variant='contained'
                size='large'
            >
                <Button
                    href={resume}
                    color='primary'
                >
                    <InsertDriveFileOutlined className={classes.icon} /> Resume
                </Button>
                <Button
                    onClick={props.scrollToPortfolio}
                    color='secondary'
                >
                    <FolderOpen className={classes.icon} />  Portfolio
                </Button>
                <Button
                    href={general.github}
                    color='primary'
                >
                    <GitHub className={classes.icon} />  GitHub
                </Button>
            </ButtonGroup>

            <ContactSection />

            <PortfolioSection />

        </Box>
    );

};

export default MainPage;
