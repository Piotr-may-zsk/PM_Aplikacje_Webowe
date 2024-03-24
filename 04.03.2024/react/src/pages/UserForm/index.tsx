import Container from "../../components/Container";
import Heading from "../../components/Heading";
import {UserFormComponent} from "../../components/UserFormComponent";



function UserForm(){
    return(
        <Container>
            <Heading level={1} content={"Zaktualizuj, lub utwórz element"} />
            <UserFormComponent />
        </Container>
    )
}

export default UserForm