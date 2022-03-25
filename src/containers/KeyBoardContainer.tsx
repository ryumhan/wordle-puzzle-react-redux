/**
 * @author ryumhan
 * @date 2022-03-24
 */
import { KeyBoardUI } from "../components/KeyBoardElement";
import { keyState } from "../module/keyReducer";

interface IKeyBoardContainerProps {
  inputlist: Array<string>;
  onSubmit: Function;
  addKey: Function;
  deleteKey: Function;
}

export function KeyBoardContainer({
  inputlist,
  onSubmit,
  addKey,
  deleteKey,
}: IKeyBoardContainerProps) {
  // console.debug("KeyBoardContainer render");

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

  return <KeyBoardUI onKeyClick={onKeyClick} />;
}
