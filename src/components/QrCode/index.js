import React from "react";
import QrCode from "react-qr-code";

export default function QrCodeComp({ value }) {
  return <QrCode value={value} size={128}/>;
}
