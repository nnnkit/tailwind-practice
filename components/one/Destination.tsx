import React from "react";
import { IDestination } from "./Destinations";

const Destination = (props: IDestination) => {
  return (
    <div className="flex shadow-lg rounded-lg bg-white mb-10">
      <img
        src="/img/chicago.jpg"
        alt={props.imageAlt}
        className="rounded-lg w-1/3"
      />
      <div className="p-6 w-2/3">
        <h4 className="font-semibold text-2xl">{props.city}</h4>
        <p className="pt-2 pb-4 text-xl text-gray-700 ">
          $${props.averagePrice} / night average
        </p>
        <p className="text-indigo-700 text-xl font-semibold pt-6">
          Explore {props.propertyCount} properties
        </p>
      </div>
    </div>
  );
};

export default Destination;
