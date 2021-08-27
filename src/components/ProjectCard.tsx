import React, {useState} from 'react';

import {
    Card,
    CardContent,
    CardActions,
    CardActionArea,
    CardMedia,
    Typography,
    Grid,
    Button,
    makeStyles,
} from '@material-ui/core';

import ProjectInfo from './ProjectInfo';
import projectImages from '../data/project_images';

const useStyles = makeStyles((theme) => ({
    root: {

    },
    card: {
        // height: '100%',
        maxWidth: '100%',
    },
    image: {
        height: '10rem',
    },
}));

// Card for displaying a project
const ProjectCard = (props: {
    name: string,
    info: {
        link: string,
        github: string,
        languages: string[],
        techniques: string[],
        description: string,
        image: string,
    },
}): JSX.Element => {

    const classes = useStyles();

    const [infoOpen, setInfoOpen] = useState(false);

    return (
        <Grid
            item
            xs={12}
            sm={12}
            md={6}
            lg={4}
            className={classes.root}
        >
            <Card
                className={classes.card}
                raised
            >
                <CardActionArea
                    onClick={() => setInfoOpen(true)}
                >
                    <CardMedia
                        className={classes.image}
                        image={projectImages[props.info.image]}
                    />
                    <CardContent>
                        <Typography variant='h5' gutterBottom>
                            {props.name}
                        </Typography>
                        <Typography color='textSecondary'>
                            {props.info.description}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button
                        href={props.info.link}
                    >
                        Visit
                    </Button>
                    <Button onClick={() => setInfoOpen(true)}>
                        More Info
                    </Button>
                </CardActions>
            </Card>
            <ProjectInfo
                open={infoOpen}
                name={props.name}
                info={props.info}
                closer={() => setInfoOpen(false)}
            />
        </Grid>
    );

};

export default ProjectCard;
