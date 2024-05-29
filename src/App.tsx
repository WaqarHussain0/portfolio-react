import Row from "./components/common/Row";
import Home from "./pages/Home.page";

function App() {
  return (
    <Row className="w-full justify-center">
      <Row className="w-full justify-center">
        <Home />
      </Row>
    </Row>
  );
}

export default App;
