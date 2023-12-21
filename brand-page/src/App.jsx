import "./App.css";
import Container from "./components/Container";
import Herosection from "./components/Herosection";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Container>
        <Navbar />
        <Herosection />
      </Container>
    </>
  );
}

export default App;
