import type { Component } from "solid-js";
import { unifyClasses } from "../../utils/ui";

interface Props {
    src: string;
    alt?: string;
    width?: string;
}

const classes = [
    "h-full object-center object-contain"
];

const Image: Component<Props> = (props: Props) => (
    <img src={props.src} alt={props.alt}
        class={unifyClasses(classes, [props.width ?? "w-[240px]"])}></img>
);


export default Image;