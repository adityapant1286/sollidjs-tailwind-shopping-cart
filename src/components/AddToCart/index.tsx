import type { Component } from "solid-js";
import { CartItem } from "../../models";
import { addToCart } from "../../state";
import { unifyClasses } from "../../utils/ui";

interface Props {
    label?: string;
    item: CartItem;
    spacing?: string;
}

const classes = [
    "py-2 px-3 w-full font-medium rounded-3xl shadow-md",
    "bg-indigo-600 text-slate-50",
    "hover:opacity-90"
];

const AddToCart: Component<Props> = (props: Props) => {

    return (
        <button onClick={() => addToCart(props.item)}
            class={unifyClasses(classes, [props.spacing ?? ""])}>
            { props.label ?? "Add" }
        </button>
    );
};

export default AddToCart;