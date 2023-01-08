import type { Component } from "solid-js";
import { unifyClasses } from "../../utils/ui";
import BadgeStar from "../BadgeStar";

interface Props {
    text: string;
    count?: number;
    variant: "full" | "half" | "empty";
    spacing?: string;
    textSize?: string;
}

const wrapperClasses = [
    "inline-flex items-center",
    "font-medium text-center text-base",
    "text-slate-500 dark:text-slate-50"
];

const textClasses = [
    "mr-1"
];

const TextWithBadge: Component<Props> = (props: Props) => (
    <div class={unifyClasses(wrapperClasses, [props.spacing ?? ""])}>
        <span class={unifyClasses(textClasses, [props.textSize ?? ""])}>{props.text}</span>
        <BadgeStar count={props.count} variant={props.variant} starTwSize="w-6 h-6" />
    </div>
);

export default TextWithBadge;