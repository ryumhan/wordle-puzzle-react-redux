/**
 * @author ryumhan
 * @date 2022-03-24
 */

import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../module/store";

import { KeyBoardContainer } from "../containers/KeyBoardContainer";
import { TileList } from "../components/TileList";

import { addKey, deleteKey, UpdateTile } from "../module/listReducer";
import { increament } from "../module/counterReducer";

import { ITileElment } from "../components/Raw";

interface IControllerProps {
  answer: string;
  wordList: Array<string>;
}

export function Controller({ answer, wordList }: IControllerProps) {
  const dispatch = useDispatch();

  const { list, tilelist, counterState } = useSelector((state: RootState) => ({
    list: state.elementlist.list,
    tilelist: state.elementlist.titeList,
    counterState: state.counter,
  }));

  const onKeyDown = (e: KeyboardEvent) => {
    if (e.key == "Enter") {
      return onSubmitControl();
    }

    if (e.key == "Backspace") {
      return deleteKeyControl();
    }

    //TODO validation
    const regex = new RegExp("^[aA-zZ]{1,1}$");
    if (!regex.test(e.key)) {
      const koCh = new RegExp("^[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]{1,1}$");
      if (koCh.test(e.key)) {
        alert("Only English Available, please convert the language");
      }

      return;
    }

    addKeyControl(e.key);
  };

  const addKeyControl = (value: string) => {
    const word = getCurrentWord();
    if (word.length == 5) {
      return;
    }

    dispatch(addKey(value));
  };

  const deleteKeyControl = () => {
    const word = getCurrentWord();
    if (!word.length) {
      return;
    }

    dispatch(deleteKey());
  };

  const getCurrentWord = () => {
    let word: string = "";
    //extract word at current row
    const raw = counterState.raw;
    for (let i = raw * 5; i < 5 * (raw + 1); i++) {
      const ch = list[i];
      if (ch) {
        word = word.concat(ch.toLowerCase());
      }
    }

    return word;
  };

  const onSubmitControl = () => {
    const word = getCurrentWord();
    if (word.length != 5) {
      alert("Not complete word");
      return;
    }

    if (!wordList.includes(word)) {
      alert("Not Valid word in the list");
      return;
    }

    //Update Tile list
    dispatch(UpdateTile(compareAnswerWithWord(word)));
    //chage the current raw
    dispatch(increament());
  };

  const getinitArrayITileElment = () => {
    const tileList: Array<Array<ITileElment>> = new Array(6);
    //initialize Element
    for (let row = 0; row < 6; row++) {
      tileList[row] = new Array(5);

      for (let col = 0; col < 5; col++) {
        tileList[row][col] = { ch: "", type: 0 };
      }
    }

    return tileList;
  };

  const compareAnswerWithWord = (word: string) => {
    let tileTypeArray: Array<number> = [];

    for (let i = 0; i < 5; i++) {
      const idx = answer.indexOf(word[i]);
      // type matching
      if (answer[i] == word[i]) {
        tileTypeArray.push(2);
      } else if (idx != -1) {
        tileTypeArray.push(1);
      } else {
        tileTypeArray.push(0);
      }
    }

    return tileTypeArray;
  };

  const makeInputMap = () => {
    const tileMap = getinitArrayITileElment();

    list.forEach((element: string, index: number) => {
      const q = index;
      const col = index % 5;
      const currentRaw = Math.floor(q / 5);

      tileMap[currentRaw][col].ch = element;
      tileMap[currentRaw][col].type = tilelist[index] ? tilelist[index] : 0;
    });

    return tileMap;
  };

  return (
    <div
      className="game-container"
      tabIndex={0}
      onKeyDown={(e: any) => {
        onKeyDown(e);
      }}
    >
      <TileList tileMap={makeInputMap()} currentRow={counterState.raw} />
      <KeyBoardContainer
        inputlist={list}
        onSubmit={onSubmitControl}
        addKey={addKeyControl}
        deleteKey={deleteKeyControl}
      />
    </div>
  );
}

export default React.memo(TileList);
