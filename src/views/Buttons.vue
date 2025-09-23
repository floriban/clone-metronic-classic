<script setup lang="ts">
import Button from '@components/Button.vue';
</script>

<template>
    <div class="pt-16 bg-gray-200 text-gray flex-1 pl-[58px]">
        <div class="p-6">
            <h2 class="text-lg font-semibold">Botones</h2>

            <div class="flex gap-6 mt-6">
                <div class="bg-white rounded-lg shadow-md w-1/2 overflow-hidden">
                    <div class="px-6 py-4 border-b border-gray-200">
                        <h3 class="text-lg font-semibold text-sky-500 ">Tipos de botones</h3>
                    </div>

                    <div class="p-6">
                        <Button class="mr-2">Default</Button>
                        <Button :type="'primary'" class="mr-2">Primary</Button>
                        <Button :type="'success'" class="mr-2">Success</Button>
                        <Button :type="'warning'" class="mr-2">Warning</Button>
                        <Button :type="'danger'" class="mr-2">Danger</Button>
                        <Button :type="'info'" class="mr-2">Info</Button>

                        <div class="bg-gray-100 mt-4 px-6 rounded-lg">
                            <pre class="whitespace-pre-wrap break-words max-w-full text-xs">
                                <code>
&lt;Button&gt;Default&lt;/Button&gt;
&lt;Button :type="'primary'"&gt;Primary&lt;/Button&gt;
&lt;Button :type="'success'"&gt;Success&lt;/Button&gt;
&lt;Button :type="'warning'"&gt;Warning&lt;/Button&gt;
&lt;Button :type="'danger'"&gt;Danger&lt;/Button&gt;
&lt;Button :type="'info'"&gt;Info&lt;/Button&gt;</code>
                            </pre>
                        </div>
                    </div>
                </div>

                <div class="bg-white rounded-lg shadow-md w-1/2">
                    <div class="px-6 py-4 border-b border-gray-200">
                        <h3 class="text-lg font-semibold text-sky-500 ">Tamaños</h3>
                    </div>

                    <div class="p-6">
                        <Button :type="'primary'" :size="'sm'" class="mr-2">Button sm</Button>
                        <Button :type="'primary'" :size="'md'" class="mr-2">Button md</Button>
                        <Button :type="'primary'" :size="'lg'" class="mr-2">Button lg</Button>

                        <div class="bg-gray-100 mt-4 px-6 rounded-lg">
                            <pre class="whitespace-pre-wrap break-words max-w-full text-xs">
                                <code>
&lt;Button :size="'sm'"&gt;Button sm&lt;/Button&gt;
&lt;Button :size="'md'"&gt;Button md&lt;/Button&gt;
&lt;Button :size="'lg'"&gt;Button lg&lt;/Button&gt;</code>
                            </pre>
                        </div>
                    </div>
                </div>
            </div>

            <div class="flex gap-6 mt-6">
                <div class="bg-white rounded-lg shadow-md w-1/2">
                    <div class="px-6 py-4 border-b border-gray-200">
                        <h3 class="text-lg font-semibold text-sky-500 ">Botones claros</h3>
                    </div>

                    <div class="p-6">
                        <Button :light=true class="mr-2">Default</Button>
                        <Button :type="'primary'" :light=true class="mr-2">Primary</Button>
                        <Button :type="'success'" :light=true class="mr-2">Success</Button>
                        <Button :type="'warning'" :light=true class="mr-2">Warning</Button>
                        <Button :type="'danger'" :light=true class="mr-2">Danger</Button>
                        <Button :type="'info'" :light=true class="mr-2">Info</Button>

                        <div class="bg-gray-100 mt-4 px-6 rounded-lg">
                            <pre class="whitespace-pre-wrap break-words max-w-full text-xs">
                                <code>
&lt;Button :light=true&gt;Default&lt;/Button&gt;
&lt;Button :type="'primary'" :light=true&gt;Primary&lt;/Button&gt;
&lt;Button :type="'success'" :light=true&gt;Success&lt;/Button&gt;
&lt;Button :type="'warning'" :light=true&gt;Warning&lt;/Button&gt;
&lt;Button :type="'danger'" :light=true&gt;Danger&lt;/Button&gt;
&lt;Button :type="'info'" :light=true&gt;Info&lt;/Button&gt;</code>
                            </pre>
                        </div>
                    </div>
                </div>

                <div class="bg-white rounded-lg shadow-md w-1/2">
                    <div class="px-6 py-4 border-b border-gray-200">
                        <h3 class="text-lg font-semibold text-sky-500 ">Botones con borde</h3>
                    </div>

                    <div class="p-6">
                        <Button :outline=true class="mr-2">Default</Button>
                        <Button :type="'primary'" :outline=true class="mr-2">Primary</Button>
                        <Button :type="'success'" :outline=true class="mr-2">Success</Button>
                        <Button :type="'warning'" :outline=true class="mr-2">Warning</Button>
                        <Button :type="'danger'" :outline=true class="mr-2">Danger</Button>
                        <Button :type="'info'" :outline=true class="mr-2">Info</Button>

                        <div class="bg-gray-100 mt-4 px-6 rounded-lg">
                            <pre class="whitespace-pre-wrap break-words max-w-full text-xs">
                                <code>
