import React from 'react';

import {
    Slide,
    SlideProps,
    Dialog,
    DialogTitle,
    Button,
    IconButton,
    DialogActions,
    DialogContent,
    DialogContentText,
    makeStyles,
} from '@material-ui/core';
import {
    GitHub,
    Close,
} from '@material-ui/icons';

import projectImages from '../data/project_images';

const Transition = (
    props: JSX.IntrinsicAttributes & SlideProps,
    ref: React.Ref<unknown> | undefined,
) => <Slide direction='up' ref={ref} {...props} />;
const TransitionComponent = React.forwardRef(Transition);

const useStyles = makeStyles((theme) => ({
    root: {

    },
    closeButton: {
        // position: 'absolute',
        // right: theme.spacing(1),
        // top: theme.spacing(1),
    },
    visitButton: {
        marginRight: '1rem',
    },
}));

// info modal for projects
const ProjectInfo = (props: {
    open: boolean,
    name: string,
    info: {
        link: string,
        github: string,
        languages: string[],
        techniques: string[],
        description: string,
        image: string,
    },
    closer: () => void,
}): JSX.Element => {

    const classes = useStyles();

    return (
        <Dialog
            open={props.open}
            TransitionComponent={TransitionComponent}
            keepMounted
            onClose={props.closer}
            className={classes.root}
        >
            <img src={projectImages[props.info.image]} />
            <DialogTitle>
                {props.name}
            </DialogTitle>
            <DialogContent>
                <DialogContentText>
                    {props.info.description}
                </DialogContentText>
                <DialogContentText>
                    <b>Languages:</b>&nbsp;
                    {props.info.languages.join(', ')}
                </DialogContentText>
                <DialogContentText>
                    <b>Techniques:</b>&nbsp;
                    {props.info.techniques.join(', ')}
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button
                    href={props.info.link}
                    color='primary'
                    variant='contained'
                    className={classes.visitButton}
                >
                    Visit
                </Button>
                <IconButton href={props.info.github}>
                    <GitHub />
                </IconButton>
                <IconButton
                    onClick={props.closer}
                    color='secondary'
                    className={classes.closeButton}
                >
                    <Close />
                </IconButton>
            </DialogActions>
        </Dialog>
    );

};

export default ProjectInfo;
