import Head from "next/head";
import CashDisplay from "@/components/global/CashDisplay";

import { Container, Card, Info, Header, Details, Button, ProductImage, ImageContainer } from "@/styles/product";
import { capitalizeFirstLetter } from "@/services/string";
import Image from "next/image";

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

    const {title, description, category, image, price, discount, brand, model, color} = product;

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
                            <Image src={image} alt={title} fill style={{objectFit: "contain"}} loading="lazy"/>
                        </ImageContainer>
                        <Info>
                            <h3>{title}</h3>
                            <CashDisplay amount={price} discount={discount} />
                            <p>Brand: <b>{capitalizeFirstLetter(brand)}</b></p>
                            <p>Model: <b>{capitalizeFirstLetter(model)}</b></p>
                            <p>Color: <b>{capitalizeFirstLetter(color)}</b></p>

                            <Button>Add to cart</Button>
                        </Info>
                    </Header>

                    <Details>
                        <h4>Product Description</h4>
                        <p>{description}</p>
                    </Details>
                </Card>
            </Container>
        </>
    )
}