<script setup lang="ts">
import { ref, type Ref } from 'vue';
import logo from '@/assets/images/logo.png';

const sidebarOpen: Ref<boolean> = ref(false);
const sidebarStatic: Ref<boolean> = ref(false);

const openSidebar = () => {
    if (sidebarStatic.value) return;
    sidebarOpen.value = !sidebarOpen.value;
}

const openSidebarStatic = () => {
    sidebarStatic.value = !sidebarStatic.value;
};
</script>

<template>
    <div :class="['absolute overflow-hidden z-10 bg-gray-900 text-white w-[58px] h-full whitespace-nowrap transition-all duration-200 ease-in-out', sidebarOpen ? 'w-[250px]' : 'w-[58px]']"
        @mouseover="openSidebar()" @mouseout="openSidebar()">
        <div class="flex justify-between items-center bg-gray-950 px-5 h-16">
            <a href="/">
                <figure>
                    <img :src="logo" alt="" class="w-[100px]" />
                </figure>
            </a>

            <button type="button"
                class="text-gray-400 hover:text-white transition-colors ease-in-out duration-300 cursor-pointer text-xl py-2"
                @click="openSidebarStatic()">
                <i :class="['fa-solid fa-angles-right', sidebarOpen ? 'rotate-180' : 'rotate-0']"></i>
            </button>
        </div>

        <div class="py-5 text-gray-400">
            <ul class="mt-4">
                <li class="mt-6 py-3 px-5 text-[11px] text-gray-500/60 font-bold tracking-widest">
                    <span v-show="sidebarOpen">MENÚ PRINCIPAL</span>
                    <i v-show="!sidebarOpen" class="fa-solid fa-ellipsis text-lg"></i>
                </li>

                <li class="">
                    <a href="#"
                        class="px-5 py-3 hover:bg-gray-950 transition flex items-center text-gray-400 hover:text-white group">
                        <i
                            class="fa-solid fa-house mr-6 scale-100 group-hover:text-blue-400 group-hover:scale-125 transition">
                        </i>
                        <span>Panel Principal</span>
                    </a>
                </li>
                <li class="">
                    <a href="#"
                        class="px-5 py-3 hover:bg-gray-950 transition flex justify-between items-center text-gray-400 hover:text-white group">
                        <div class="">
                            <i
                                class="fa-solid fa-chart-line mr-6 scale-100 group-hover:text-blue-400 group-hover:scale-125 transition">
                            </i>
                            <span>Operaciones de Ventas</span>
                        </div>

                        <i class="fa-solid fa-angle-right"></i>
                    </a>

                    <!-- <ul class="bg-gray-700">
                        <li>
                            <a href="#"
                                class="pl-10 pr-5 py-3 hover:bg-gray-950 transition flex items-center text-gray-400 hover:text-white group">
                                <span class="size-1.5 bg-gray-400 rounded-full mr-2 group-hover:bg-blue-400">
                                </span> Listado de expedientes
                            </a>
                        </li>
                        <li>
                            <a href="#"
                                class="pl-10 pr-5 py-3 hover:bg-gray-950 transition flex items-center text-gray-400 hover:text-white group">
                                <span class="size-1.5 bg-gray-400 rounded-full mr-2 group-hover:bg-blue-400">
                                </span> Auditoría
                            </a>
                        </li>
                    </ul> -->
                </li>
                <li class="">
                    <a href="#"
                        class="px-5 py-3 hover:bg-gray-950 transition flex items-center text-gray-400 hover:text-white group">
                        <i
                            class="fa-solid fa-cog mr-6 scale-100 group-hover:text-blue-400 group-hover:scale-125 transition">
                        </i>
                        <span>Rep. de Ventas</span>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>