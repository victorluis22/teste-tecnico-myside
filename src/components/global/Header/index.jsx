import Image from "next/image";
import { CartButton, Container, SearchBar } from "./style";

import { AiOutlineShoppingCart } from "react-icons/ai";

export default function Header () {
    return (
        <Container>
            <Image
                src={"/images/myside-logo.svg"}
                width={100}
                height={50}
                alt="Logo do site"
            />

            <SearchBar type="text" placeholder="Busque seu produto pelo nome"/>

            <CartButton>
                <span>Meu Carrinho</span>
                <AiOutlineShoppingCart size={30}/>
            </CartButton>
        </Container>
    )
}