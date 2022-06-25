import { CssModules } from "./components/CssModules";
import { InlineStyle } from "./components/InlineStyle";
import { StyledJsx } from "./components/StyledJsx";
import { StyledComponent } from "./components/StyledComponent";
import { Emotion } from "./components/Emotion";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <InlineStyle />
      <CssModules />
      <StyledJsx />
      <StyledComponent />
      <Emotion />
    </div>
  );
}
