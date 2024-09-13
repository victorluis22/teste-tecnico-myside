import { Container, ImageContainer } from "./style";
import { useRouter } from "next/router";

import CashDisplay from "@/components/global/CashDisplay";
import Image from "next/image";

export default function ProductCard ({ id, image, title, description, price, discount }) {
    const router = useRouter();

    return (
        <Container onClick={() => router.push(`/products/${id}`)}>
            <ImageContainer>
                <Image src={image} alt={title} width={200} height={200} style={{objectFit: "contain"}} loading="lazy"/>
            </ImageContainer>
            <CashDisplay amount={price} discount={discount} />

            <h4>{title.slice(0, 60) + "..."}</h4>
            <p>{description.slice(0, 60) + "..."}</p>
        </Container>
    )
}