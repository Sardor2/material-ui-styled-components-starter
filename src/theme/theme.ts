import { createTheme } from '@mui/material/styles';


export interface CustomTheme {
    bg: {
        main: string,
        light: string
    },
    text: {
        main: string,
        light: string
    }
}

const theme = createTheme({
    palette: {
        primary: {
            main: '#3F8AE0'
        },
        secondary: {
            main: '#326eb3'
        }
    },
    bg: {
        main: '#fff',
        light: '#F4F5F7'
    },
    text: {
        main: '#172B4D',
        light: '#262930'
    }
});

export default theme;