import React from 'react';

import {
    Typography,
    ButtonGroup,
    makeStyles,
} from '@material-ui/core';
import {
    MailOutline,
    CallOutlined,
} from '@material-ui/icons';

import CopyButton from '../components/CopyButton';

const useStyles = makeStyles((theme) => ({
    root: {
        paddingTop: '3rem',
    },
    contactbuttons: {
        marginTop: '1rem',
    },
}));

import {useAppSelector} from '../state/hooks';
import {selectDarkMode} from '../state/globalSlice';

// Contact section with email and phone
const ContactSection = (): JSX.Element => {

    const classes = useStyles();

    // access dark mode info
    const darkMode = useAppSelector(selectDarkMode);

    return (
        <>
            <Typography
                variant='h3'
                className={classes.root}
                id='contact'
            >
                Contact Info
            </Typography>
            <ButtonGroup
                orientation='vertical'
                className={classes.contactbuttons}
                variant='text'
                color={darkMode ? 'secondary' : 'primary'}
            >
                <CopyButton
                    icon={MailOutline}
                    contents='maddenfong@gmail.com'
                />
                <CopyButton
                    icon={CallOutlined}
                    contents='+1 415 810 0334'
                />
            </ButtonGroup>
        </>
    );

};

export default ContactSection;
