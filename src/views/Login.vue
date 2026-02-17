<script setup>
import { ref } from 'vue'

const currentView = ref('login')
const showPassword = ref(false)

const form = ref({
    login: { email: '', password: '' },
    register: { nombre: '', apellido: '', ci: '', email: '', password: '' }
})

const txtLoginTitle = "¡Hola de nuevo!"
const txtRegisterTitle = "Crea tu cuenta"
const txtLoginSub = "Qué alegría verte otra vez por aquí."
const txtRegisterSub = "Únete a nuestra comunidad hoy mismo."
</script>

<template>
    <div class="min-h-screen mesh-gradient flex items-center justify-center p-4 relative overflow-hidden font-sans">

        <div
            class="relative z-10 w-full max-w-lg bg-white/70 backdrop-blur-2xl rounded-[3rem] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.1)] border border-white/60 p-8 md:p-12 transition-all">

            <div class="text-center mb-8">
                <div class="inline-flex items-center justify-center w-16 h-16 bg-white/80 rounded-2xl shadow-sm mb-4">
                    <span class="text-3xl">✨</span>
                </div>
                <h1 class="text-3xl font-extrabold text-gray-800 tracking-tight">
                    {{ currentView === 'login' ? txtLoginTitle : txtRegisterTitle }}
                </h1>
                <p class="text-gray-600 mt-2 font-medium">
                    {{ currentView === 'login' ? txtLoginSub : txtRegisterSub }}
                </p>
            </div>

            <form v-if="currentView === 'login'" @submit.prevent="" class="space-y-5 animate-fade-in">
                <div>
                    <label class="block text-sm font-bold text-gray-700 mb-2 ml-1">Correo electrónico</label>
                    <input type="email" v-model="form.login.email" placeholder="ejemplo@correo.com"
                        class="w-full px-5 py-4 bg-white/40 border border-white/50 rounded-2xl focus:bg-white/90 focus:ring-4 focus:ring-purple-100 outline-none transition-all shadow-sm" />
                </div>

                <div class="relative">
                    <label class="block text-sm font-bold text-gray-700 mb-2 ml-1">Contraseña</label>
                    <input :type="showPassword ? 'text' : 'password'" v-model="form.login.password"
                        placeholder="Tu clave secreta"
                        class="w-full px-5 py-4 bg-white/40 border border-white/50 rounded-2xl focus:bg-white/90 focus:ring-4 focus:ring-purple-100 outline-none transition-all shadow-sm" />
                    <button type="button" @click="showPassword = !showPassword"
                        class="absolute right-5 top-[46px] text-xl opacity-60 hover:opacity-100 transition-opacity">
                        {{ showPassword ? '🔓' : '👁️' }}
                    </button>
                </div>

                <div class="text-right">
                    <button type="button" class="text-sm font-bold text-purple-600 hover:underline">¿Olvidaste tu
                        contraseña?</button>
                </div>

                <button
                    class="w-full py-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-bold rounded-2xl shadow-lg shadow-purple-200 hover:shadow-xl hover:scale-[1.02] transition-all active:scale-95">
                    Ingresar
                </button>
            </form>

            <form v-else @submit.prevent="" class="grid grid-cols-2 gap-4 animate-fade-in">
                <div class="col-span-1">
                    <label class="block text-sm font-bold text-gray-700 mb-1 ml-1">Nombre</label>
                    <input type="text" v-model="form.register.nombre" placeholder="Nombre"
                        class="w-full px-4 py-3 bg-white/40 border border-white/50 rounded-xl outline-none focus:bg-white/90 transition-all" />
                </div>
                <div class="col-span-1">
                    <label class="block text-sm font-bold text-gray-700 mb-1 ml-1">Apellido</label>
                    <input type="text" v-model="form.register.apellido" placeholder="Apellido"
                        class="w-full px-4 py-3 bg-white/40 border border-white/50 rounded-xl outline-none focus:bg-white/90 transition-all" />
                </div>
                <div class="col-span-1">
                    <label class="block text-sm font-bold text-gray-700 mb-1 ml-1">C.I.</label>
                    <input type="text" v-model="form.register.ci" placeholder="Cédula"
                        class="w-full px-4 py-3 bg-white/40 border border-white/50 rounded-xl outline-none focus:bg-white/90 transition-all" />
                </div>
                <div class="col-span-1">
                    <label class="block text-sm font-bold text-gray-700 mb-1 ml-1">Email</label>
                    <input type="email" v-model="form.register.email" placeholder="correo@ejemplo.com"
                        class="w-full px-4 py-3 bg-white/40 border border-white/50 rounded-xl outline-none focus:bg-white/90 transition-all" />
                </div>
                <div class="col-span-2 relative">
                    <label class="block text-sm font-bold text-gray-700 mb-1 ml-1">Contraseña</label>
                    <input :type="showPassword ? 'text' : 'password'" v-model="form.register.password"
                        placeholder="Clave segura"
                        class="w-full px-4 py-3 bg-white/40 border border-white/50 rounded-xl outline-none focus:bg-white/90 transition-all" />
                    <button type="button" @click="showPassword = !showPassword" class="absolute right-4 top-[36px]">
                        {{ showPassword ? '🔒' : '👁️' }}
                    </button>
                </div>

                <button
                    class="col-span-2 w-full py-4 bg-gradient-to-r from-emerald-400 to-teal-500 text-white font-bold rounded-2xl shadow-lg transition-all active:scale-95">
                    Registrarme
                </button>
            </form>

            <div class="mt-8 pt-6 border-t border-gray-200/30 text-center">
                <p class="text-gray-500 font-medium">
                    {{ currentView === 'login' ? '¿No tienes cuenta?' : '¿Ya tienes cuenta?' }}
                    <button @click="currentView = currentView === 'login' ? 'register' : 'login'"
                        class="ml-1 text-gray-800 font-extrabold hover:text-purple-600 transition-colors">
                        {{ currentView === 'login' ? 'Crea una aquí' : 'Inicia sesión' }}
                    </button>
                </p>
            </div>
        </div>
    </div>
</template>

<style scoped>
/* El degradado de malla que pediste */
.mesh-gradient {
    background-color: #ffffff;
    background-image:
        radial-gradient(at 0% 0%, hsla(253, 16%, 7%, 1) 0, transparent 50%),
        radial-gradient(at 50% 0%, hsla(225, 39%, 30%, 1) 0, transparent 50%),
        radial-gradient(at 100% 0%, hsla(339, 49%, 30%, 1) 0, transparent 50%),
        radial-gradient(at 0% 100%, hsla(339, 49%, 30%, 1) 0, transparent 50%),
        radial-gradient(at 50% 100%, hsla(225, 39%, 30%, 1) 0, transparent 50%),
        radial-gradient(at 100% 100%, hsla(253, 16%, 7%, 1) 0, transparent 50%);
    /* Ajuste de colores a una paleta pastel suave */
    background-image:
        radial-gradient(at 0% 0%, #ffdee9 0, transparent 50%),
        radial-gradient(at 100% 0%, #b5fffc 0, transparent 50%),
        radial-gradient(at 100% 100%, #f0e6ff 0, transparent 50%),
        radial-gradient(at 0% 100%, #e0f7fa 0, transparent 50%);
}

.animate-fade-in {
    animation: fadeIn 0.4s ease-out forwards;
}

@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(10px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}
</style>