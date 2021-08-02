import { useEffect, useState } from "react";
import CardComp from "./components/CardComp";
import { Col, Row } from "@canonical/react-components";
import "./App.scss";

function App() {
  const [cards, setCards] = useState([]);
  useEffect(() => {
    (async () => {
      const response = await fetch(
        "https://people.canonical.com/~anthonydillon/wp-json/wp/v2/posts.json"
      );
      const data = await response.json();
      setCards([...data]);
    })();
  }, []);

  const cardList = cards.map((elem) => {
    return <CardComp key={elem.id} data={elem} />;
  });
  return <Row children={cardList}></Row>;
}

export default App;
