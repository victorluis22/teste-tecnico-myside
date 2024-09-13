import { Container } from "./style";

export default function BasicButton ({ text, icon, action}) {
    return (
        <Container onClick={() => action()}>
            {text}
            { icon ? icon : null }
        </Container>
    )
}