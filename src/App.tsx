/**
 * @author ryumhan
 * @date 2022-03-24
 */
import { ContentsHeader } from "./components/ContentsHeader";
import { WordleGameBox } from "./components/WordleGameBox";

import "./App.css";

const App: React.FC = () => {
  return (
    <div className="App">
      <header>
        <ContentsHeader />
      </header>
      <div id="game">
        <WordleGameBox />
      </div>
    </div>
  );
};

export default App;
