import {SvgIconTypeMap} from '@material-ui/core';
import {OverridableComponent} from '@material-ui/core/OverridableComponent';
import {
    Call as ContactIcon,
    FolderOpen as PortfolioIcon,
} from '@material-ui/icons';

export interface NavPoint {
    name: string,
    icon: OverridableComponent<SvgIconTypeMap<{}, 'svg'>>,
    jumpSelector: string,
}

// Type to determine navigation options on header
export type NavMapType = NavPoint[];

// navmap for this app
export const navMap: NavMapType = [
    {
        name: 'Contact',
        icon: ContactIcon,
        jumpSelector: '#contact',
    },
    {
        name: 'Portfolio',
        icon: PortfolioIcon,
        jumpSelector: '#portfolio',
    },
];
