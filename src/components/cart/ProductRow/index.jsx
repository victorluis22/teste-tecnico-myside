import { Container, Info } from "./style";
import { summarizeText } from "@/services/string";
import { FaTrash } from "react-icons/fa";
import { useTheme } from "styled-components";
import { useContext } from "react";
import { CartContext } from "@/context/cart";

import CashDisplay from "@/components/global/CashDisplay";
import Image from "next/image";

export default function ProductRow (product) {
    const theme = useTheme();
    const { title, image, price} = product;
    const { removeProduct } = useContext(CartContext);

    return (
        <Container>
            <Image src={image} width={100} height={100} alt={title} />

            <Info>
                <p>{summarizeText(title)}</p>
                <CashDisplay amount={price} />
                <FaTrash onClick={() => removeProduct(product)} style={{cursor: "pointer"}} size={20} color={theme.colors.highlight}/>
            </Info>
        </Container>
    )
}