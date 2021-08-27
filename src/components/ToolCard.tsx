import React from 'react';

import {
    Card,
    CardContent,
    CardActions,
    CardActionArea,
    Button,
    IconButton,
    Typography,
    Grid,
    Avatar,
    makeStyles,
} from '@material-ui/core';
import {
    GitHub,
} from '@material-ui/icons';

import general from '../data/general.json';
import toolLogos from '../data/tool_logos';

const useStyles = makeStyles((theme) => ({
    root: {

    },
    card: {
        // height: '100%',
        maxWidth: '100%',
    },
    avatar: {
        marginBottom: '1rem',
    },
}));

// Card for displaying a tool
const ToolCard = (props: {
    name: string,
    info: {
        description: string,
        link: string,
        github: string,
        logo: string,
    }
}): JSX.Element => {

    const classes = useStyles();

    const fullLink = `${general.page}/${props.info.link}`;

    return (
        <Grid
            item
            xs={12}
            sm={6}
            md={4}
            lg={3}
            className={classes.root}
        >
            <Card
                className={classes.card}
                raised
            >
                <CardActionArea href={fullLink}>
                    <CardContent>
                        <Avatar
                            src={toolLogos[props.info.logo]}
                            variant='rounded'
                            className={classes.avatar}
                        />
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
                        href={fullLink}
                    >
                        Visit
                    </Button>
                    <IconButton href={props.info.github}>
                        <GitHub />
                    </IconButton>
                </CardActions>
            </Card>
        </Grid>
    );

};

export default ToolCard;
