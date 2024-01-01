import React, { useState, useEffect } from "react";
import axios from "axios";
import value from "./dummydata";
import HandleHeaderClick from "./handleSorting.js";
function ProductTable() {
  const [products, setProducts] = useState([]);
  const [sortDirection, setSortDirection] = useState("ASC");
  const [headers, setHeaders] = useState([
    { key: "id", displayName: "ID" },
    { key: "failureNumber", displayName: "Failure Number" },
    { key: "occurredDate", displayName: "Occurred Date" },
    { key: "rectifiedDate", displayName: "Rectified Date" },
    { key: "elrReference", displayName: "ELR Reference" },
    { key: "placeName", displayName: "Place Name" },
    { key: "failureDetails", displayName: "Failure Details" },
    { key: "failureCause", displayName: "Failure Cause" },
    { key: "failureNotes", displayName: "Failure Notes" },
    { key: "failureAction", displayName: "Failure Action" },
    { key: "failureCategory", displayName: "Failure Category" },
    { key: "status", displayName: "Status" },
    {
      key: "projectAttributionSupplier",
      displayName: "Project Attribution Supplier",
    },
    { key: "reviewNotes", displayName: "Review Notes" },
    {
      key: "rootCauseComponentDetails",
      displayName: "Root Cause Component Details",
    },
    { key: "attributable", displayName: "Attributable" },
    { key: "date", displayName: "Date" },
  ]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // debugger;
        //todo need to uncomment this lines then it will start making an api calls to get real time data
        const response = await axios.get('http://localhost:8080/graphical/get');
        if (response.status !== 200) {
          throw new Error('Network response was not ok');
        }
        console.log("response",response)
        value=response.data;
        setProducts(value || []);
        console.log("Product", products);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  console.log("products", products);

  return (
    <div>
      <h2>Product Table</h2>
      <table>
        {/* Table headers */}
        <thead>
          <tr>
            {/* Render table headers using map */}
            {headers.map((header) => (
              <th
                key={header.key}
                id={header.key}
                onClick={(e) => {
                  {
                    HandleHeaderClick(
                      e,
                      setProducts,
                      products,
                      sortDirection,
                      setSortDirection
                    );
                  }
                  console.log(header.key);
                }}
              >
                {header.displayName}
              </th>
            ))}
          </tr>
        </thead>
        {/* Table body with products mapped to rows */}
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td className="id">{product.id}</td>
              <td className="failureNumber">{product.failureNumber}</td>
              <td className="occurredDate">{product.occurredDate}</td>
              <td className="rectifiedDate">{product.rectifiedDate}</td>
              <td className="elrReference">{product.elrReference}</td>
              <td className="placeName">{product.placeName}</td>
              <td className="failureDetails">{product.failureDetails}</td>
              <td className="failureCause">{product.failureCause}</td>
              <td className="failureNotes">{product.failureNotes}</td>
              <td className="failureAction">{product.failureAction}</td>
              <td className="failureCategory">{product.failureCategory}</td>
              <td className="status">{product.status}</td>
              <td className="projectAttributionSupplier">
                {product.projectAttributionSupplier}
              </td>
              <td className="reviewNotes">{product.reviewNotes}</td>
              <td className="rootCauseComponentDetails">
                {product.rootCauseComponentDetails}
              </td>
              <td className="attributable">{product.attributable}</td>
              <td className="date">{product.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProductTable;
