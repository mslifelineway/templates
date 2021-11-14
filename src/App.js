import "./App.css";
import CardSection from "./components/CardSection";
import ChartSection from "./components/ChartSection";
import Header from "./components/Header";
import { SectionPadding } from "./styles/Layout";

function App() {
  return (
    <div className="App">
      <Header />
      <SectionPadding>
        <CardSection />
        <ChartSection />
      </SectionPadding>
    </div>
  );
}

export default App;
