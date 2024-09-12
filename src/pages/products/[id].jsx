import Head from "next/head";
import Image from "next/image";

import { Container, Card, Info, Header, Details, Button } from "@/styles/product";
import CashDisplay from "@/components/global/CashDisplay";

export async function getServerSideProps(context) {
    const { id } = context.params;

    const res = await fetch(`https://fakestoreapi.in/api/products/${id}`);
    const data = await res.json();
  
    return {
      props: {
        product: data.product,
      },
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
                    <p>Category: <b>{category.charAt(0).toUpperCase() + category.slice(1)}</b></p>
                    <Header>
                        <Image 
                            src={image}
                            width={400}
                            height={400}
                            alt={title}
                        />
                        <Info>
                            <h3>{title}</h3>
                            <CashDisplay amount={price} discount={discount} />
                            <p>Brand: <b>{brand}</b></p>
                            <p>Model: <b>{model}</b></p>
                            <p>Color: <b>{color}</b></p>

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