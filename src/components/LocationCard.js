import React from "react";
import { Card, Icon, Image } from "semantic-ui-react";

export default LocationCard;

export default function LocationCard({ name, type, dimension, residents }) 

function LocationCard({ locations }) 
  console.log(locations)

  return(
    <Card color='green'>
      <Card.Header>{locations.name}</Card.Header>
      <Card.Description>Type: {locations.type}</Card.Description>
      <Card.Description>Dimension: {locations.dimension}</Card.Description>
      {console.log(locations)}
    </Card>
  );
}