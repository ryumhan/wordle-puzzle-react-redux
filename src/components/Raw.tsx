/**
 * @author ryumhan
 * @date 2022-03-25
 */

import React, { useEffect, useState } from "react";
import { Tile } from "./Tile";

interface IRawProps {
  tileType: Array<number>; // 0 : gray, 1 : yellow, 2 : green
  inputList: Array<string>;
}

export function Raw({ inputList, tileType }: IRawProps) {
  useEffect(() => {
    console.log("inputList rerender", inputList);
  });

  return (
    <div className="tile-list">
      {inputList.map((value: string, index: number) => {
        return <Tile input={value} tileType={tileType[index]} key={index} />;
      })}
    </div>
  );
}

export default React.memo(Raw, (prev: IRawProps, next: IRawProps) => {
  return JSON.stringify(prev.inputList) != JSON.stringify(next.inputList);
});
