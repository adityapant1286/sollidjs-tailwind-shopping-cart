import type { Component } from "solid-js";

interface Props {
    text?: string;
}

const Loader: Component<Props> = (props: Props) => (
    <div class="relative">
        <span class="text-3xl font-semibold text-slate-900 dark:text-slate-50">
            {props.text ?? "Loading"}
        </span>
        <svg version="1.1" id="L4"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"

            viewBox="0 0 180 180" enable-background="new 0 0 0 0" xml:space="preserve">
            <circle class="fill-indigo-600 dark:fill-slate-400" stroke="none" cx="3" cy="4" r="3">
                <animate
                    attributeName="opacity"
                    dur="1s"
                    values="0;1;0"
                    repeatCount="indefinite"
                    begin="0.1" />
            </circle>
            <circle class="fill-indigo-600 dark:fill-slate-400" stroke="none" cx="12" cy="4" r="3">
                <animate
                    attributeName="opacity"
                    dur="1s"
                    values="0;1;0"
                    repeatCount="indefinite"
                    begin="0.2" />
            </circle>
            <circle class="fill-indigo-600 dark:fill-slate-400" stroke="none" cx="22" cy="4" r="3">
                <animate
                    attributeName="opacity"
                    dur="1s"
                    values="0;1;0"
                    repeatCount="indefinite"
                    begin="0.3" />
            </circle>
        </svg>
    </div>
);

export default Loader;