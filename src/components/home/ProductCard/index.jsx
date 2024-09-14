import { Container, ImageContainer } from "./style";
import { useRouter } from "next/router";
import { summarizeText } from "@/services/string";

import CashDisplay from "@/components/global/CashDisplay";
import Image from "next/image";


export default function ProductCard ({ id, image, title, description, price, discount, priority }) {
    const router = useRouter();

    return (
        <Container onClick={() => router.push(`/products/${id}`)}>
            <ImageContainer>
                {
                    priority ?
                        <Image src={image} alt={title} width={200} height={200} style={{objectFit: "contain"}} priority={true}/>
                    :
                        <Image src={image} alt={title} width={200} height={200} style={{objectFit: "contain"}} loading="lazy"/>
                }
            </ImageContainer>
            <CashDisplay amount={price} discount={discount} />

            <h4>{summarizeText(title)}</h4>
            <p>{summarizeText(description)}</p>
        </Container>
    )
}