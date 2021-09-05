import * as React from "react";

const { useState } = React;

const SubmitButton = (props: {
  classButton: string;
  classSpinner: string;
  onClick(): void;
  text: string;
}) => {
  const [classButton, setClassButton] = useState(props.classButton);
  const [classSpinner, setClassSpinner] = useState(props.classSpinner);
  const [text, setText] = useState(props.text);
  if (props.classButton !== classButton) {
    setClassButton(props.classButton);
  }
  if (props.classSpinner !== classSpinner) {
    setClassSpinner(props.classSpinner);
  }
  if (props.text !== text) {
    setText(props.text);
  }

  return (
    <div
      className={classButton}
      onClick={() => {
        props.onClick();
      }}
    >
      <span className={classSpinner} role="status" aria-hidden="true">
        {text}
      </span>
    </div>
  );
};

export default SubmitButton;