&lt;Button :outline=true&gt;Default&lt;/Button&gt;
&lt;Button :type="'primary'" :outline=true&gt;Primary&lt;/Button&gt;
&lt;Button :type="'success'" :outline=true&gt;Success&lt;/Button&gt;
&lt;Button :type="'warning'" :outline=true&gt;Warning&lt;/Button&gt;
&lt;Button :type="'danger'" :outline=true&gt;Danger&lt;/Button&gt;
&lt;Button :type="'info'" :outline=true&gt;Info&lt;/Button&gt;</code>
                            </pre>
                        </div>
                    </div>
                </div>
            </div>

            <div class="flex gap-6 mt-6">
                <div class="bg-white rounded-lg shadow-md w-1/2 overflow-hidden">
                    <div class="px-6 py-4 border-b border-gray-200">
                        <h3 class="text-lg font-semibold text-sky-500 ">Botones con iconos</h3>
                    </div>

                    <div class="p-6">
                        <Button class="mr-2"><i class="fa-solid fa-gear mr-2"></i> Default</Button>
                        <Button :type="'primary'" class="mr-2"><i class="fa-solid fa-star mr-2"></i> Primary</Button>
                        <Button :type="'success'" class="mr-2"><i class="fa-solid fa-check mr-2"></i> Success</Button>
                        <Button :type="'warning'" class="mr-2"><i class="fa-solid fa-triangle-exclamation mr-2"></i>
                            Warning</Button>
                        <Button :type="'danger'" class="mr-2"><i class="fa-solid fa-trash mr-2"></i> Danger</Button>
                        <Button :type="'info'" class="mr-2"><i class="fa-solid fa-info-circle mr-2"></i> Info</Button>

                        <div class="bg-gray-100 mt-4 px-6 rounded-lg">
                            <pre class="whitespace-pre-wrap break-words max-w-full text-xs">
                                <code>
&lt;Button&gt;
    &lt;i class="fa-solid fa-gear mr-2"&gt;&lt;/i&gt; Default
&lt;/Button&gt;
&lt;Button :type="'primary'"&gt;
    &lt;i class="fa-solid fa-star mr-2"&gt;&lt;/i&gt; Primary
&lt;/Button&gt;
&lt;Button :type="'success'"&gt;
    &lt;i class="fa-solid fa-check mr-2"&gt;&lt;/i&gt; Success
&lt;/Button&gt;
&lt;Button :type="'warning'"&gt;
    &lt;i class="fa-solid fa-triangle-exclamation mr-2"&gt;&lt;/i&gt; Warning
&lt;/Button&gt;
&lt;Button :type="'danger'"&gt;
    &lt;i class="fa-solid fa-trash mr-2"&gt;&lt;/i&gt; Danger
&lt;/Button&gt;
&lt;Button :type="'info'"&gt;
    &lt;i class="fa-solid fa-info-circle mr-2"&gt;&lt;/i&gt; Info
&lt;/Button&gt;</code>
                            </pre>
                        </div>
                    </div>
                </div>

                <div class="bg-white rounded-lg shadow-md w-1/2">
                    <div class="px-6 py-4 border-b border-gray-200">
                        <h3 class="text-lg font-semibold text-sky-500 ">Botones deshabilitados</h3>
                    </div>

                    <div class="p-6">
                        <Button :disabled=true class="mr-2">Default</Button>
                        <Button :type="'primary'" :disabled=true class="mr-2">Primary</Button>
                        <Button :type="'success'" :disabled=true class="mr-2">Success</Button>
                        <Button :type="'warning'" :disabled=true class="mr-2">Warning</Button>
                        <Button :type="'danger'" :disabled=true class="mr-2">Danger</Button>
                        <Button :type="'info'" :disabled=true class="mr-2">Info</Button>

                        <div class="bg-gray-100 mt-4 px-6 rounded-lg">
                            <pre class="whitespace-pre-wrap break-words max-w-full text-xs">
                                <code>
&lt;Button :disabled=true&gt;Default&lt;/Button&gt;
&lt;Button :type="'primary'" :disabled=true&gt;Primary&lt;/Button&gt;
&lt;Button :type="'success'" :disabled=true&gt;Success&lt;/Button&gt;
&lt;Button :type="'warning'" :disabled=true&gt;Warning&lt;/Button&gt;
&lt;Button :type="'danger'" :disabled=true&gt;Danger&lt;/Button&gt;
&lt;Button :type="'info'" :disabled=true&gt;Info&lt;/Button&gt;</code>
                            </pre>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>