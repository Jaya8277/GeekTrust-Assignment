import Card from "../CartPage/Cart";
import "./CardList.css";
const CardList = ({ data }) => {
  return (
    <div className="cardList">
      {data.map((elem, i) => {
        return <Card key={i} {...elem} />;
      })}
    </div>
  );
};

export default CardList;
