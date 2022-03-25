/**
 * @author ryumhan
 * @date 2022-03-24
 */

import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../module/store";
import { Controller } from "./Controller";
import { updateAnswer } from "../module/answerReducer";

import raw from "../module/words.json";

interface IGameBoxProps {
  uri?: string;
}

export function GameBox({ uri }: IGameBoxProps) {
  const { resetOn } = useSelector((state: RootState) => ({
    resetOn: state.timeOn.onReset,
  }));

  useEffect(() => {
    getRandomWord();
  }, [resetOn]);

  const dispatch = useDispatch();

  const [dataList, setData] = useState(raw);
  const [answer, setAnswer] = useState("");

  const getRandomWord = () => {
    const random = Math.floor(Math.random() * dataList.length);
    dispatch(updateAnswer(dataList[random]));

    setAnswer(dataList[random]);
  };

  return <Controller answer={answer} wordList={dataList} />;
}
