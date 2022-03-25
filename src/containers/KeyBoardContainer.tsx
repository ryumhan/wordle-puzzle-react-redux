/**
 * @author ryumhan
 * @date 2022-03-24
 */
import { KeyBoardUI } from "../components/KeyBoardElement";
import { listState } from "../module/listReducer";
import { ITileElment } from "../components/Raw";

interface IKeyBoardContainerProps {
  tileMap: Array<Array<ITileElment>>; // 0 : gray, 1 : yellow, 2 : green
  onSubmit: Function;
  addKey: Function;
  deleteKey: Function;
}

export function KeyBoardContainer({
  tileMap,
  onSubmit,
  addKey,
  deleteKey,
}: IKeyBoardContainerProps) {
  //make button type for marking
  let greens: Array<string> = [];
  let yellow: Array<string> = [];
  let grays: Array<string> = [];

  tileMap.forEach((row: Array<ITileElment>) => {
    row.forEach((element: ITileElment) => {
      element.type == 0
        ? grays.push(element.ch)
        : element.type == 1
        ? yellow.push(element.ch)
        : greens.push(element.ch);
    });
  });

  /**
   * dispatch the inpur ref value to redux store.
   * @param value the value user clicked
   */
  const onKeyClick = (value: string) => {
    switch (value) {
      case "{bksp}":
        deleteKey();
        break;
      case "{enter}":
        onSubmit();
        break;
      default:
        addKey(value);
    }
  };

  return (
    <KeyBoardUI
      onKeyClick={onKeyClick}
      greens={greens.join(" ")}
      yellows={yellow.join(" ")}
      grays={grays.join(" ")}
    />
  );
}
