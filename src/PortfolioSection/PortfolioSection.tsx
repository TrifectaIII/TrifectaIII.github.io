import React from 'react';

import {
    Typography,
    Grid,
    makeStyles,
} from '@material-ui/core';

import ToolCard from '../components/ToolCard';
import ProjectCard from '../components/ProjectCard';
import tools from '../data/tools.json';
import projects from '../data/projects.json';

const useStyles = makeStyles((theme) => ({
    header: {
        paddingTop: '3rem',
    },
    subheader: {
        marginTop: '3rem',
        marginBottom: '1.5rem',
    },
}));

// Portfolio section showing off other projects
const PortfolioSection = (props: {}): JSX.Element => {

    const classes = useStyles();

    // generate cards for projects
    const projectCards: JSX.Element[] = [];
    let projectkey: keyof typeof projects;
    for (projectkey in projects) {

        if (Object.prototype.hasOwnProperty.call(projects, projectkey)) {

            const projectobj = projects[projectkey];
            projectCards.push(<ProjectCard key={projectkey} name={projectkey} info={projectobj} />);

        }

    }

    // generate cards for tools
    const toolCards: JSX.Element[] = [];
    let toolkey: keyof typeof tools;
    for (toolkey in tools) {

        if (Object.prototype.hasOwnProperty.call(tools, toolkey)) {

            const toolobj = tools[toolkey];
            toolCards.push(<ToolCard key={toolkey} name={toolkey} info={toolobj} />);

        }

    }

    return (
        <>
            <Typography
                variant='h3'
                className={classes.header}
                id='portfolio'
            >
                Portfolio
            </Typography>
            <Typography
                variant='h4'
                className={classes.subheader}
            >
                Projects
            </Typography>
            <Grid
                container
                spacing={3}
                justifyContent='center'
            >
                {projectCards}
            </Grid>
            <Typography
                variant='h4'
                className={classes.subheader}
            >
                Tools
            </Typography>
            <Grid
                container
                spacing={3}
                justifyContent='center'
            >
                {toolCards}
            </Grid>
        </>
    );

};

export default PortfolioSection;
