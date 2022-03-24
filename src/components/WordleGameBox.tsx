/**
 * @author ryumhan
 * @date 2022-03-24
 */

import { KeyBoardContainer } from "../containers/KeyBoardContainer";
import { TileList } from "./TileList";

export const WordleGameBox = () => {
  return (
    <div
      className="game-container"
      tabIndex={0}
      onKeyDown={(e: any) => {
        return alert("key down!");
      }}
    >
      <TileList />
      <KeyBoardContainer />
    </div>
  );
};
