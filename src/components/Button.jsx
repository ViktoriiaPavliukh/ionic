import React from "react";
import { IonButton, IonDatetime } from "@ionic/react";



const Button = () => {
  return (
    <div className="buttons">
      <IonButton>Default</IonButton>
      <IonButton disabled={true}>Disabled</IonButton>
    </div>
  );
};

export default Button;
