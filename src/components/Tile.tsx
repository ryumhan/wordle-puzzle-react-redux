/**
 * @author ryumhan
 * @date 2022-03-25
 */

import React, { useState } from "react";
import { useEffect } from "react";

interface ITileProps {
  tileType: number; // 0 : gray, 1 : yellow, 2 : green
  input: string;
}

export function Tile({ input, tileType }: ITileProps) {
  useEffect(() => {
    console.log("Tile rerender", input);
  });

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

export default React.memo(Tile);
