import type { Component } from "solid-js";

import {formatCurrency} from "../../utils/locale";

interface Props {
    text: string;
    price: number;
}

const TextWithPrice: Component<Props> = (props: Props) => (
<div class="flex justify-between my-4 mx-5">
    <div class="text-xl break-words mr-3 font-bold text-slate-900 dark:text-slate-50">
        {props.text}
    </div>
    <div class="text-2xl font-semibold text-slate-900 dark:text-slate-50">
        {formatCurrency(props.price)}
    </div>
</div>
);

export default TextWithPrice;