/**
 * @author ryumhan
 * @date 2022-03-25
 */

import { Tile } from "./Tile";

interface IRawProps {
  tileType: Array<number>; // 0 : gray, 1 : yellow, 2 : green
  keyList: Array<string>;
}

export function Raw({ keyList, tileType }: IRawProps) {
  return (
    <div className="tile-list">
      <Tile input="A" tileType={0} />
      <Tile input="A" tileType={1} />
      <Tile input="b" tileType={2} />
      <Tile input="d" tileType={0} />
      <Tile input="f" tileType={0} />
    </div>
  );
}
