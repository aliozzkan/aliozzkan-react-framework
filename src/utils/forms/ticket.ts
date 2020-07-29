export const newTicket = {
  Type: {
    type: "string",
    Enum: [
      { value: "Insult", title: "Insult" },
      { value: "Payment", title: "Payment" },
      { value: "Bug", title: "Bug" },
      { value: "Other", title: "Other" },
    ],
    placeholder: "Type"
  },
  Value: {
    type: "string",
    multiline: true,
    placeholder: "Açıklama"
  },
};