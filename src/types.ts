import { Dispatch, SetStateAction } from "react";

export interface OutputTextProps {
    text: string;
}

export interface TextInputProps {
    setText: Dispatch<SetStateAction<string>>;
}
