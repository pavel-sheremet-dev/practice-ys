import Container from "./components/Container/Container";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Spoiler from "./components/Spoiler/Spoiler";

// імпортувати масив faqData з data/faq.json

const App = () => {
  return (
    <>
      <Header />
      <Main>
        <section>
          <Container>
            {/* Динамічно відмалювати компонент Spoiler в залежності від кількості елементів в масиві faqData */}
            <Spoiler
              head="Some question"
              text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti obcaecati perferendis delectus ipsum ad quidem earum ea corporis, quo doloremque ratione amet aliquid impedit, nisi, nulla officia vero iusto rerum."
            />
            <Spoiler
              head="Some question"
              text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti obcaecati perferendis delectus ipsum ad quidem earum ea corporis, quo doloremque ratione amet aliquid impedit, nisi, nulla officia vero iusto rerum."
            />
          </Container>
        </section>
      </Main>
      <Footer />
    </>
  );
};

export default App;
