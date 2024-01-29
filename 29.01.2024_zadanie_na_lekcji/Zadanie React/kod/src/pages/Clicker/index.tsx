import Container from "@/components/Container";
import Heading from "@/components/Heading";
import Paragraph from "@/components/Paragraph";
import {useState} from "react";
import Button from "@/components/Button";

export default function Clicker() {
  const [count, setCount] = useState(0)

  return (
      <>
      <Container>
        <Heading level={1} content={"Poklikaj mnie"} />
        <Paragraph content={`Kliknieto ${count} raz(y)`} />
        <Button text={"Kliknij mnie"} onClick={()=> setCount(count+1)}/>
      </Container>
      </>
  );
}