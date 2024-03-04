import Header from "../../components/Header/Header.tsx";
import {ContactForm} from "../../components/ContactForm";
import styled from "styled-components";

export default function Contact(){
    const Container = styled.div `
        width: 100%;
        padding: 20px;
        text-align: center;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;`
        return (
        <Container>
            <Header pageName={"Contact"} />
            <ContactForm />
        </Container>
    )
}

