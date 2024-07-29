import { useEffect, useState } from "react";
import Container from "./components/Container/Container";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

const App = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggle = () => setIsVisible(!isVisible);

  return (
    <>
      <Header />
      <Main>
        <section>
          <Container>
            <button onClick={toggle}>TOGGLE</button>
            <h1>Practice page</h1>
            {isVisible && <ExampleComponent />}
          </Container>
        </section>
      </Main>
      <Footer />
    </>
  );
};

export default App;

const ExampleComponent = () => {
  const [counter, setCounter] = useState(0);
  // Монтування (виклик, 1-й рендер компоненту)
  // Оновлення ()
  // Розможнування (зникнення компоненту)

  const onIncrement = () => setCounter(counter + 1);

  useEffect(() => {
    console.log("Монтування");
    const onKeyDown = (e) => {
      console.log(e.code);
    };
    document.addEventListener("keydown", onKeyDown);

    return () => {
      console.log("Виконання логіки перед розмонтуванням компоненту");
      document.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  useEffect(() => {
    console.log("Монтування + подальне оновлення компоненту");
    console.log(counter);
  }, [counter]);

  return (
    <div>
      <div>Example Component</div>
      <div>Counter result: {counter}</div>
      <button onClick={onIncrement}>INCREMENT +1</button>
    </div>
  );
};
