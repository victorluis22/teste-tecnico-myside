import Image from "next/image";

import { Container, SearchBar, SearchBarInput, SearchContainer } from "./style";
import { useTheme } from "styled-components";
import { useRouter } from "next/router";
import { FaSearch } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useState } from "react";

export default function Header () {
    const theme = useTheme();
    const router = useRouter();
    const [productName, setProductName] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();

        const query = router.query;

        // Se o nome não for definido, ele não vai aparecer como query na URL
        if (productName) {
            query.name = productName;
        } else {
            delete query.name; 
        }


        setProductName("");

        router.push({
            pathname: "/",
            query
        });
    }

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

                <SearchBar onSubmit={handleSubmit}>
                    <SearchBarInput 
                        value={productName}
                        onChange={(e) => setProductName(e.target.value)}
                        type="text" 
                        placeholder="Search your product by its name"
                    />
                    <button type="submit">
                        <FaSearch type="submit" size={20} style={{cursor: "pointer"}} color={theme.colors.highlight}/>
                    </button>
                </SearchBar>
            </SearchContainer>

            <AiOutlineShoppingCart style={{cursor: "pointer"}} size={30} color={theme.colors.highlight}/>
        </Container>
    )
}