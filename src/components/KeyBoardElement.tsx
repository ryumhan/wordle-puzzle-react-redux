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
  greens: string;
  yellows: string;
  grays: string;
}

interface ButtonColor {
  attribute: string;
  value: string;
  buttons: string;
}

export function KeyBoardUI({
  onKeyClick,
  greens,
  yellows,
  grays,
}: IKeyBoardProps) {
  const makeBtnAtrrbute = () => {
    let bttnAtr: Array<ButtonColor> = [];
    if (greens.length) {
      const gBtn: ButtonColor = {
        attribute: "style",
        value: "background-color : #6aaa64;",
        buttons: greens.toUpperCase(),
      };

      bttnAtr.push(gBtn);
    }

    if (yellows.length) {
      const yBtn: ButtonColor = {
        attribute: "style",
        value: "background-color : #c9b458;",
        buttons: yellows.toUpperCase(),
      };

      bttnAtr.push(yBtn);
    }

    if (grays.length) {
      const bBtn: ButtonColor = {
        attribute: "style",
        value: "background-color : #787c7e;",
        buttons: grays.toUpperCase(),
      };

      bttnAtr.push(bBtn);
    }

    return bttnAtr;
  };

  return (
    <div id="keyboard">
      <Keyboard
        buttonAttributes={makeBtnAtrrbute()}
        display={display}
        layout={layout}
        onKeyPress={(button: string) => {
          onKeyClick(button);
        }}
      />
    </div>
  );
}
