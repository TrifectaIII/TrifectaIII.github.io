import React, {useRef} from 'react';

import {
    Container,
    CssBaseline,
    ThemeProvider,
    createTheme,
    ThemeOptions,
    responsiveFontSizes,
} from '@material-ui/core';

import Main from './pages/MainPage';
import Header from './components/Header';
import MenuDrawer from './components/MenuDrawer';
import {useAppSelector} from './state/hooks';
import {selectDarkMode} from './state/globalSlice';

// set up dark and light themes
// https://material-ui.com/customization/color/#playground
const lightThemeOptions: ThemeOptions = {
    palette: {
        type: 'light',
        primary: {
            main: '#794BC4',
        },
        secondary: {
            main: '#e65100',
        },
    },
};
const darkThemeOptions: ThemeOptions = {
    palette: {
        type: 'dark',
        primary: {
            main: '#794BC4',
        },
        secondary: {
            main: '#e65100',
        },
    },
    typography: {

    },
};

// Main App component
const App = (): JSX.Element => {

    // choose theme based on state
    const darkMode = useAppSelector(selectDarkMode);
    const lightTheme = createTheme(lightThemeOptions);
    const darkTheme = createTheme(darkThemeOptions);
    const theme = responsiveFontSizes(darkMode ? darkTheme : lightTheme);

    // ref for top appbar, used to calculate scroll offsets
    const barRef = useRef<null | HTMLElement>(null);

    // function for scrolling to the top of the page
    const scrollToTop = () => {

        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth',
        });

    };

    // function to scroll to a specific selector (used by navmap code)
    const scrollToElement = (selector: string) => {

        const jumpElement: HTMLElement | null = document.querySelector(selector);
        const distance = jumpElement?.getBoundingClientRect().top || 0;
        const barOffset = barRef.current?.offsetHeight || 0;
        window.scrollBy({
            top: distance - barOffset,
            left: 0,
            behavior: 'smooth',
        });

    };

    // function to handle scrollin to portfolio
    const scrollToPortfolio = () => {

        scrollToElement('#portfolio');

    };

    return (
        // provider theme
        <ThemeProvider theme={theme}>

            {/* normalize css */}
            <CssBaseline />

            <Header
                scrollToTop={scrollToTop}
                scrollToElement={scrollToElement}
                barRef={barRef}
            />
            <MenuDrawer
                scrollToTop={scrollToTop}
                scrollToElement={scrollToElement}
            />
            <Container>
                <Main
                    scrollToPortfolio={scrollToPortfolio}
                />
            </Container>
        </ThemeProvider>
    );

};

export default App;
