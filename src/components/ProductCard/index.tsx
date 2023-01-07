import type { Component } from "solid-js";
import { Product } from "../../models";
import AddToCart from "../AddToCart";
import Box from "../Box";
import Image from "../Image";
import TextWithBadge from "../TextWithBadge";
import TextWithPrice from "../TextWithPrice";

interface Props {
    product: Product,
    width?: string;
}

const identifyVariant = (rate: number) =>
    rate < 1.8
        ? "empty"
        : rate > 1.7 && rate < 3.4
            ? "half"
            : "full";

const ProductCard: Component<Props> = (props: Props) => (

    <Box id={`product-${props.product.id.toString()}`}
        width={props.width ?? "w-full"}>
        <div class="flex h-full">
            <div class="bg-white px-3 rounded-tl-2xl rounded-bl-2xl">
                <Image src={props.product.image} alt={props.product.title}
                />
            </div>
            <div class="flex flex-col justify-between w-full">
                <div>
                    <TextWithPrice text={props.product.title} price={props.product.price} />
                    <p class="my-3 mx-5 line-clamp-5 text-base text-slate-800 dark:text-slate-100">
                        {props.product.description}
                    </p>
                </div>
                <div>
                    <TextWithBadge text={props.product.category}
                        variant={identifyVariant(props.product.rating.rate)}
                        count={props.product.rating.count}
                        spacing="m-3"
                    />
                    <div class="mx-5 mb-7 mt-3">
                        <AddToCart item={
                            {
                                id: props.product.id,
                                title: props.product.title,
                                price: props.product.price,
                                quantity: 1
                            }} />
                    </div>
                </div>
            </div>
        </div>
    </Box>
);

export default ProductCard;