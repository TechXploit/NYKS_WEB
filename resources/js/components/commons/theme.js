import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
        primary: {
            light: "#F9509D",
            main: "#FF2C78",
            dark: "#A01850",
        },
        secondary: {
            light: "#5a33ff",
            main: "#3f00ff",
            dark: "#110072",
        },
        error: {
            light: "#ff4940",
            main: "#ff1800",
            dark: "#990400",
        },
        warning: {
            light: "#ffae43",
            main: "#ff9900",
            dark: "#ff6600",
        },
        info: {
            light: "#4588ff",
            main: "#0043ff",
            dark: "#003084",
        },
        success: {
            light: "#36ff87",
            main: "#00c650",
            dark: "#028c3a",
        },
        text: {
            primary: "#252525",
            secondary: "#aaa",
            disabled: "#ddd",
            hint: "rgba(0, 0, 0, 0.38)",
        },
    },
});
export default theme;

