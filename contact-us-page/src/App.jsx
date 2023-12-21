import "./App.css";
import Contactheading from "./components/Contactheading";
import Contactsection from "./components/Contactsection";
import Container from "./components/Container";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Container>
        <Navbar />
        <Contactheading/>
        <Contactsection/>
      </Container>
    </>
  );
}

export default App;
