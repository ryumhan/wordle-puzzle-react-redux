/**
 * @author ryumhan
 * @date 2022-03-24
 */

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../module/store";

import { KeyBoardContainer } from "../containers/KeyBoardContainer";
import { TileList } from "../components/TileList";

import { addKey } from "../module/keyReducer";

export function Controller({}) {
  const dispatch = useDispatch();

  const { keyState, counterState } = useSelector((state: RootState) => ({
    keyState: state.key,
    counterState: state.counter,
  }));

  const onKeyDown = (e: KeyboardEvent) => {
    if (keyState.list.length > 4) {
      alert("can not add anymore");
      return;
    }

    //TODO validation

    dispatch(addKey(e.key));
  };

  const onSubmit = () => {};

  return (
    <div
      className="game-container"
      tabIndex={0}
      onKeyDown={(e: any) => {
        onKeyDown(e);
      }}
    >
      <TileList
        input={keyState.value}
        submit={false}
        position={{ x: 1, y: 1 }}
      />
      <KeyBoardContainer inputState={keyState} />
    </div>
  );
}
