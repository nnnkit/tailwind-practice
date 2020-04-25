import React from "react";
import Destination from "./Destination";
export interface IDestination {
  city: string;
  averagePrice: number;
  propertyCount: number;
  imageUrl: string;
  imageAlt: string;
}
let destinations: IDestination[] = [
  {
    city: "Toronto",
    averagePrice: 120,
    propertyCount: 76,
    imageUrl: "/img/toronto.jpg",
    imageAlt: "Toronto skyline",
  },
  {
    city: "Malibu",
    averagePrice: 215,
    propertyCount: 43,
    imageUrl: "/img/malibu.jpg",
    imageAlt: "Cliff in Malibu",
  },
  {
    city: "Chicago",
    averagePrice: 130,
    propertyCount: 115,
    imageUrl: "/img/chicago.jpg",
    imageAlt: "Chicago skyline",
  },
  {
    city: "Seattle",
    averagePrice: 135,
    propertyCount: 63,
    imageUrl: "/img/seattle.jpg",
    imageAlt: "Seattle skyline",
  },
  {
    city: "Colorado",
    averagePrice: 85,
    propertyCount: 47,
    imageUrl: "/img/colorado.jpg",
    imageAlt: "Lake in Colorado",
  },
  {
    city: "Miami",
    averagePrice: 115,
    propertyCount: 86,
    imageUrl: "/img/miami.jpg",
    imageAlt: "Beach in Miami",
  },
];
const Destinations = () => {
  return (
    <div className="p-8 bg-gray-200">
      <h3 className="text-2xl font-medium">Popular destinations</h3>
      <p className="pt-2 pb-4 text-xl text-gray-700">
        A selection of great work-friendly places in the world. With lots of
        activities and places around.
      </p>
      {destinations.map((destination) => (
        <Destination {...destination} />
      ))}
    </div>
  );
};

export default Destinations;
