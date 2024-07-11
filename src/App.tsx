import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextInput from "./TextInput";
import { useState } from "react";
import OutputText from "./OutputText";
import { ThemeProvider } from "@emotion/react";
import { CssBaseline, useMediaQuery } from "@mui/material";
import { darkTheme, lightTheme } from "./theme";

export default function App() {
    const [text, setText] = useState("");
    const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

    return (
        <>
            <ThemeProvider theme={prefersDarkMode ? darkTheme : lightTheme}>
                <CssBaseline />
                <Container maxWidth="sm">
                    <Box sx={{ my: 4 }}>
                        <Typography variant="h4" component="h1" sx={{ mb: 2 }}>
                            Simple-Text
                        </Typography>
                        <TextInput setText={setText} />
                        <OutputText text={text} />
                    </Box>
                </Container>
            </ThemeProvider>
        </>
    );
}
