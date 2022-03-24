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

interface IKeyBoardProps {
  onKeyClick: Function;
}

export function KeyBoardUI({ onKeyClick }: IKeyBoardProps) {
  return (
    <div id="keyboard">
      <Keyboard
        display={display}
        // buttonAttributes={}
        layout={layout}
        onKeyPress={(button: string) => {
          onKeyClick(button);
        }}
        keyboardRef={(r: string) => {
          console.log("keyboardRef");
        }}
      />
    </div>
  );
}
