import Header from "../../components/Header/Header.tsx";
import {ContactForm} from "../../components/ContactForm";

export default function Contact(){
    return (
        <div>
            <Header pageName={"Contact"} />
            <ContactForm />
        </div>
    )
}

