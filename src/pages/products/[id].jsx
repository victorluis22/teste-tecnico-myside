import CashDisplay from "@/components/global/CashDisplay";
import BasicButton from "@/components/global/BasicButton";
import PageHead from "@/components/global/PageHead";
import Image from "next/image";

import { Container, Card, Info, Header, Details, ImageContainer } from "@/styles/product";
import { capitalizeFirstLetter } from "@/services/string";
import { FaCartShopping } from "react-icons/fa6";
import { useContext } from "react";
import { CartContext } from "@/context/cart";
import { useRouter } from "next/router";

export async function getServerSideProps({ params }) {
    const { id } = params;

    const res = await fetch(`https://fakestoreapi.in/api/products/${id}`);
    const data = await res.json();
  
    return {
      props: {
        product: data.product,
      }
    };
  }

export default function Product ({ product }){
    const { title, description, category, image, price, discount, brand, model, color } = product;
    const { addProduct } = useContext(CartContext);
    const router = useRouter();

    const addToCart = () => {
        addProduct(product);
        
        router.push("/cart");
    };

    return (
        <>
            <PageHead title={`${title} | MySide Ecommerce`} description={title}/>

            <Container>
                <Card>
                    <p>Category: <b>{category ? capitalizeFirstLetter(category): "Not informed"}</b></p>
                    <Header>
                        <ImageContainer>
                            <Image src={image} alt={title} fill style={{objectFit: "contain"}} priority/>
                        </ImageContainer>
                        <Info>
                            <h3>{title}</h3>
                            <CashDisplay amount={price} discount={discount} />
                            <p>Brand: <b>{brand ? capitalizeFirstLetter(brand) : "Not informed"}</b></p>
                            <p>Model: <b>{model ? capitalizeFirstLetter(model) : "Not informed"}</b></p>
                            <p>Color: <b>{color ? capitalizeFirstLetter(color) : "Not informed"}</b></p>

                            <BasicButton text={"Add to cart"} icon={<FaCartShopping/>} action={addToCart}/>
                        </Info>
                    </Header>

                    <Details>
                        <h3>Product Description</h3>
                        <p>{description ?? "Not informed"}</p>
                    </Details>
                </Card>
            </Container>
        </>
    )
}