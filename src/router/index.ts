// router/index.ts
import { createRouter, createWebHistory } from 'vue-router';
import Home from '@views/Home.vue';
import Buttons from '@views/Buttons.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/botones',
        name: 'Buttons',
        component: Buttons,
    },
    // {
    //     path: '/contact',
    //     name: 'Contact',
    //     component: Contact,
    // },
    // {
    //     // Lazy loading con alias
    //     path: '/products',
    //     name: 'Products',
    //     component: () => import('@/views/Products.vue'),
    // },
    // {
    //     // Rutas con parámetros
    //     path: '/user/:id',
    //     name: 'User',
    //     component: () => import('@/views/User.vue'),
    //     props: true,
    // },
    // {
    //     // Rutas anidadas
    //     path: '/dashboard',
    //     name: 'Dashboard',
    //     component: () => import('@/views/Dashboard.vue'),
    //     children: [
    //         {
    //             path: 'profile',
    //             name: 'Profile',
    //             component: () => import('@/views/Profile.vue'),
    //         },
    //         {
    //             path: 'settings',
    //             name: 'Settings',
    //             component: () => import('@/views/Settings.vue'),
    //         },
    //     ],
    // },
    // {
    //     // Admin routes con alias específico
    //     path: '/admin',
    //     name: 'Admin',
    //     component: () => import('@/views/admin/AdminLayout.vue'),
    //     children: [
    //         {
    //             path: 'users',
    //             name: 'AdminUsers',
    //             component: () => import('@/views/admin/Users.vue'),
    //         },
    //         {
    //             path: 'reports',
    //             name: 'AdminReports',
    //             component: () => import('@/views/admin/Reports.vue'),
    //         },
    //     ],
    // },
    // {
    //     // Ruta 404
    //     path: '/:pathMatch(.*)*',
    //     name: 'NotFound',
    //     component: () => import('@/views/NotFound.vue'),
    // },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

// Guards globales
// router.beforeEach((to, from, next) => {
//     console.log('Navegando a:', to.name);
//     next();
// });

export default router;
