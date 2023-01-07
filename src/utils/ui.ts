
export const shadowMappings: {
    [key: string]: string;
} = {
    "none": "shadow-none",
    "true": "shadow",
    "sm": "shadow-sm",
    "md": "shadow-md",
    "lg": "shadow-lg"
};

export const unifyClasses =
    (staticClasses: Array<string>, dynamicClasses: Array<string>) =>
        [
            ...staticClasses,
            ...dynamicClasses
        ].join(" ");

export const newUniqueId = () => crypto.getRandomValues(new Uint32Array(1)).toString();