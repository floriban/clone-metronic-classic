<script setup lang="ts">
import { ref, type Ref } from 'vue';
import logo from '@/assets/images/logo.png';

const sidebarOpen: Ref<boolean> = ref(false);
const sidebarStatic: Ref<boolean> = ref(false);

const menuActive: Ref<number | null> = ref(null)
const subMenuOpen: Ref<number | null> = ref(null)
const subMenuIndex: Ref<number | null> = ref(null)

const openSidebar = () => {
    if (sidebarStatic.value) return;
    sidebarOpen.value = !sidebarOpen.value;

    if (!sidebarOpen.value) {
        subMenuOpen.value = null;
    } else {
        subMenuOpen.value = subMenuIndex.value !== null ? subMenuIndex.value : null
    }
}

const openSidebarStatic = () => {
    sidebarStatic.value = !sidebarStatic.value;
};

const openSubmenu = (index: number) => {
    if (subMenuOpen.value === index) {
        subMenuOpen.value = null
        menuActive.value = null
        subMenuIndex.value = null;
    } else {
        subMenuOpen.value = index
        menuActive.value = index
        subMenuIndex.value = index;
    }
}
</script>

<template>
    <div :class="['absolute overflow-hidden z-10 bg-gray-900 text-white w-[58px] h-full whitespace-nowrap transition-all duration-200 ease-in-out', sidebarOpen ? 'w-[250px]' : 'w-[58px]']"
        @mouseenter="openSidebar()" @mouseleave="openSidebar()">
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
            <ul>
                <li class="mt-6 py-3 px-5 text-[11px] text-gray-500/60 font-bold tracking-widest">
                    <span v-show="sidebarOpen">MENÚ PRINCIPAL</span>
                    <i v-show="!sidebarOpen" class="fa-solid fa-ellipsis text-lg"></i>
                </li>

                <li>
                    <a href="#"
                        class="px-5 py-3 hover:bg-gray-950 transition flex items-center text-gray-400 hover:text-white group">
                        <span class="mr-6 group-hover:text-blue-400 transition">
                            <i class="fa-solid fa-gauge-high group-hover:scale-125 transition"></i>
                        </span>
                        <span>Dashboard</span>
                    </a>
                </li>

                <li>
                    <a href="#"
                        :class="['px-5 py-3 hover:bg-gray-950 transition flex justify-between items-center text-gray-400 hover:text-white group', menuActive === 0 ? 'bg-gray-950' : '']"
                        @click="openSubmenu(0)">
                        <div>
                            <span class="mr-6 group-hover:text-blue-400 transition">
                                <i
                                    :class="['fa-solid fa-users-gear group-hover:scale-125 transition', menuActive === 0 ? 'text-blue-400 scale-125' : '']"></i>
                            </span>
                            <span>Usuarios y Roles</span>
                        </div>
                        <i class="fa-solid fa-angle-right"></i>
                    </a>
                    <ul :class="['bg-gray-700', subMenuOpen === 0 ? 'block' : 'hidden']">
                        <li>
                            <a href="#"
                                class="pl-10 pr-5 py-3 hover:bg-gray-950 transition flex items-center text-gray-400 hover:text-white group">
                                <span class="size-1.5 bg-gray-400 rounded-full mr-2 group-hover:bg-blue-400"></span>
                                Gestión de Usuarios
                            </a>
                        </li>
                        <li>
                            <a href="#"
                                class="pl-10 pr-5 py-3 hover:bg-gray-950 transition flex items-center text-gray-400 hover:text-white group">
                                <span class="size-1.5 bg-gray-400 rounded-full mr-2 group-hover:bg-blue-400"></span>
                                Roles y Permisos
                            </a>
                        </li>
                    </ul>
                </li>

                <li>
                    <a href="#"
                        :class="['px-5 py-3 hover:bg-gray-950 transition flex justify-between items-center text-gray-400 hover:text-white group', menuActive === 1 ? 'bg-gray-950' : '']"
                        @click="openSubmenu(1)">
                        <div>
                            <span class="mr-6 group-hover:text-blue-400 transition">
                                <i
                                    :class="['fa-solid fa-cubes group-hover:scale-125 transition', menuActive === 1 ? 'text-blue-400 scale-125' : '']"></i>
                            </span>
                            <span>Módulos</span>
                        </div>
                        <i class="fa-solid fa-angle-right"></i>
                    </a>
                    <ul :class="['bg-gray-700', subMenuOpen === 1 ? 'block' : 'hidden']">
                        <li>
                            <a href="#"
                                class="pl-10 pr-5 py-3 hover:bg-gray-950 transition flex items-center text-gray-400 hover:text-white group">
                                <span class="size-1.5 bg-gray-400 rounded-full mr-2 group-hover:bg-blue-400"></span>
                                Formularios
                            </a>
                        </li>
                        <li>
                            <a href="#"
                                class="pl-10 pr-5 py-3 hover:bg-gray-950 transition flex items-center text-gray-400 hover:text-white group">
                                <span class="size-1.5 bg-gray-400 rounded-full mr-2 group-hover:bg-blue-400"></span>
                                Tablas
                            </a>
                        </li>
                        <li>
                            <a href="#"
                                class="pl-10 pr-5 py-3 hover:bg-gray-950 transition flex items-center text-gray-400 hover:text-white group">
                                <span class="size-1.5 bg-gray-400 rounded-full mr-2 group-hover:bg-blue-400"></span>
                                Widgets
                            </a>
                        </li>
                    </ul>
                </li>

                <li>
                    <a href="#"
                        class="px-5 py-3 hover:bg-gray-950 transition flex items-center text-gray-400 hover:text-white group">
                        <span class="mr-6 group-hover:text-blue-400 transition">
                            <i class="fa-solid fa-layer-group group-hover:scale-125 transition"></i>
                        </span>
                        <span>UI Components</span>
                    </a>
                </li>

                <li>
                    <a href="#"
                        class="px-5 py-3 hover:bg-gray-950 transition flex items-center text-gray-400 hover:text-white group">
                        <span class="mr-6 group-hover:text-blue-400 transition">
                            <i class="fa-solid fa-chart-column group-hover:scale-125 transition"></i>
                        </span>
                        <span>Gráficos</span>
                    </a>
                </li>

                <li>
                    <a href="#"
                        class="px-5 py-3 hover:bg-gray-950 transition flex items-center text-gray-400 hover:text-white group">
                        <span class="mr-6 group-hover:text-blue-400 transition">
                            <i class="fa-solid fa-hospital-user group-hover:scale-125 transition"></i>
                        </span>
                        <span>Reportes</span>
                    </a>
                </li>

                <li>
                    <a href="#"
                        class="px-5 py-3 hover:bg-gray-950 transition flex items-center text-gray-400 hover:text-white group">
                        <span class="mr-6 group-hover:text-blue-400 transition">
                            <i class="fa-solid fa-gear group-hover:scale-125 transition"></i>
                        </span>
                        <span>Configuración</span>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>