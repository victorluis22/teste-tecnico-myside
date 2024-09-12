import { formatMoney } from "@/services/cash";
import { Container } from "./style";
import Image from "next/image";

export default function ProductCard ({ image, title, description, price, rating }) {
    return (
        <Container>
            <Image 
                src={image}
                width={200}
                height={200}
                alt={title}
            />
            <h3>{title.slice(0, 60) + "..."}</h3>
            <p>{description.slice(0, 60) + "..."}</p>
            <p>{formatMoney(price)}</p>
        </Container>
    )
}