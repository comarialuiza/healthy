import { createStitches } from '@stitches/react';

export const { styled, getCssText } = createStitches({
    theme: {
        colors: {
            lilac100: '#eff2fa',
            lilac300: '#c6c7fb',
            lilac500: '#8870e6',
            lilac900: '#141b43',

            green500: '#99d14c',

            pink200: '#f7c8ce',
            pink500: '#ed3d65',
            base: '#fffffe'
        },
        fontSizes: {
            1: '13px',
            2: '15px',
            3: '17px',
        },
        fonts: {
            untitled: 'Untitled Sans, apple-system, sans-serif',
            mono: 'Söhne Mono, menlo, monospace',
        },
        space: {
            1: '2px',
            2: '4px',
            3: '8px',
            4: '12px',
            5: '16px',
            6: '24px',
            7: '32px',
        },
        radii: {
            1: '4px',
            2: '8px',
            3: '12px'
        }
    },
    utils: {
        m: (value: string) => ({
            margin: value,
        }),
        mt: (value: string) => ({
            marginTop: value,
        }),
        mr: (value: string) => ({
            marginRight: value,
        }),
        mb: (value: string) => ({
            marginBottom: value,
        }),
        ml: (value: string) => ({
            marginLeft: value,
        }),
        mx: (value: string) => ({
            marginLeft: value,
            marginRight: value,
        }),
        my: (value: string) => ({
            marginTop: value,
            marginBottom: value,
        }),
        size: (value: string) => ({
            width: value,
            height: value,
        }),
        linearGradient: (value: string) => ({
            backgroundImage: `linear-gradient(${value})`,
        }),
        br: (value: string) => ({
            borderRadius: value,
        }),
    },
});
