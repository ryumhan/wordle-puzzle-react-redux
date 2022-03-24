/**
 * @author ryumhan
 * @date 2022-03-24
 */
import { KeyBoardUI } from "../components/KeyBoardElement";
import { useDispatch } from "react-redux";
import { keyState } from "../module/keyReducer";
import { addKey, deleteKey } from "../module/keyReducer";

interface IKeyBoardContainerProps {
  inputState: keyState;
}

export function KeyBoardContainer({ inputState }: IKeyBoardContainerProps) {
  // console.debug("KeyBoardContainer render");
  const dispatch = useDispatch();

  /**
   * dispatch the inpur ref value to redux store.
   * @param value the value user clicked
   */
  const onKeyClick = (value: string) => {
    switch (value) {
      case "{bksp}":
        return dispatch(deleteKey());
      case "{enter}":
        break;
      default:
        if (inputState.list.length) {
        }
        dispatch(addKey(value));
    }

    console.log("prev", inputState.list);
  };

  return <KeyBoardUI onKeyClick={onKeyClick} />;
}
