import type { Component } from "solid-js";
import { unifyClasses } from "../../utils/ui";

interface Props {
    value: number | string;
    bgColor?: string;
    textColor?: string;
    spacing?: string;
    position?: string;
    borderColor?: string;
}

const badgeClasses = [
    "inline-flex items-center justify-center",
    "text-xs font-bold",
    "border-2 rounded-lg w-auto px-1"
];


const Badge: Component<Props> = (props: Props) => (
    <div class={unifyClasses(
        badgeClasses,
        [
            props.spacing ?? "w-fit",
            props.bgColor ?? "bg-indigo-500",
            props.textColor ?? "text-slate-50",
            props.borderColor ?? "border-transparent",
            props.position ?? "absolute -top-3 -right-5"
        ]
    )}>
        {props.value}
    </div>
);

export default Badge;