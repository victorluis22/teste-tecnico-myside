import Image from "next/image";

import { Container, SearchBar, ShoppingCart } from "./style";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useTheme } from "styled-components";

export default function Header () {
    const theme = useTheme();

    return (
        <Container>
            <Image
                src={"/images/myside-logo.svg"}
                width={100}
                height={50}
                alt="Logo do site"
            />

            <SearchBar type="text" placeholder="Busque seu produto pelo nome"/>

            <ShoppingCart>
                <AiOutlineShoppingCart size={30} color={theme.colors.highlight}/>
            </ShoppingCart>
        </Container>
    )
}