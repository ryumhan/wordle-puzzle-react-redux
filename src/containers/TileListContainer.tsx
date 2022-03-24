/**
 * @author ryumhan
 * @date 2022-03-24
 */

import { TileList } from "../components/TileList";

export const TileListContainer: React.FC = () => {
  /**
   * dispatch the inpur ref value to redux store.
   * @param r the value user clicked
   */
  const onKeyClick = (r: string) => {};

  return <TileList />;
};
