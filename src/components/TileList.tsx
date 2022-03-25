/**
 * @author ryumhan
 * @date 2022-03-24
 */

import React from "react";
import { Raw, ITileElment } from "./Raw";

interface ITileListProps {
  tileMap: Array<Array<ITileElment>>; // 0 : gray, 1 : yellow, 2 : green
  currentRow: number;
}

export function TileList({ tileMap, currentRow }: ITileListProps) {
  return (
    <div className="tile-box">
      {tileMap.map((row: Array<ITileElment>, index: number) => {
        if (currentRow == index) {
          return <Raw tileElement={row} key={index} />;
        }

        return <Raw tileElement={row} key={index} />;
      })}
    </div>
  );
}

// export default React.memo(TileList);
