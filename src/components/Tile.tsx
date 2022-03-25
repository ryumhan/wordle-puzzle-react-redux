/**
 * @author ryumhan
 * @date 2022-03-25
 */

import React from "react";

interface ITileProps {
  tileType: number; // 0 : gray, 1 : yellow, 2 : green
  input: string;
}

export function Tile({ input, tileType }: ITileProps) {
  const Tile =
    tileType == 0 ? (
      <div className="noramltile">{input}</div>
    ) : tileType == 1 ? (
      <div className="yellowtile">{input}</div>
    ) : (
      <div className="greentile">{input}</div>
    );

  return Tile;
}

// export default React.memo(Tile);
