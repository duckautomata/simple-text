import { Typography } from "@mui/material";
import { OutputTextProps } from "./types";

export default function OutputText(props: OutputTextProps) {
    const { text } = props;

    return (
        <>
            <hr />
            <Typography aria-live="assertive" padding="12px" whiteSpace="pre-wrap" id="output-text">
                {text}
            </Typography>
        </>
    );
}
