import React from 'react';

import {
    Button,
    AppBar,
    Box,
    Toolbar,
    Typography,
    IconButton,
    Tooltip,
    makeStyles,
} from '@material-ui/core';
import {
    Brightness3 as MoonIcon,
    Brightness7 as SunIcon,
    Menu as MenuIcon,
} from '@material-ui/icons';
import clsx from 'clsx';

import {NavPoint, navMap} from '../Navigation';
import {
    MobileOnly,
    DesktopOnly,
} from './helpers';
import {
    useAppSelector,
    useAppDispatch,
} from '../state/hooks';
import {
    selectDarkMode,
    toggleDarkMode,
    openMenuDrawer,
} from '../state/globalSlice';

const useStyles = makeStyles((theme) => ({
    root: {

    },
    white: {
        color: theme.palette.common.white,
    },
    textcolor: {
        color: theme.palette.text.primary,
    },
    noDec: {
        textDecoration: 'none',
    },
    rightSide: {
        marginLeft: 'auto',
    },
    spaceRight: {
        marginRight: '0.5rem',
    },
    navButton: {
        color: theme.palette.common.white,
        textTransform: 'none',
        marginRight: '1rem',
    },
}));

// Main page header for navigation, global state
const Header = (props: {
    scrollToTop: () => void,
    scrollToElement: (selector: string) => void,
    barRef: React.MutableRefObject<HTMLElement | null>,
}): JSX.Element => {

    const classes = useStyles();

    const dispatch = useAppDispatch();
    const darkMode = useAppSelector(selectDarkMode);

    const DarkModeIcon = darkMode ? SunIcon : MoonIcon;

    // generate jumplinks for navitems
    const navItems = navMap.map((point: NavPoint): JSX.Element => <div
        className={clsx(
            classes.white,
            classes.noDec,
        )}
        key={point.name}
    >
        <Button
            className={classes.navButton}
            onClick={() => props.scrollToElement(point.jumpSelector)}
        >
            <point.icon className={classes.spaceRight} />
            <Typography variant='body1'>
                {point.name}
            </Typography>
        </Button>
    </div>);

    return (
        <>
            <AppBar
                position='fixed'
                className={classes.root}
                ref={props.barRef}
            >
                <Toolbar>

                    <MobileOnly>

                        <IconButton
                            edge='start'
                            className={classes.white}
                            onClick={() => dispatch(openMenuDrawer())}
                        >
                            <MenuIcon color='inherit' />
                        </IconButton>

                    </MobileOnly>

                    <div
                        className={clsx(
                            classes.noDec,
                            classes.white,
                        )}
                    >
                        <Button
                            className={classes.navButton}
                            onClick={props.scrollToTop}
                        >
                            <Typography variant='h5'>
                                Dakota Madden-Fong
                            </Typography>
                        </Button>
                    </div>

                    <DesktopOnly>
                        <Box
                            display='flex'
                        >
                            {navItems}
                        </Box>
                    </DesktopOnly>

                    {/* right side */}
                    <Tooltip
                        title={darkMode ? 'Light Mode' : 'Dark Mode'}
                        className={classes.rightSide}
                    >
                        <IconButton
                            edge='end'
                            className={classes.white}
                            onClick={() => dispatch(toggleDarkMode())}
                        >
                            <DarkModeIcon />
                        </IconButton>
                    </Tooltip>

                </Toolbar>
            </AppBar>
            {/* toolbar for ofsetting page elements */}
            <Toolbar />
        </>
    );

};

export default Header;
