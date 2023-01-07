import type { Component } from "solid-js";
import { dark } from "../../state";
import { unifyClasses } from "../../utils/ui";
import Badge from "../Badge";

interface Props {
    count?: number;
    variant: "full" | "half" | "empty";
    starTwSize?: string;
}

const variantMapping: { [key: string]: string } = {
    "full": "orange",
    "half": "url(#half)",
    "empty": "url(#empty)",
    "darkfull": "orange",
    "darkhalf": "url(#darkhalf)",
    "darkempty": "url(#empty)"
};

const variantValue = (flag: boolean, key: string) => variantMapping[`${flag ? "dark" : ""}${key}`];

const BadgeStar: Component<Props> = (props: Props) => (
    <div class="relative inline-flex items-center
                text-sm font-medium text-center">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="1.5" stroke="none" class={props.starTwSize ?? "w-8 h-8"}>
            <defs>
                <linearGradient id="half" x1="0" x2="100%" y1="0" y2="0">
                    <stop offset="50%" stop-color="#fbbf24"></stop>
                    <stop offset="50%" stop-color="#fef3c7"></stop>
                </linearGradient>
                <linearGradient id="darkhalf" x1="0" x2="100%" y1="0" y2="0">
                    <stop offset="50%" stop-color="orange"></stop>
                    <stop offset="50%" stop-color="#cbd5e1"></stop>
                </linearGradient>
                <linearGradient id="empty" x1="0" x2="100%" y1="0" y2="0">
                    <stop offset="50%" stop-color="#fef3c7"></stop>
                    <stop offset="50%" stop-color="#fef3c7"></stop>
                </linearGradient>
            </defs>
            <path stroke-linecap="round" stroke-linejoin="round" fill={variantValue(dark(), props.variant)}
                d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
        </svg>
        {props.count && <Badge value={props.count} borderColor="border-white dark:border-slate-700" />}
    </div>
);


export default BadgeStar;