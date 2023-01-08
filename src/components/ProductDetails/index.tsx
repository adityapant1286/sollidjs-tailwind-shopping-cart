import { Component, createMemo, Show } from "solid-js";
import { useParams } from "@solidjs/router";
import Box from "../Box";
import Image from "../Image";
import TextWithBadge from "../TextWithBadge";
import { formatCurrency } from "../../utils/locale";
import { products } from "../../state";
import Loader from "../Loader";

interface Props {
}

const identifyVariant = (rate: number) =>
    rate < 1.8
        ? "empty"
        : rate > 1.7 && rate < 3.4
            ? "half"
            : "full";

const ProductDetails: Component<Props> = (props: Props) => {
    const { id } = useParams();
    const identifiedProduct = createMemo(() => products().find((p) => p.id === parseInt(id)));

    return (
        <div class="m-8">
            <Show when={identifiedProduct()} fallback={<Loader />}>
                <Box id={`product-${identifiedProduct()!.id.toString()}`}
                    width="w-full" height="h-full">
                    <div class="flex h-full flex-col md:flex-row">
                        <div class="bg-white p-3 rounded-tl-2xl rounded-tr-2xl
                        md:rounded-bl-2xl md:rounded-tr-none">
                            <Image src={identifiedProduct()!.image} alt={identifiedProduct()!.title}
                                width="w-[240px] md:w-[480px] mx-auto" />
                        </div>
                        <div class="flex flex-col justify-between w-full p-3">
                            <div class="mx-5">
                                <div class="flex flex-col my-4">
                                    <div class="text-4xl mb-7 font-semibold mx-auto md:mx-0 text-slate-900 dark:text-slate-50">
                                        {formatCurrency(identifiedProduct()!.price)}
                                    </div>
                                    <div class="text-3xl break-words font-bold text-slate-900 dark:text-slate-50">
                                        {identifiedProduct()!.title}
                                    </div>
                                </div>
                                <p class="my-6 text-xl text-slate-800 dark:text-slate-100">
                                    {identifiedProduct()!.description}
                                </p>
                            </div>
                            <div class="flex flex-col md:flex-row justify-between m-3">
                                <TextWithBadge text={identifiedProduct()!.category}
                                    variant={identifyVariant(identifiedProduct()!.rating.rate)}
                                    count={identifiedProduct()!.rating.count}
                                    spacing="m-2 md:m-0"
                                    textSize="text-xl"
                                />
                            </div>
                        </div>
                    </div>
                </Box>
            </Show>
        </div>
    );
};

export default ProductDetails;