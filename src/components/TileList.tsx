/**
 * @author ryumhan
 * @date 2022-03-24
 */

interface ITileListProps {
  input: string;
  position: { x: number; y: number };
  submit: boolean;
}

const tempStyle = {
  display: "inline-block",
  width: "100px",
  height: "100px",
  boder: "1px solid black",
  background: "orange",
};

export function TileList({ input, position, submit }: ITileListProps) {
  return (
    <div className="tile-box">
      <div className="tile-list">
        <div className="tile"></div>
        <div className="tile"></div>
        <div className="tile"></div>
        <div className="tile"></div>
        <div className="tile"></div>
      </div>
      <div className="tile-list">
        <div className="tile"></div>
        <div className="tile"></div>
        <div className="tile"></div>
        <div className="tile"></div>
        <div className="tile"></div>
      </div>
      <div className="tile-list">
        <div className="tile"></div>
        <div className="tile"></div>
        <div className="tile"></div>
        <div className="tile"></div>
        <div className="tile"></div>
      </div>
      <div className="tile-list">
        <div className="tile"></div>
        <div className="tile"></div>
        <div className="tile"></div>
        <div className="tile"></div>
        <div className="tile"></div>
      </div>
      <div className="tile-list">
        <div className="tile"></div>
        <div className="tile"></div>
        <div className="tile"></div>
        <div className="tile"></div>
        <div className="tile"></div>
      </div>
      <div className="tile-list">
        <div className="tile"></div>
        <div className="tile"></div>
        <div className="tile"></div>
        <div className="tile"></div>
        <div className="tile"></div>
      </div>
    </div>
  );
}
