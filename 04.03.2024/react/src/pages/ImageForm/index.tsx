import Container from "../../components/Container";
import Heading from "../../components/Heading";
import {ImageFormComponent} from "../../components/ImageFormComponent";



export default function ImageDataForm(){
    return(
        <Container>
            <Heading level={1} content={"Zaktualizuj, lub utwórz element"} />
            <ImageFormComponent />
        </Container>
    )
}
