import React from "react";
import { data, data1 } from "../Data/mockData";
import Product from "../Product";
import axios from "axios";
import { useEffect, useState } from "react";

function Demo() {
  // console.log(data);

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getData = async () => {
       try {
         const apiCallData = await axios.get("https://fakestoreapi.com/products")
         console.log(apiCallData)
         const fetchData = apiCallData.data
         console.log(fetchData)

         setProducts(
          fetchData
         ) 
       }
       catch (error){
          console.log(error)
       }
    };
     getData();
    
  }, []);

  console.log(products);

  return (
    <div>
      <h1>Mock Data :) </h1>
      {products.map((element) => {
        return (
          <Product
            id={element.id}
            price={element.price}
            category={element.category}
            rating={element.rating}
            image={element.image}
            title={element.title}
          />
        );
      })}
    </div>
  );
}

export default Demo;
