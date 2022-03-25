/**
 * @author ryumhan
 * @date 2022-03-24
 */

import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../module/store";

import { KeyBoardContainer } from "../containers/KeyBoardContainer";
import { TileList } from "../components/TileList";

import { addKey, deleteKey } from "../module/keyReducer";

interface IControllerProps {
  answer: string;
  wordList: Array<string>;
}

export function Controller({ answer, wordList }: IControllerProps) {
  const dispatch = useDispatch();

  const { keyState, counterState } = useSelector((state: RootState) => ({
    keyState: state.key,
    counterState: state.counter,
  }));

  const onKeyDown = (e: KeyboardEvent) => {
    if (keyState.list.length && keyState.list.length % 5 === 0) {
      // alert("can not add anymore");
      return;
    }

    if (e.key == "Enter") {
      return onSubmitControl();
    }

    if (e.key == "Backspace") {
      return deleteKeyControl();
    }

    //TODO validation
    addKeyControl(e.key);
  };

  const addKeyControl = (value: string) => {
    dispatch(addKey(value));
  };

  const deleteKeyControl = () => {
    dispatch(deleteKey());
  };

  const onSubmitControl = () => {
    if (keyState.list.length != 5) {
      alert("Not complete word");
      return;
    }

    if (keyState.list.length != 5) {
      alert("Not Valid word in the list");
      return;
    }
  };

  const getinitArray = () => {
    const tileList: Array<Array<string>> = new Array(6);
    //initialize Element
    for (let row = 0; row < 6; row++) {
      tileList[row] = new Array(5);
      tileList[row].fill("");
    }

    return tileList;
  };

  const makeInputRawList = () => {
    const tileList = getinitArray();

    const list = keyState.list;
    list.forEach((element: string, index: number) => {
      const q = index;
      const col = index % 5;
      const currentRaw = Math.floor(q / 5);

      tileList[currentRaw][col] = element;
    });

    console.debug("makeInputRawList", tileList);
    return tileList;
  };

  return (
    <div
      className="game-container"
      tabIndex={0}
      onKeyDown={(e: any) => {
        onKeyDown(e);
      }}
    >
      <TileList
        inputRawCol={makeInputRawList()}
        submit={false}
        row={counterState.value}
      />
      <KeyBoardContainer
        inputlist={keyState.list}
        onSubmit={onSubmitControl}
        addKey={addKeyControl}
        deleteKey={deleteKeyControl}
      />
    </div>
  );
}

export default React.memo(TileList);
