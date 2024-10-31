import { createRouter, createWebHistory } from 'vue-router'
import ExplorarView from '../views/ExplorarView.vue'
import EquipamentosView from '../views/EquipamentosView.vue'
import AprendaView from '../views/AprendaView.vue'
import ConfiguracoesView from '../views/ConfiguracoesView.vue'
import CadastroView from '../views/CadastroView.vue'
import LoginView from '../views/LoginView.vue'
import ColecoesView from '../views/ColecoesView.vue'
import ColecaoView from '../views/ColecaoView.vue'
import MensagensView from '../views/MensagensView.vue'
import PerfilView from '../views/PerfilView.vue'
import SuporteView from '../views/SuporteView.vue'
import { useUserStore } from '@/stores'
import { storeToRefs } from 'pinia'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/:undefined',
      name: 'undefined',
      beforeEnter(from, to, next) {
        const store = useUserStore()
        const { jwt } = storeToRefs(store)

        if (jwt.value) {
          next({
            name: 'explorar'
          })
        } else {
          next({
            name: 'entrar'
          })
        }
      }
    },
    {
      path: '/',
      name: 'home',
      beforeEnter(from, to, next) {
        const store = useUserStore()
        const { jwt } = storeToRefs(store)

        if (jwt.value) {
          next({
            name: 'explorar'
          })
        } else {
          next({
            name: 'entrar'
          })
        }
      }
    },
    {
      path: '/cadastrar',
      name: 'cadastrar',
      component: CadastroView
    },
    {
      path: '/entrar',
      name: 'entrar',
      component: LoginView
    },
    {
      path: '/explorar',
      name: 'explorar',
      component: ExplorarView,
      beforeEnter(from, to, next) {
        const store = useUserStore()
        const { jwt } = storeToRefs(store)

        if (jwt.value) {
          next()
        } else {
          next({
            name: 'entrar'
          })
        }
      }
    },
    {
      path: '/colecoes',
      name: 'colecoes',
      component: ColecoesView,
      beforeEnter(from, to, next) {
        const store = useUserStore()
        const { jwt } = storeToRefs(store)

        if (jwt.value) {
          next()
        } else {
          next({
            name: 'entrar'
          })
        }
      }
    },
    {
      path: '/colecao/:id',
      name: 'colecao',
      component: ColecaoView,
      beforeEnter(from, to, next) {
        const store = useUserStore()
        const { jwt } = storeToRefs(store)

        if (jwt.value) {
          next()
        } else {
          next({
            name: 'entrar'
          })
        }
      }
    },
    {
      path: '/equipamentos',
      name: 'equipamentos',
      component: EquipamentosView,
      beforeEnter(from, to, next) {
        const store = useUserStore()
        const { jwt } = storeToRefs(store)

        if (jwt.value) {
          next()
        } else {
          next({
            name: 'entrar'
          })
        }
      }
    },
    {
      path: '/aprenda',
      name: 'aprenda',
      component: AprendaView,
      beforeEnter(from, to, next) {
        const store = useUserStore()
        const { jwt } = storeToRefs(store)

        if (jwt.value) {
          next()
        } else {
          next({
            name: 'entrar'
          })
        }
      }
    },
    {
      path: '/perfil',
      name: 'perfil',
      component: PerfilView,
      beforeEnter(from, to, next) {
        const store = useUserStore()
        const { jwt } = storeToRefs(store)

        if (jwt.value) {
          next()
        } else {
          next({
            name: 'entrar'
          })
        }
      }
    },
    {
      path: '/mensagens',
      name: 'mensagens',
      component: MensagensView,
      beforeEnter(from, to, next) {
        const store = useUserStore()
        const { jwt } = storeToRefs(store)

        if (jwt.value) {
          next()
        } else {
          next({
            name: 'entrar'
          })
        }
      }
    },
    {
      path: '/configuracoes',
      name: 'configuracoes',
      component: ConfiguracoesView,
      beforeEnter(from, to, next) {
        const store = useUserStore()
        const { jwt } = storeToRefs(store)

        if (jwt.value) {
          next()
        } else {
          next({
            name: 'entrar'
          })
        }
      }
    },
    {
      path: '/suporte',
      name: 'suporte',
      component: SuporteView,
      beforeEnter(from, to, next) {
        const store = useUserStore()
        const { jwt } = storeToRefs(store)

        if (jwt.value) {
          next()
        } else {
          next({
            name: 'entrar'
          })
        }
      }
    }
  ]
})

export default router
