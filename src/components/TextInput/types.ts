interface ITextInput {
    props: {
        width: string;
        placeholder: string;
        onChangeFunc: Function
    };
}

interface IField {
    width: string; 
}

export type { ITextInput, IField };
