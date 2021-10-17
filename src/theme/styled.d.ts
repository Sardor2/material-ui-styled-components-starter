import 'styled-components';
import { Theme } from '@mui/material/styles';
import {CustomTheme} from "./theme";




declare module '@mui/material/styles' {
    interface Theme extends CustomTheme {}

    interface ThemeOptions extends CustomTheme {}
}

declare module 'styled-components' {
    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    export interface DefaultTheme extends Theme {}
}
