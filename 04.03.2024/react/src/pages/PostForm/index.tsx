import Container from "../../components/Container";
import Heading from "../../components/Heading";
import {PostFormComponent} from "../../components/PostFormComponent";



export default function PostForm(){
    return(
        <Container>
            <Heading level={1} content={"Zaktualizuj, lub utwórz element"} />
            <PostFormComponent />
        </Container>
    )
}
