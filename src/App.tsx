/**
 * @author ryumhan
 * @date 2022-03-24
 */
import { ContentsHeader } from "./components/ContentsHeader";

import "./App.css";
import { GameBox } from "./containers/GameBox";

const App: React.FC = () => {
  return (
    <div className="App">
      <header>
        <ContentsHeader />
      </header>
      <div id="game">
        <GameBox />
      </div>
    </div>
  );
};

export default App;
