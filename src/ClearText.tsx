import { Box, TextField, Typography, useTheme } from "@mui/material";
import { Fragment, useState } from "react";
import "@fontsource/intel-one-mono/500.css";

// Intel One Mono is designed for legibility: serifed capital I, tailed lowercase l,
// slashed zero, and a distinct pipe. Fallbacks keep characters monospaced if it fails to load.
const CLEAR_FONT = '"Intel One Mono", "Cascadia Code", Consolas, monospace';

type CharKind = "upper" | "lower" | "digit" | "symbol" | "whitespace";

function kindOf(char: string): CharKind {
    if (/\s/u.test(char)) return "whitespace";
    if (/\d/u.test(char)) return "digit";
    if (/[\p{Lu}\p{Lt}]/u.test(char)) return "upper";
    if (/\p{L}/u.test(char)) return "lower";
    return "symbol";
}

function glyphFor(char: string): string {
    if (char === " ") return "␣";
    if (char === "\t") return "⇥";
    if (char === "\n" || char === "\r") return "⏎";
    return char;
}

export default function ClearText() {
    const [text, setText] = useState("");
    const theme = useTheme();

    const kindColor: Record<CharKind, string> = {
        upper: theme.palette.success.main,
        lower: theme.palette.text.primary,
        digit: theme.palette.info.main,
        symbol: theme.palette.warning.main,
        whitespace: theme.palette.text.disabled,
    };

    const chars = Array.from(text);

    return (
        <>
            <Typography aria-hidden="true" variant="subtitle1" sx={{ mb: 2 }}>
                Paste text below to display each character unambiguously
            </Typography>
            <TextField
                id="clear-text-input"
                variant="outlined"
                multiline
                maxRows={8}
                fullWidth
                spellCheck={false}
                autoComplete="off"
                onChange={(e) => {
                    setText(e.target.value);
                }}
            />
            <hr />
            <Box id="clear-text-output" sx={{ display: "flex", flexWrap: "wrap", gap: 0.75, padding: "12px" }}>
                {chars.map((char, index) => {
                    const kind = kindOf(char);
                    return (
                        <Fragment key={index}>
                            <Box
                                sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    borderRadius: 1,
                                    bgcolor: "action.hover",
                                    px: 0.75,
                                    py: 0.25,
                                }}
                            >
                                <Typography
                                    component="span"
                                    sx={{
                                        fontFamily: CLEAR_FONT,
                                        fontWeight: 500,
                                        fontSize: "1.75rem",
                                        lineHeight: 1.3,
                                        color: kindColor[kind],
                                    }}
                                >
                                    {glyphFor(char)}
                                </Typography>
                                <Typography
                                    aria-hidden="true"
                                    component="span"
                                    sx={{ fontSize: "0.65rem", lineHeight: 1, color: "text.secondary" }}
                                >
                                    {kind === "upper" ? `⇧${index + 1}` : index + 1}
                                </Typography>
                            </Box>
                            {char === "\n" && <Box sx={{ flexBasis: "100%", height: 0 }} />}
                        </Fragment>
                    );
                })}
            </Box>
            {chars.length > 0 && (
                <Typography
                    aria-hidden="true"
                    variant="caption"
                    sx={{ display: "block", padding: "0 12px", color: "text.secondary" }}
                >
                    <Box component="span" sx={{ color: kindColor.upper }}>
                        ⇧ CAPITALS
                    </Box>
                    {" · lowercase · "}
                    <Box component="span" sx={{ color: kindColor.digit }}>
                        digits
                    </Box>
                    {" · "}
                    <Box component="span" sx={{ color: kindColor.symbol }}>
                        symbols
                    </Box>
                    {" · "}
                    <Box component="span" sx={{ color: kindColor.whitespace }}>
                        ␣ space ⇥ tab ⏎ new line
                    </Box>
                </Typography>
            )}
        </>
    );
}
