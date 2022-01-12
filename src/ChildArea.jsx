import { memo, useState } from "react";

export const ChildArea = (props) => {
  const { open, text, view } = props;

  const style = {
    backgroundColor: "red",
    height: "50px",
    width: "100%",
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    paddingLeft: "300px"
  };

  return (
    <div>
      {view ? <p>{text}</p> : null}
      <p style={style}>{open && "テスト"}</p>
    </div>
  );
};
