import React from "react";
import { Button } from "reactstrap";
import { useForm } from "react-hook-form";
import Input from "./components/Input";

type Props = {
  data: any;
  onSubmit: any;
  alignItems?: any;
  isPending?: boolean;
};

function FormGenerator({ data, onSubmit, alignItems, ...props }: Props) {
  const { register, handleSubmit, errors } = useForm();
  const formRows: any[] = [];
  const dataArr = Object.entries(data);
  function generateInput(key: any, value: any, index: any) {
    return (
      <Input
        key={index}
        type={value.type}
        name={key}
        multiline={value.multiline}
        innerRef={register({
          required: value.required,
          pattern:
            typeof value.pattern === "string"
              ? new RegExp(value.pattern)
              : value.pattern,
          minLength: value.minLength,
          maxLength: value.maxLength,
          min: value.min,
          max: value.max,
        })}
        validations={{
          required: value.required,
          pattern: value.pattern,
          minLength: value.minLength,
          maxLength: value.maxLength,
          min: value.min,
          max: value.max,
        }}
        placeholder={value.title || key}
        inValid={errors[key]}
        formText={value.formText}
        formErrors={errors[key]}
        label={value.label}
        autoComplete={value.autoComplete}
      />
    );
  }
  if (Array.isArray(dataArr) && dataArr.length > 0) {
    dataArr.forEach(([key, value], index) => {
      const inputEl = generateInput(key, value, index);
      formRows.push(inputEl);
    });
  }

  let alignItemsClass = "justify-content-end";
  switch (alignItems) {
    case "start":
      alignItemsClass = "justify-content-start";
      break;
    case "end":
      alignItemsClass = "justify-content-start";
      break;
    case "center":
      alignItemsClass = "justify-content-center";
      break;
    default:
      break;
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="generate-form">
      {formRows}
      <div className={`d-flex ${alignItemsClass}`} style={{ marginTop: 20 }}>
        <Button disabled={props.isPending} color="primary">
          {"Submit"}
        </Button>
      </div>
    </form>
  );
}

export default FormGenerator;
