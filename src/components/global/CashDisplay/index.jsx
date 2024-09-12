import { formatMoney } from "@/services/cash";
import { ActualPrice, Container, Discount, OriginalPrice } from "./style";

export default function CashDisplay ({ amount, discount }) {

    if(discount){
        const originalPrice = amount * (1 + (discount/100));

        return (
            <Container>
                <OriginalPrice>{formatMoney(originalPrice)}</OriginalPrice>

                <ActualPrice>
                    <p>{formatMoney(amount)} </p>
                    <Discount>{`- ${discount}% OFF`}</Discount>
                </ActualPrice>
            </Container>
        )
    }

    return (
        <Container>
            <ActualPrice>
                <p>{formatMoney(amount)} </p>
            </ActualPrice>
        </Container>
    )
}