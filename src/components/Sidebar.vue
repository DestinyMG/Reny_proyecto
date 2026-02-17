<script setup>
import { RouterLink } from 'vue-router'

defineProps(['isOpen'])
defineEmits(['close'])
</script>

<template>
    <div v-if="isOpen" @click="$emit('close')" class="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-40 lg:hidden">
    </div>

    <aside :class="isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'"
        class="fixed inset-y-0 left-0 w-72 bg-[#0f172a] transition-transform duration-300 ease-in-out z-50 flex flex-col p-6 text-slate-300 shadow-2xl lg:shadow-none border-r border-white/5">

        <button @click="$emit('close')"
            class="lg:hidden absolute right-4 top-6 text-2xl text-slate-500 hover:text-white">✕</button>

        <div class="flex items-center gap-3 px-2 mb-12">
            <div
                class="w-10 h-10 bg-gradient-to-br from-indigo-400 to-cyan-400 rounded-xl flex items-center justify-center text-white text-2xl shadow-lg shadow-indigo-500/20">
                🧪
            </div>
            <span class="text-white font-black tracking-tighter text-xl uppercase">Bio-Tech</span>
        </div>

        <nav class="flex-1 space-y-2">
            <p class="text-[10px] font-bold text-slate-500 uppercase tracking-[2px] mb-4 px-4">Menú Principal</p>

            <router-link to="/calculoii" @click="$emit('close')"
                class="flex items-center gap-3 px-4 py-3.5 rounded-2xl transition-all group"
                active-class="bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 shadow-lg shadow-indigo-500/5"
                inactive-class="hover:bg-white/5 text-slate-400 hover:text-white border border-transparent">
                <span class="text-xl group-hover:scale-110 transition-transform">📐</span>
                <span class="font-semibold">Cálculo II</span>
            </router-link>

            <router-link to="/calculox" @click="$emit('close')"
                class="flex items-center gap-3 px-4 py-3.5 rounded-2xl transition-all group"
                active-class="bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 shadow-lg shadow-indigo-500/5"
                inactive-class="hover:bg-white/5 text-slate-400 hover:text-white border border-transparent">

                <span
                    class="text-2xl leading-none group-hover:scale-125 transition-transform duration-300 ease-out inline-block">
                    ∞
                </span>

                <span class="font-semibold">Cálculo x</span>
            </router-link>

            <!-- <router-link to="/#" @click="$emit('close')"
                class="flex items-center gap-3 px-4 py-3.5 rounded-2xl transition-all group"
                active-class="bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 shadow-lg shadow-indigo-500/5"
                inactive-class="hover:bg-white/5 text-slate-400 hover:text-white border border-transparent">
                <span class="text-xl group-hover:scale-110 transition-transform">⚗️</span>
                <span class="font-semibold">Cálculo X</span>
            </router-link> -->
        </nav>

        <button
            class="mt-auto flex items-center justify-center gap-3 px-4 py-4 bg-red-500/10 hover:bg-red-500 text-red-400 hover:text-white rounded-2xl transition-all font-bold group">
            <span class="text-lg group-hover:rotate-12 transition-transform">🚪</span>
            <span>Cerrar Sesión</span>
        </button>
    </aside>
</template>