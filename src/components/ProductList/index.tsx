import { Component, createMemo, For, onMount, Show } from 'solid-js';
import { Product } from '../../models';
import { retrieveProducts } from '../../services/product.service';
import { products, searchQuery, setProducts } from '../../state';
import Loader from '../Loader';
import ProductCard from '../ProductCard';

interface Props {
}

const ProductList: Component<Props> = (props: Props) => {

    onMount(() => retrieveProducts().then(setProducts));

    const searchRules = [
        (product: Product) => product.title.toLowerCase().includes(searchQuery().toLowerCase()),
        (product: Product) => product.category.toLowerCase().includes(searchQuery().toLowerCase())
    ];

    const filteredProductIds = createMemo(
        () => (products() ?? [])
            .filter((product: Product) => searchRules.filter(rule => rule(product)).length > 0)
            .map((product: Product) => product.id)
    );

    return (
        <div class="m-4">
            <div class='grid grid-cols-1 gap-y-6 gap-x-2 lg:grid-cols-3 xl:gap-x-6'>
                <For each={products()} fallback={<Loader />}>
                    {
                        (product: Product) => (
                            <Show when={filteredProductIds().includes(product.id)}>
                                <ProductCard product={product} />
                            </Show>
                        )
                    }
                </For>
            </div>
        </div>
    );
};

export default ProductList;