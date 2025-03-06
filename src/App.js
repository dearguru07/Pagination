import "./styles.css";
import { useState } from "react";
import { useEffect } from "react";

const Card = (props) => {
  return (
    <div className="card">
      <img src={props.data.images[0]} alt="ProductImage" />
      <p>{props.data.title}</p>
      <p>₹ {props.data.price}</p>
    </div>
  );
};

const App = () => {
  const [single, setSingle] = useState([]);
  const [startPage, setStartPage] = useState(0);
  async function Info() {
    const data = await fetch("https://dummyjson.com/products?limit=500");
    const OriginalData = await data.json();
    // console.log(OriginalData.products);
    setSingle(OriginalData.products);
  }
  const Page_Size = 10;
  const totalProducts = single.length;
  const noOfPages = Math.ceil(totalProducts / Page_Size);
  useEffect(() => {
    Info();
  }, []);
  const Start = startPage * Page_Size;
  const End = Start + Page_Size;
  function HandlePage(x) {
    setStartPage(x);
  }
  return (
    <div className="App">
      <h4>Pagination</h4>
      <div className="paginationBar">
        {[...Array(noOfPages).keys()].map((x) => (
          <button className="page" key={x} onClick={() => HandlePage(x)}>
            {x}
          </button>
        ))}
      </div>
      <div className="parent">
        {single.slice(Start, End).map((x) => {
          return <Card data={x} key={x.id} />;
        })}
      </div>
    </div>
  );
};
export default App;
