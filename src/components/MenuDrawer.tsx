import React from 'react';

import {
    Box,
    SwipeableDrawer,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    makeStyles,
} from '@material-ui/core';
import {
    VerticalAlignTop as TopIcon,
} from '@material-ui/icons';

import {NavPoint, navMap} from '../Navigation';
import {MobileOnly} from './helpers';
import {
    useAppSelector,
    useAppDispatch,
} from '../state/hooks';
import {
    selectMenuDrawerOpen,
    openMenuDrawer,
    closeMenuDrawer,
} from '../state/globalSlice';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: '1rem',
    },
    linkText: {
        textDecoration: 'none',
        color: theme.palette.text.primary,
        '&:hover': {
            textDecoration: 'underline',
        },
    },
    inactive: {
        color: theme.palette.text.secondary,
    },
    hidden: {
        color: theme.palette.background.paper,
    },
}));

// drawer for navigation on mobile view
const MenuDrawer = (props: {
    scrollToTop: () => void,
    scrollToElement: (selector: string) => void,
}): JSX.Element => {

    const classes = useStyles();

    const dispatch = useAppDispatch();

    const open = useAppSelector(selectMenuDrawerOpen);

    // generate jumplinks for navitems
    const navItems = navMap.map((point: NavPoint): JSX.Element => <div
        className={classes.linkText}
        onClick={() => dispatch(closeMenuDrawer())}
        key={point.name}
    >
        <ListItem
            onClick={() => props.scrollToElement(point.jumpSelector)}
        >
            <ListItemIcon>
                <point.icon />
            </ListItemIcon>
            <ListItemText primary={point.name} />
        </ListItem>
    </div>);

    return (
        <MobileOnly>
            <SwipeableDrawer
                anchor='left'
                open={open}
                onOpen={() => dispatch(openMenuDrawer())}
                onClose={() => dispatch(closeMenuDrawer())}
            >
                <Box className={classes.root}>
                    <List>
                        {/* home item */}
                        <div
                            className={classes.linkText}
                            onClick={() => dispatch(closeMenuDrawer())}
                        >
                            <ListItem
                                onClick={props.scrollToTop}
                            >
                                <ListItemIcon>
                                    <TopIcon />
                                </ListItemIcon>
                                <ListItemText primary='Top' />
                            </ListItem>
                        </div>
                        {navItems}
                    </List>
                </Box>
            </SwipeableDrawer>
        </MobileOnly>
    );

};

export default MenuDrawer;
