import Image from "next/image";

import { Container, SearchBar, SearchContainer, ShoppingCart } from "./style";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useTheme } from "styled-components";
import { useRouter } from "next/router";

export default function Header () {
    const theme = useTheme();
    const router = useRouter();

    return (
        <Container>
            <SearchContainer>
                <Image
                    src={"/images/myside-logo.svg"}
                    width={100}
                    height={50}
                    alt="Logo do site"
                    style={{cursor: "pointer"}}
                    onClick={() => router.push("/")}
                />

                <SearchBar type="text" placeholder="Search your product by its name"/>
            </SearchContainer>

            <ShoppingCart>
                <AiOutlineShoppingCart size={30} color={theme.colors.highlight}/>
            </ShoppingCart>
        </Container>
    )
}