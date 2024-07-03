import EmojiPicker from "emoji-picker-react";
import Feeling from "../../../../svg/Feeling";
import { useEffect, useState } from "react";

export default function EmojiPickers({ text, setText, textref }) {
  const [picker, setPicker] = useState(false);
  const [curserposition, setCurserposition] = useState();
  const handleEmoji = ({ emoji }) => {
    const ref = textref.current;
    ref.focus();
    const start = text.substring(0, ref.selectionStart);
    const end = text.substring(ref.selectionStart);
    const newText = start + emoji + end;
    setText(newText);
    setCurserposition(start.length + emoji.length);
  };

  useEffect(() => {
    textref.current.selectionEnd = curserposition;
  }, [curserposition]);
  return (
    <>
      <div className=" cursor-pointer relative">
        <div onClick={() => setPicker((prev) => !prev)}>
          <Feeling />
        </div>
        {picker && (
          <div className=" absolute -top-64 left-9">
            <EmojiPicker onEmojiClick={handleEmoji} />
          </div>
        )}
      </div>
    </>
  );
}
