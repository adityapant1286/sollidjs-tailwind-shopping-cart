import type { Component } from "solid-js";
import { dark } from "../../state";

interface Props {
    variant: "full" | "half" | "empty"
}

const variantMapping: { [key: string]: string } = {
    "full": "orange",
    "half": "url(#half)",
    "empty": "url(#empty)",
    "darkfull": "orange",
    "darkhalf": "url(#darkMode)",
    "darkempty": "url(#empty)"
};

const variantValue = (flag: boolean, key: string) => variantMapping[`${flag ? "dark" : ""}${key}`];

const Star: Component<Props> = (props: Props) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="1.5" stroke="none" class="w-6 h-6">
        <defs>
            <linearGradient id="half" x1="0" x2="100%" y1="0" y2="0">
                <stop offset="50%" stop-color="orange"></stop>
                <stop offset="50%" stop-color="#f7f0c3"></stop>
            </linearGradient>
            <linearGradient id="darkMode" x1="0" x2="100%" y1="0" y2="0">
                <stop offset="50%" stop-color="orange"></stop>
                <stop offset="50%" stop-color="red"></stop>
            </linearGradient>
            <linearGradient id="empty" x1="0" x2="100%" y1="0" y2="0">
                <stop offset="50%" stop-color="#f7f0c3"></stop>
                <stop offset="50%" stop-color="#f7f0c3"></stop>
            </linearGradient>
        </defs>
        <path stroke-linecap="round" stroke-linejoin="round" fill={variantValue(dark(), props.variant)}
            d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
    </svg>
);


export default Star;