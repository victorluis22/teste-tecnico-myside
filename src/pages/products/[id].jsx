import Head from "next/head";
import CashDisplay from "@/components/global/CashDisplay";
import BasicButton from "@/components/global/BasicButton";
import Image from "next/image";

import { Container, Card, Info, Header, Details, ImageContainer } from "@/styles/product";
import { capitalizeFirstLetter } from "@/services/string";
import { FaCartShopping } from "react-icons/fa6";

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

    const addToCart = () => {
        alert("Added to cart");
    };

    return (
        <>
            <Head>
                <title>{`${title} | MySide Ecommerce`}</title>
                <meta name="description" content={title} />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Container>
                <Card>
                    <p>Category: <b>{capitalizeFirstLetter(category)}</b></p>
                    <Header>
                        <ImageContainer>
                            <Image src={image} alt={title} fill style={{objectFit: "contain"}} priority/>
                        </ImageContainer>
                        <Info>
                            <h3>{title}</h3>
                            <CashDisplay amount={price} discount={discount} />
                            <p>Brand: <b>{capitalizeFirstLetter(brand)}</b></p>
                            <p>Model: <b>{capitalizeFirstLetter(model)}</b></p>
                            <p>Color: <b>{capitalizeFirstLetter(color)}</b></p>

                            <BasicButton text={"Add to cart"} icon={<FaCartShopping/>} action={addToCart}/>
                        </Info>
                    </Header>

                    <Details>
                        <h3>Product Description</h3>
                        <p>{description}</p>
                    </Details>
                </Card>
            </Container>
        </>
    )
}