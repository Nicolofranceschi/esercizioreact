import {Cardcontainer} from "./styled"

 export function Card(props) {
  return (
    <Cardcontainer color={props.backgroundColor}>
      <p>{props.title}</p>
      <p>{props.category}</p>
      <p>{props.pointOfInterest}</p>
    </Cardcontainer>
  );
}


