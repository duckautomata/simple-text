import { TextField } from "@mui/material";
import { TextInputProps } from "./types";

export default function TextInput(props: TextInputProps) {
    const { setText } = props;

    return (
        <TextField
            id="text-input"
            label="Text to render"
            variant="outlined"
            multiline
            maxRows={8}
            fullWidth
            onChange={(e) => {
                setText(e.target.value);
            }}
        />
    );
}
