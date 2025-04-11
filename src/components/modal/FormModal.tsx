import React from "react";
import { Dialog, DialogTitle, DialogContent, DialogActions, TextField, Button } from "@mui/material";
import { FormModalProps } from "../../types/formModal";

const FormModal: React.FC<FormModalProps> = ({ open, onClose, title, inputs, onChange, onSubmit }) => (
  <Dialog open={open} onClose={onClose}>
    <DialogTitle>{title}</DialogTitle>
    <DialogContent>
      {inputs.map((input, index) => (
        <TextField
          key={index}
          fullWidth
          label={input.label}
          value={input.value}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(input.name, e.target.value)}
          variant="outlined"
          margin="dense"
          type="text"
        />
      ))}
    </DialogContent>
    <DialogActions>
      <Button onClick={onClose} variant="text" color="inherit" >Cancel</Button>
      <Button onClick={onSubmit} color="primary" variant="contained">Add</Button>
    </DialogActions>
  </Dialog>
);

export default FormModal;
