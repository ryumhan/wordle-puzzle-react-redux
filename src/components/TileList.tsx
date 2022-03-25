/**
 * @author ryumhan
 * @date 2022-03-24
 */

import React from "react";
import { Raw } from "./Raw";

interface ITileListProps {
  inputRawCol: Array<Array<string>>;
  row: number;
  submit: boolean;
}

export function TileList({ inputRawCol, row, submit }: ITileListProps) {
  return (
    <div className="tile-box">
      {inputRawCol.map((raw: Array<string>, index: number) => {
        return <Raw inputList={raw} tileType={[0, 0, 0, 0, 0]} key={index} />;
      })}
    </div>
  );
}

export default React.memo(TileList);
