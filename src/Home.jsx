import { memo } from "react";

export const Home = memo((props) => {
  const { onClickPage1 } = props;
  return (
    <>
      {console.log({ props })}
      <p>Homeです</p>
      <button onClick={onClickPage1}>Page1DetailAへ</button>
    </>
  );
});
