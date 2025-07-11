<script setup lang="ts">
import avatar from '@/assets/images/default.png';
</script>

<template>
    <div class="fixed w-full flex items-center justify-between bg-white h-16 pl-20 pr-5">
        <button
            class="cursor-pointer bg-gray-100 py-2 px-4 rounded-lg font-medium hover:bg-gray-100 text-sky-500 transition">
            Accesos &nbsp; <i class="fa-solid fa-angle-down font-light"></i>
        </button>

        <div class="flex items-center gap-2">
            <a href="#" class="text-sky-500 hover:bg-gray-100 py-2 px-3 rounded-lg transition text-lg">
                <i class="fa-solid fa-magnifying-glass"></i>
            </a>

            <a href="#" class="text-sky-500 hover:bg-gray-100 py-2 px-3 rounded-lg transition text-lg">
                <i class="fa-solid fa-tower-cell"></i>
            </a>

            <a href="#" class="text-sky-500 hover:bg-gray-100 py-2 px-3 rounded-lg transition text-lg">
                <i class="fa-solid fa-envelope"></i>
            </a>

            <a href="#" class="text-sky-500 hover:bg-gray-100 py-2 px-3 rounded-lg transition text-lg">
                <i class="fa-solid fa-paint-roller"></i>
            </a>

            <div
                class="flex items-center gap-2 hover:bg-gray-100 transition py-1 px-3 rounded-lg cursor-pointer text-gray-500">
                <span>Hola, <span class="font-bold">Deddy</span></span>
                <img :src="avatar" alt="Avatar" class="w-10 h-10 rounded-lg object-cover" />
            </div>
        </div>
    </div>
</template>