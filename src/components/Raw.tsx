/**
 * @author ryumhan
 * @date 2022-03-25
 */

import React, { useEffect, useState } from "react";
import { Tile } from "./Tile";

export interface ITileElment {
  ch: string;
  type: number; // 0 : gray, 1 : yellow, 2 : green
}

interface IRawProps {
  tileElement: Array<ITileElment>; // 0 : gray, 1 : yellow, 2 : green
}

export function Raw({ tileElement }: IRawProps) {
  useEffect(() => {
    console.log("inputList rerender", tileElement);
  });

  return (
    <div className="tile-list">
      {tileElement.map((element: ITileElment, index: number) => {
        return <Tile input={element.ch} tileType={element.type} key={index} />;
      })}
    </div>
  );
}
