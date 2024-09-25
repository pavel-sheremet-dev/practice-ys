import Container from "./components/Container/Container";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import LogList from "./components/LogList/LogList";
import Main from "./components/Main/Main";

import data from "./data/data.json";

const App = () => {
  return (
    <>
      <Header />
      <Main>
        <section>
          <Container>
            <h1>Журнал</h1>
            <LogList logData={data} />
          </Container>
        </section>
      </Main>
      <Footer />
    </>
  );
};

export default App;
