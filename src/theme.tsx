import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

// A custom theme for this app
export const darkTheme = createTheme({
    palette: {
        mode: "dark",
        primary: {
            main: "#19857b",
        },
        secondary: {
            main: "#556cd6",
        },
        error: {
            main: red.A400,
        },
    },
});

export const lightTheme = createTheme({
    palette: {
        mode: "light",
        primary: {
            main: "#556cd6",
        },
        secondary: {
            main: "#19857b",
        },
        error: {
            main: red.A400,
        },
    },
});
