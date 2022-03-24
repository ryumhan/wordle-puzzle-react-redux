/**
 * @author ryumhan
 * @date 2022-03-24
 */

import Keyboard from "react-simple-keyboard";
import "react-simple-keyboard/build/css/index.css";

const layout = {
  default: [
    "Q W E R T Y U I O P",
    "A S D F G H J K L",
    "{enter} Z X C V B N M {bksp}",
  ],
};

const display = {
  "{bksp}": "⌫",
  "{enter}": "↵",
};

type IKeyBoardUI = {
  onKeyClick: Function;
};

export const KeyBoardUI: React.FC<IKeyBoardUI> = ({ onKeyClick }) => {
  return (
    <div
      id="keyboard"
      onFocusCapture={() => {
        console.log("changed stryle");
      }}
      onFocus={() => {
        console.log("changed stryle");
      }}
    >
      <Keyboard
        display={display}
        // buttonAttributes={}
        layout={layout}
        keyboardRef={(r) => {
          onKeyClick(r);
        }}
      />
    </div>
  );
};
