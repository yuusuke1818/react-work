import { useHistory } from "react-router-dom";

export const Page1DetailA = () => {
  const history = useHistory();
  const onClickBack = () => history.goBack();
  return (
    <>
      <p>Page1DetailAです</p>
      <button onClick={onClickBack}>戻る</button>
    </>
  );
};
