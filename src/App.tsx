import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextInput from "./TextInput";
import { useState } from "react";
import OutputText from "./OutputText";
import { ThemeProvider } from "@emotion/react";
import { CssBaseline, useMediaQuery } from "@mui/material";
import { darkTheme, lightTheme } from "./theme";
import UpdateAlert from "./UpdateAlert";

export default function App() {
    const [text, setText] = useState("");
    const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

    return (
        <ThemeProvider theme={prefersDarkMode ? darkTheme : lightTheme}>
            <CssBaseline />
            <UpdateAlert />
            <Container maxWidth="sm">
                <Box sx={{ my: 4 }}>
                    <Typography aria-hidden="true" variant="h4" component="h1" sx={{ mb: 2 }}>
                        Simple-Text
                    </Typography>
                    <Typography aria-hidden="true" variant="subtitle1" sx={{ mb: 2 }}>
                        Press: Ctrl+Shift+U to turn on text-to-speech
                    </Typography>
                    <TextInput setText={setText} />
                    <OutputText text={text} />
                </Box>
            </Container>
        </ThemeProvider>
    );
}
