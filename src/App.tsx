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
        <GameBox
          uri={
            "https://s3-us-west-2.amazonaws.com/secure.notion-static.com/9f26a372- 74a2-47fd-8b3b-8ea745f7cfeb/words.json"
          }
          timeset={false}
        />
      </div>
    </div>
  );
};

export default App;
