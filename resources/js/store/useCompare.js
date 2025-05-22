import { defineStore } from 'pinia'
import { toast } from 'vue3-toastify'

export const useCompareStore = defineStore('compare', {
    state: () => ({
        compare: []
    }),
    actions: {
        add_compare_product(payload) {
            const isAdded = this.compare.findIndex(p => p.id === payload.id)
            if (isAdded !== -1) {
                this.compare = this.compare.filter(p => p.id !== payload.id)
                toast.error(`${payload.title} removed from compare`)
            } else {
                this.compare.unshift(payload)
                toast.success(`${payload.title} added to compare`)
            }
            localStorage.setItem('compare_products', JSON.stringify(this.compare))
        },
        removeCompare(payload) {
            this.compare = this.compare.filter(p => p.id !== payload.id)
            toast.error(`${payload.title} removed from compare`)
            localStorage.setItem('compare_products', JSON.stringify(this.compare))
        }
    },
    getters: {
        get_compare_products: (state) => {
            if (typeof window !== 'undefined') {
                const data = localStorage.getItem('compare_products')
                if (data) {
                    state.compare = JSON.parse(data)
                    return state.compare
                } else {
                    localStorage.setItem('compare_products', JSON.stringify([]))
                    return []
                }
            } else {
                return state.compare
            }
        }
    }
})
