const font = {
    family: {
        kosugi: "'Kosugi Maru', sans-serif"
    },
    weight: {
        thin: 100,
        extralight: 200,
        light: 300,
        regular: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
        extrabold: 800,
        black: 900
    }
}

export default font;

export type TFontFamily = keyof typeof font.family;
export type TFontWeight = keyof typeof font.weight;