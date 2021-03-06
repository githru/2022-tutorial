import { css } from "@emotion/react";
import { LineChart } from "./components/LineChart";
import { datas } from "./data";

function App() {
  return (
    <div
      css={css`
        width: 1300px;
        height: 800px;
        display: flex;
        justify-content: center;
        align-items: center;
      `}
    >
      <LineChart
        datas={datas}
        margin={{ top: 100, bottom: 100, left: 100, right: 100 }}
      />
    </div>
  );
}

export default App;
