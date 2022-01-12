import { useState } from "react";
import { ChildArea } from "./ChildArea";
import "./styles.css";

export default function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");
  const [viewText, setViewText] = useState("");
  const [open, setOpen] = useState(false);
  const [view, setView] = useState(false);

  const onChangeText = (e) => {
    setText(e.target.value);
    // console.log(event.target.value);
  };

  const onClickOpen = () => {
    setOpen(!open);
  };
  const onClickCountUp = () => {
    setCount(count + 1);
    // console.log(count);
  };

  const onClickComfirm = () => {
    // alert(text);
    setView(true);
    setViewText(text);
    setText("");
  };

  const onClickNoView = () => {
    setView(false);
  };
  return (
    <div className="App">
      {/* <p>テスト</p>
      <button onClick={onClickCountUp}>カウントアップ</button>
      <p>{count}</p> */}

      <input
        type="text"
        placeholder="文字を入力"
        value={text}
        onChange={onChangeText}
      />
      <button onClick={onClickComfirm}>確定</button>
      <button onClick={onClickNoView}>非表示</button>
      <br />
      <button onClick={onClickOpen}>表示</button>
      <ChildArea open={open} text={viewText} view={view} />
    </div>
  );
}
