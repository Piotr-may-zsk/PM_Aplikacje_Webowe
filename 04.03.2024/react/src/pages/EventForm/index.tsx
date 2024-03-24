import Container from "../../components/Container";
import Heading from "../../components/Heading";
import {EventFormComponent} from "../../components/EventFormComponent";



export default function EventForm(){
    return(
        <Container>
            <Heading level={1} content={"Zaktualizuj, lub utwórz element"} />
            <EventFormComponent />
        </Container>
    )
}
