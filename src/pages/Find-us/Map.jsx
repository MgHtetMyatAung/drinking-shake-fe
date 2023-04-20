import React from "react";
import MapCard from "./MapCard";

const data = [
  {
    id: 1,
    title: "Retail Store",
    time: "Mon-Sat 9am to 5 pm",
    address: "1771 Madison Street Clarksville, TN 37043 United States",
  },
  {
    id: 1,
    title: "Retail Store",
    time: "Mon-Sat 9am to 5 pm",
    address: "1771 Madison Street Clarksville, TN 37043 United States",
  },
  {
    id: 1,
    title: "Retail Store",
    time: "Mon-Sat 9am to 5 pm",
    address: "1771 Madison Street Clarksville, TN 37043 United States",
  },
];
const Map = () => {
  return (
    <div className=" py-10">
      <div className=" container mx-auto grid grid-cols-1 lg:grid-cols-3">
        {data.map((address, i) => (
          <MapCard key={i} item={address} />
        ))}
      </div>
    </div>
  );
};

export default Map;
