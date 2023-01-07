
export const getLang = () => navigator.languages ? navigator.languages[0] : navigator.language;

const currencyNF = (currency: string) => new Intl.NumberFormat(
    getLang(),
    { style: 'currency', currency, maximumFractionDigits: 2, minimumFractionDigits: 2 }
);

const DEFAULT_CURRENCY = "AUD";

export const formatCurrency = (amount: number, currency?: string) => currencyNF(currency ?? DEFAULT_CURRENCY).format(amount);

export const currencySymbol = (currency: string) => currencyNF(currency).formatToParts(1)[0].value;