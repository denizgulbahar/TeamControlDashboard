interface InputField {
    name: string;
    label: string;
    value: string;
}
  
export type FormModalProps = {
    open: boolean;
    onClose: () => void;
    title: string;
    inputs: InputField[];
    onChange: (key: string, value: string) => void;
    onSubmit: () => void;
}