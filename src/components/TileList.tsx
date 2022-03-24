/**
 * @author ryumhan
 * @date 2022-03-24
 */

import { Raw } from "./Raw";

interface ITileListProps {
  input: string;
  position: { x: number; y: number };
  submit: boolean;
}

export function TileList({ input, position, submit }: ITileListProps) {
  return (
    <div className="tile-box">
      <Raw keyList={[""]} tileType={[0, 0, 0, 0, 0]} />
      <Raw keyList={[""]} tileType={[0, 0, 0, 0, 0]} />
      <Raw keyList={[""]} tileType={[0, 0, 0, 0, 0]} />
      <Raw keyList={[""]} tileType={[0, 0, 0, 0, 0]} />
      <Raw keyList={[""]} tileType={[0, 0, 0, 0, 0]} />
      <Raw keyList={[""]} tileType={[0, 0, 0, 0, 0]} />
    </div>
  );
}
