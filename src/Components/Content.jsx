import React, { useState } from "react";
import { MdDelete } from "react-icons/md";
import { FaChevronUp } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";

import { Data } from "./Data";
function Content() {
  const [data, setData] = useState(Data);
  const clickHandler = () => {
    setData([]);
  };
  const deleteHandler = (id) => {
    let filterItems = data.filter((item) => {
      return item.id !== id;
    });
    setData(filterItems);
  };
  const increaseCount = (id) => {
    let newItem = data.map((item) => {
      if (item.id === id) {
        return { ...item, count: item.count + 1 };
      } else {
        return item;
      }
    });

    setData(newItem);
  };
  const decrementCounter = (id) => {
    const decrementValue = data.map((item) => {
      if (item.id === id) {
        return { ...item, count: item.count - 1 };
      } else {
        return item;
      }
    });
    setData(decrementValue);
  };
  let total = data.reduce((acc,curr)=>{
    return acc + curr.count * curr.price
  },0)
  return (
    <>
      <h1 style={{ marginTop: "2rem" }}>Your Bag</h1>
      {data.map((item) => {
        const { id, image, name, price, count } = item;

        return (
          <div
            key={id}
            style={{ display: "flex", marginLeft: "35rem", marginTop: "3rem" }}
          >
            <div>
              <img src={image} style={{ width: "6rem", height: "10rem" }}></img>
            </div>
            <div style={{ marginLeft: "2rem", marginTop: "1rem" }}>
              {name}
              <div>{price}</div>
              <MdDelete
                style={{ cursor: "pointer" }}
                onClick={() => deleteHandler(id)}
              />
            </div>
            <div style={{ marginLeft: "10rem", marginTop: "1rem" }}>
              <FaChevronUp
                style={{ cursor: "pointer" }}
                onClick={() => {
                  increaseCount(id);
                }}
              />
              <div>{count}</div>
              <FaChevronDown
                style={{ cursor: "pointer" }}
                onClick={() => decrementCounter(id)}
              />
            </div>
            <div></div>
          </div>
        );
      })}
      {data.length > 0 ? (
        <>
          <hr style={{ width: "55%", marginLeft: "22rem" }}></hr>
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <h5>Total</h5>
            <h5>${total}</h5>
          </div>
          <button className="btn btn-danger" onClick={() => clickHandler()}>
            Clear cart
          </button>
        </>
      ) : (
        <h6 style={{ marginTop: "2rem" }}>Is currently empty</h6>
      )}
    </>
  );
}

export default Content;
