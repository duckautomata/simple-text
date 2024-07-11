import { Typography } from "@mui/material";
import { OutputTextProps } from "./types";

export default function OutputText(props: OutputTextProps) {
    const { text } = props;

    return (
        <>
            <Typography padding="12px" whiteSpace="pre-wrap" id="output-text">
                <hr />
                {text}
            </Typography>
        </>
    );
}
