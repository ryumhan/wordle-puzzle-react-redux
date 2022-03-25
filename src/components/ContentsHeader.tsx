/**
 * @author ryumhan
 * @date 2022-03-24
 */

import Modal from "react-modal";
import { Timer } from "./Timer";

import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../module/store";
import { useState, useEffect } from "react";

import { onReset } from "../module/timeOnReducer";
import { ITileElment } from "./Raw";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

export function ContentsHeader({}) {
  const dispatch = useDispatch();

  const [show, setShow] = useState(false);
  const [resetSq, setReset] = useState(0);

  const { timeOn } = useSelector((state: RootState) => ({
    timeOn: state.timeOn.onTime,
  }));

  const { answer } = useSelector((state: RootState) => ({
    answer: state.answer.value,
  }));

  const { raw } = useSelector((state: RootState) => ({
    raw: state.counter.raw,
  }));

  const { tryList } = useSelector((state: RootState) => ({
    tryList: state.elementlist.list,
  }));

  useEffect(() => {
    console.log("Time To Open Modal and Reset");
    if (timeOn > 0) {
      openModal();
    }
  }, [timeOn]);

  const closeModal = () => {
    setShow(false);
    setReset(timeOn);

    dispatch(onReset());
  };

  const openModal = () => {
    setShow(true);
  };

  const getCurrentTime = () => {
    const time = new Date();
    return time.toDateString() + "-" + time.toTimeString();
  };

  const makeShareInput = () => {
    let txt: string = "";
    //title, date
    txt = txt.concat("Wordle  날짜: ", getCurrentTime(), "\n");
    //try no.
    txt = txt.concat("시도 횟수 : ", (raw + 1).toString(), "/6", "\n");
    //tile input list.
    txt = txt.concat("word tile list ", "\n");
    tryList.forEach((ch: string, index: number) => {
      txt = txt.concat(ch);
      if (index % 5 == 4) {
        txt = txt.concat("\n");
      }
    });

    return txt;
  };

  /**
   * Copy to clipboard from result data.
   */
  const shareTo = () => {
    const textarea = document.createElement("textarea");
    textarea.value = makeShareInput();

    textarea.style.top = "0";
    textarea.style.left = "0";
    textarea.style.position = "fixed";

    document.body.appendChild(textarea);
    textarea.focus();
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);

    alert("copied text");
  };

  return (
    <div id="header">
      <Timer onTimeSeq={resetSq} />
      <div>Wordle Game</div>
      <div></div>
      <Modal isOpen={show} style={customStyles} ariaHideApp={false}>
        <div>Answer : {answer}</div>
        <br />
        <form>
          <h3>{makeShareInput()}</h3>
          <br />
          <br />
          <button onClick={shareTo}>Share</button>
          <button onClick={closeModal}>Close</button>
        </form>
      </Modal>
    </div>
  );
}
