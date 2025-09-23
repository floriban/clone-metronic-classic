<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps({
    type: {
        type: String,
        default: 'default'
    },
    size: {
        type: String,
        default: 'md'
    },
    disabled: {
        type: Boolean,
        default: false
    },
    light: {
        type: Boolean,
        default: false
    },
    outline: {
        type: Boolean,
        default: false
    }
});

// Configuración de estilos
const buttonConfig = {
    base: 'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2',

    sizes: {
        sm: 'px-3 py-1.5 text-sm',
        md: 'px-4 py-2 text-sm',
        lg: 'px-6 py-3 text-base'
    } as Record<string, string>,

    variants: {
        default: 'bg-gray-600 text-white hover:bg-gray-700 focus:ring-gray-500 active:bg-gray-800',
        primary: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500 active:bg-blue-800',
        success: 'bg-green-600 text-white hover:bg-green-700 focus:ring-green-500 active:bg-green-800',
        warning: 'bg-yellow-600 text-white hover:bg-yellow-700 focus:ring-yellow-500 active:bg-yellow-800',
        danger: 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500 active:bg-red-800',
        info: 'bg-indigo-600 text-white hover:bg-indigo-700 focus:ring-indigo-500 active:bg-indigo-800'
    } as Record<string, string>,

    disabled: 'cursor-not-allowed opacity-50 cursor-not-allowed',

    light: {
        default: 'bg-gray-100 text-gray-800 hover:bg-gray-200 focus:ring-gray-300 active:bg-gray-300',
        primary: 'bg-blue-100 text-blue-800 hover:bg-blue-200 focus:ring-blue-300 active:bg-blue-300',
        success: 'bg-green-100 text-green-800 hover:bg-green-200 focus:ring-green-300 active:bg-green-300',
        warning: 'bg-yellow-100 text-yellow-800 hover:bg-yellow-200 focus:ring-yellow-300 active:bg-yellow-300',
        danger: 'bg-red-100 text-red-800 hover:bg-red-200 focus:ring-red-300 active:bg-red-300',
        info: 'bg-indigo-100 text-indigo-800 hover:bg-indigo-200 focus:ring-indigo-300 active:bg-indigo-300'
    } as Record<string, string>,

    outline: {
        default: 'bg-white text-gray-600 hover:bg-gray-700 focus:ring-gray-500 active:bg-gray-800 border border-gray-600 hover:text-white',
        primary: 'bg-white text-blue-600 hover:bg-blue-700 focus:ring-blue-500 active:bg-blue-800 border border-blue-600 hover:text-white',
        success: 'bg-white text-green-600 hover:bg-green-700 focus:ring-green-500 active:bg-green-800 border border-green-600 hover:text-white',
        warning: 'bg-white text-yellow-600 hover:bg-yellow-700 focus:ring-yellow-500 active:bg-yellow-800 border border-yellow-600 hover:text-white',
        danger: 'bg-white text-red-600 hover:bg-red-700 focus:ring-red-500 active:bg-red-800 border border-red-600 hover:text-white',
        info: 'bg-white text-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 active:bg-indigo-800 border border-indigo-600 hover:text-white'
    } as Record<string, string>
};

// Función para generar clases
const getButtonClasses = computed(() => {
    const classes = [
        buttonConfig.base,
        buttonConfig.sizes[props.size] || buttonConfig.sizes.md
    ];

    if (props.disabled) {
        classes.push(buttonConfig.disabled);

        if (props.light) {
            const lightBase = buttonConfig.light[props.type] || buttonConfig.light.default;
            const baseColor = lightBase.split(' ').filter(cls => !cls.startsWith('hover:') && !cls.startsWith('active:') && !cls.startsWith('focus:')).join(' ')

            classes.push(baseColor);
        } else if (props.outline) {
            const outlineBase = buttonConfig.outline[props.type] || buttonConfig.outline.default;
            const baseColor = outlineBase.split(' ').filter(cls => !cls.startsWith('hover:') && !cls.startsWith('active:') && !cls.startsWith('focus:')).join(' ')

            classes.push(baseColor);
        }
        else {
            const variantBase = buttonConfig.variants[props.type] || buttonConfig.variants.default;
            const baseColor = variantBase.split(' ').filter(cls => !cls.startsWith('hover:') && !cls.startsWith('active:') && !cls.startsWith('focus:')).join(' ')

            classes.push(baseColor);
        }
    } else {
        classes.push('cursor-pointer');

        if (props.light) {
            classes.push(buttonConfig.light[props.type] || buttonConfig.light.default);
        } else if (props.outline) {
            classes.push(buttonConfig.outline[props.type] || buttonConfig.outline.default);
        } else {
            classes.push(buttonConfig.variants[props.type] || buttonConfig.variants.default);
        }
    }

    return classes.join(' ');
});
</script>

<template>
    <button :class="getButtonClasses" :disabled="disabled" type="button">
        <slot></slot>
    </button>
</template>