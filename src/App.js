import React, { useState } from "react";
import cx from "classnames";
import s from "./App.module.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faMessage,
  faCheck,
  faEnvelope,
  faPaperPlane,
  faLandmark,
} from "@fortawesome/free-solid-svg-icons";

const App = () => {
  const [currentStep, setCurrentStep] = useState(1);

  console.log(currentStep);
  const stepsData = [
    {
      srNo: 1,
      name: "Category & Recipient",
      icon: faMessage,
    },
    {
      srNo: 2,
      name: "Template & Filter",
      icon: faLandmark,
    },
    {
      srNo: 3,
      name: "Compose & Assign variable",
      icon: faEnvelope,
    },
    {
      srNo: 4,
      name: "Preview & Send",
      icon: faPaperPlane,
    },
  ];

  return (
    <div className={cx(s.steps, currentStep === 1 && s.border)}>
      {stepsData.map((step) => {
        return (
          <div
            key={step.srNo}
            className={cx(s.stepWrapper, step.srNo < currentStep && s.active)}
          >
            <p
              className={cx(s.step, step.srNo === currentStep && s.current)}
              onClick={() => setCurrentStep(step.srNo)}
            >
              {step.srNo === currentStep ? (
                <FontAwesomeIcon icon={step.icon} />
              ) : step.srNo > currentStep ? (
                `${step.srNo}. `
              ) : (
                <FontAwesomeIcon icon={faCheck} className={s.check} />
              )}
              {step.name}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default App;
