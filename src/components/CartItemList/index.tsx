import { Component, For } from "solid-js";
import { cart, cartSize } from "../../state";
import { formatCurrency } from "../../utils/locale";
import { unifyClasses } from "../../utils/ui";
import CartItem from "../CartItem";

interface Props {
}

const itemTotalClasses = [
    "border-t-gray-100 dark:border-t-gray-600"
];

const CartItemList: Component<Props> = (props: Props) => (
    <ul class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md min-w-[380px]
    bg-white text-slate-900 dark:bg-gray-800 dark:text-slate-50 py-1 shadow-lg ring-1 ring-slate-900 ring-opacity-5 focus:outline-none"
        role="menu" aria-orientation="vertical"
        aria-labelledby="user-menu-button" tabindex="-1">
        <For each={cart()}>
            {
                (item) => (
                    <li>
                        <CartItem
                            itemId={item.id}
                            text={item.title}
                            secondaryText={formatCurrency(item.price)}
                            secondaryTextClasses="text-lg"
                        />
                    </li>
                )
            }
        </For>
        <li class={unifyClasses(itemTotalClasses, [cartSize() > 0 ? "border-t" : ""])}>
            <CartItem text="Total"
                textClasses="text-lg"
                secondaryText={
                    formatCurrency(cart().reduce((acc, item) => acc + item.price, 0))
                }
                secondaryTextClasses="text-lg font-bold"
            />
        </li>
    </ul>
);

export default CartItemList;