import React, {useState, useRef} from 'react';

import {
    Button,
    Tooltip,
    makeStyles,
    SvgIconTypeMap,
} from '@material-ui/core';
import {OverridableComponent} from '@material-ui/core/OverridableComponent';

// import {
//     useAppSelector,
//     useAppDispatch,
// } from '../state/hooks';

const useStyles = makeStyles((theme) => ({
    root: {

    },
    icon: {
        marginRight: '0.5rem',
    },
}));

const tooltipDuration = 1000;

// button to copy contents
const CopyButton = (props: {
    icon: OverridableComponent<SvgIconTypeMap<{}, 'svg'>>,
    contents: string,
    variant?: 'contained' | 'outlined' | 'text',
    size?: 'large' | 'medium' | 'small',
    color?: 'default' | 'inherit' | 'primary' | 'secondary',
}): JSX.Element => {

    const classes = useStyles();

    const tooltipTimer = useRef<number | null>(0);
    const [tooltipOpen, setTooltipOpen] = useState(false);
    const [copySucceed, setCopySucceed] = useState(true);

    const displayTooltip = () => {

        setTooltipOpen(true);
        if (tooltipTimer.current !== null) {

            clearTimeout(tooltipTimer.current);

        }
        tooltipTimer.current = window.setTimeout(
            () => setTooltipOpen(false),
            tooltipDuration,
        );

    };

    const handleCopy = () => {

        navigator.clipboard.writeText(props.contents).then(
            () => {

                setCopySucceed(true);
                displayTooltip();

            },
            () => {

                setCopySucceed(false);
                displayTooltip();

            },
        );

    };

    return (
        <Tooltip
            title={copySucceed ? 'Copied!' : 'Copy failed, please reload page and try again.'}
            arrow
            open={tooltipOpen}
        >
            <Button
                onClick={handleCopy}
                style={{textTransform: 'none'}}
                variant={props.variant}
                size={props.size}
                color={props.color}
            >
                <props.icon className={classes.icon} /> {props.contents}
            </Button>
        </Tooltip>
    );

};

export default CopyButton;
