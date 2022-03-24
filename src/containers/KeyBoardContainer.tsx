/**
 * @author ryumhan
 * @date 2022-03-24
 */

import { KeyBoardUI } from "../components/KeyBoardElement";

export const KeyBoardContainer: React.FC = () => {
  /**
   * dispatch the inpur ref value to redux store.
   * @param r the value user clicked
   */
  const onKeyClick = (r: string) => {};

  return <KeyBoardUI onKeyClick={onKeyClick} />;
};
