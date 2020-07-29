import React, { ReactElement } from "react";
import { FormGroup, Label, Input as BtInput, FormText } from "reactstrap";

type Props = {
  type: string;
  innerRef: any;
  name: string;
  placeholder: string;
  children?: any;
  inValid: boolean;
  formErrors: any;
  validations: any;
  multiline: boolean;
  formText: any;
  autoComplete?: string;
  label: string;
};

function Input(props: Props): ReactElement {
  function getInput() {
    let inputProps = {
      name: props.name,
      invalid: props.inValid ? true : false,
      innerRef: props.innerRef,
      placeholder: props.placeholder,
      autoComplete: props.autoComplete
    };

    switch (props.type) {
      case "text":
        return <BtInput type="text" {...inputProps} />;
      case "password":
        return <BtInput type="password" {...inputProps} />;
      default:
        return <span className="text-danger">Invalid Input</span>;
    }
  }

  return (
    <FormGroup>
      <Label>{props.label}</Label>
      {getInput()}
      <FormText>{props.formText}</FormText>
    </FormGroup>
  );
}

export default Input;
