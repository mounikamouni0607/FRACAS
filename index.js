import React from "react";
import ReactDOM from "react-dom/client";
import axios from "axios";
import MyComponent from "./src/App";
import { useState, useEffect } from "react";
import ProductTable from "./src/productTable";

// const getProductApi = "https://dummyjson.com/products";

// const GetData = async (data,setData) => {
//   try {
//     const res = await axios.get(getProductApi);
//     console.log(res);
//     if(res.status === 200) {
//         console.log(res.data?.products);
//         res.data?.products?.forEach(element => {
//             // console.log(element);
//         });
//         setData(res.data?.products);
//     }
//   } catch (error) {
//     console.error(error);
//   }
// };
// const RenderData=()=>{
//       // State to store the table data fetched from the API
// //   const [tableData, setTableData] = useState([]);
//  return (<>
//   {/* <MyComponent tableData={tableData} setTableData={setTableData}/> */}
//   <ProductTable/>
// </>)
// }

let root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<ProductTable />);

// root.appendChild(<Row/>);
