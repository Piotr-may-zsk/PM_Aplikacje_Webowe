import Container from "../../components/Container";
import Heading from "../../components/Heading";
import {AccountDataFormComponent} from "../../components/AccountDataFormComponent";



export default function AccountDataForm(){
    return(
        <Container>
            <Heading level={1} content={"Zaktualizuj, lub utwórz element"} />
            <AccountDataFormComponent />
        </Container>
    )
}
