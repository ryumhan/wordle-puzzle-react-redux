/**
 * @author ryumhan
 * @date 2022-03-24
 */

import Modal from "react-modal";
import { Timer } from "./Timer";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../module/store";

export function ContentsHeader({}) {
  const { answer } = useSelector((state: RootState) => ({
    answer: state.answer.value,
  }));

  return (
    <div id="header">
      <Timer />
      <div>Wordle Game</div>
      <div>
        Answer:<span> {answer}</span>
      </div>
      <Modal
        isOpen={false}
        style={{
          overlay: {
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(255, 255, 255, 0.75)",
          },
          content: {
            position: "absolute",
            top: "40px",
            left: "40px",
            right: "40px",
            bottom: "40px",
            border: "1px solid #ccc",
            background: "#fff",
            overflow: "auto",
            WebkitOverflowScrolling: "touch",
            borderRadius: "4px",
            outline: "none",
            padding: "20px",
          },
        }}
      >
        This is Modal content
      </Modal>
    </div>
  );
}
