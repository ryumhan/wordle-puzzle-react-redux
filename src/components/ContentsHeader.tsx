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

  return (
    <div id="header">
      <Timer onTimeSeq={resetSq} />
      <div>Wordle Game</div>
      <div>{answer}</div>
      <Modal isOpen={show} style={customStyles} ariaHideApp={false}>
        <div>Answer : {answer}</div>
        <br />
        <form>
          <div>Wordle 날짜 : {getCurrentTime()}</div>
          <p>시도 횟수 : {raw + 1}/6</p>
          <div>{tryList.toString()}</div>
          <button onClick={closeModal}>Share</button>
          <button onClick={closeModal}>Close</button>
        </form>
      </Modal>
    </div>
  );
}
