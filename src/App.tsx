import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import TextInput from "./TextInput";
import { useState } from "react";
import OutputText from "./OutputText";
import ClearText from "./ClearText";
import { ThemeProvider } from "@emotion/react";
import { CssBaseline, useMediaQuery } from "@mui/material";
import { darkTheme, lightTheme } from "./theme";
import UpdateAlert from "./UpdateAlert";

export default function App() {
    const [text, setText] = useState("");
    const [tab, setTab] = useState(0);
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
                    <Tabs
                        aria-hidden="true"
                        value={tab}
                        onChange={(_e, value: number) => {
                            setTab(value);
                        }}
                        aria-label="mode"
                        sx={{ mb: 2 }}
                    >
                        <Tab label="Text to Speech" id="tab-speech" aria-controls="panel-speech" />
                        <Tab label="Clear Display" id="tab-clear" aria-controls="panel-clear" />
                    </Tabs>
                    <Box role="tabpanel" id="panel-speech" aria-labelledby="tab-speech" hidden={tab !== 0}>
                        <Typography aria-hidden="true" variant="subtitle1" sx={{ mb: 2 }}>
                            Press: Ctrl+Shift+U to turn on text-to-speech
                        </Typography>
                        <TextInput setText={setText} />
                        <OutputText text={text} />
                    </Box>
                    <Box role="tabpanel" id="panel-clear" aria-labelledby="tab-clear" hidden={tab !== 1}>
                        <ClearText />
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
}
