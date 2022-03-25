/**
 * @author ryumhan
 * @date 2022-03-24
 */

import { resolve } from "node:path/win32";
import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { Controller } from "./Controller";
import { updateAnswer } from "../module/answerReducer";

import raw from "../module/words.json";

interface IGameBoxProps {
  uri: string;
  timeset: boolean;
}

export function GameBox({ uri, timeset }: IGameBoxProps) {
  const dispatch = useDispatch();

  const [dataList, setData] = useState(raw);
  const [answer, setAnswer] = useState("");

  useEffect(() => {
    getRandomWord();
  }, [timeset]);

  const getRandomWord = () => {
    const random = Math.floor(Math.random() * dataList.length);
    dispatch(updateAnswer(dataList[random]));

    setAnswer(dataList[random]);
  };

  return <Controller answer={answer} wordList={dataList} />;
}
