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

  const { timeOn } = useSelector((state: RootState) => ({
    timeOn: state.timeOn.onTime,
  }));

  const { answer } = useSelector((state: RootState) => ({
    answer: state.answer.value,
  }));

  const [show, setShow] = useState(false);
  const [resetSq, setReset] = useState(0);

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

  return (
    <div id="header">
      <Timer onTimeSeq={resetSq} />
      <div>Wordle Game</div>
      <div>{answer}</div>
      <Modal
        isOpen={show}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div>
          Result : <div>{answer}</div>
          <button onClick={closeModal}>X</button>
        </div>
        <form></form>
      </Modal>
    </div>
  );
}
