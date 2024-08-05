import Container from "./components/Container/Container";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Spoiler from "./components/Spoiler/Spoiler";
import faqData from "./data/faq.json";
// імпортувати масив faqData з data/faq.json

const App = () => {
  return (
    <>
      <Header />
      <Main>
        <section>
          <Container>
            {faqData.map((element) => {
              return (
                <Spoiler
                  key={element.id}
                  head={element.head}
                  text={element.answer}
                  id={element.id}
                />
              );
            })}
          </Container>
        </section>
      </Main>
      <Footer />
    </>
  );
};

export default App;
