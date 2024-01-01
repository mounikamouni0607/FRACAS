import React, { useState } from "react";

const MyComponent = ({ tableData, setTableData }) => {
  console.log("data", tableData);
  // Function to handle the submit button click event
  const handleButtonClick = async () => {
    try {
      // Make an API call to fetch the data
      const response = await fetch("https://dummyjson.com/products");
      const data = await response.json();
      // Update the state with the fetched data
      setTableData(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  handleButtonClick();
};

export default MyComponent;
