import { useEffect, useState } from "react";
import "./App.css";
import React from "react";

const Card = (props) => {
  return (
    <div className="card">
      <img src={props.data.thumbnail} alt={props.data.brand}></img>
      <p>{props.data.title}</p>
    </div>
  );
};

const App = () => {
  const [result, setResult] = useState([]);
  const [startPage, setStartPage] = useState(0);

  const FetchData = async () => {
    const data = await fetch("https://dummyjson.com/products?limit=500");
    const json = await data.json();
    console.log(json.products);
    setResult(json?.products);
  };
  const FetchData = async () => {
    const data = await fetch("https://dummyjson.com/products?limit=500");
    const json = await data.json();
    console.log(json.products);
    setResult(json?.products);
  };  const FetchData = async () => {
    const data = await fetch("https://dummyjson.com/products?limit=500");
    const json = await data.json();
    console.log(json.products);
    setResult(json?.products);
  };  const FetchData = async () => {
    const data = await fetch("https://dummyjson.com/products?limit=500");
    const json = await data.json();
    console.log(json.products);
    setResult(json?.products);
  };  const FetchData = async () => {
    const data = await fetch("https://dummyjson.com/products?limit=500");
    const json = await data.json();
    console.log(json.products);
    setResult(json?.products);
  };
  const page_size = 10;
  const page_lenth = result.length;
  const pageNobers = Math.ceil(page_lenth / page_size);
  const Start = page_size * startPage;
  const End = Start + page_size;
  useEffect(() => {
    FetchData();
  }, []);
  const pageHandle = (n) => {
    setStartPage(n);
  };
  const PrevPage = () => {
    setStartPage((prev) => prev - 1);
  };
  const NextPage = () => {
    setStartPage((prev) => prev + 1);
  };
  return (
    <div className="App">
      <h3>Pagination</h3>
      <div className="btn-container">
        <button disabled={startPage === 0} onClick={() => PrevPage()}>
          ◀
        </button>
        {[
          ...Array(pageNobers)
            .keys()
            .map((x) => {
              return (
                <button
                  className={"btn" + (x === startPage ? "active" : "")}
                  key={x.id}
                  onClick={() => pageHandle(x)}
                >
                  {x}
                </button>
              );
            }),
        ]}
        <button
          disabled={startPage === pageNobers - 1}
          onClick={() => NextPage()}
        >
          ▶
        </button>
      </div>
      <div className="flex">
        {result.slice(Start, End).map((x) => {
          return <Card key={x.id} data={x} />;
        })}
      </div>
    </div>
  );
};
export default App;
