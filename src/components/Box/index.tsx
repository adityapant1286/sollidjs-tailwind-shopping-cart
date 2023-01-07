import type { Component } from "solid-js";
import { shadowMappings, unifyClasses } from "../../utils/ui";

interface Props {
  id?: string;
  shadow?: "none" | "true" | "sm" | "md" | "lg"
  height?: string;
  width?: string;
  spacing?: string;
  children?: any;
}

const classes = [
  "group relative",
  "bg-white dark:bg-gray-700 dark:text-slate-50",
  "rounded-2xl border border-gray-200 dark:border-gray-600"
];

const Box: Component<Props> = (props: Props) => {

  return (
    <div id={props.id} class={
      unifyClasses(
        classes,
        [props.spacing ?? "m-1",
        shadowMappings[props.shadow ?? "none"],
        props.height ?? (!props.children ? "min-h-[240px]" : ""),
        props.width ?? (!props.children ? "w-full" : "w-fit")
        ]
      )
    }>
      {props.children}
    </div>
  );
};

export default Box;