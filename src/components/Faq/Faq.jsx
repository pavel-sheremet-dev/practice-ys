import Spoiler from "../Spoiler/Spoiler";

export default function Faq({ faqData }) {
  return (
    <div>
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
    </div>
  );
}
