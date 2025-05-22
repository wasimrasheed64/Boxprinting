import { defineStore } from 'pinia'
import { toast } from 'vue3-toastify'

export const useWishlistStore = defineStore('wishlist', {
    state: () => ({
        wishlists: []
    }),
    actions: {
        add_wishlist_product(payload) {
            const isAdded = this.wishlists.findIndex(p => p.id === payload.id)
            if (isAdded !== -1) {
                this.wishlists = this.wishlists.filter(p => p.id !== payload.id)
                toast.error(`${payload.title} removed from wishlist`)
            } else {
                this.wishlists.push(payload)
                toast.success(`${payload.title} added to wishlist`)
            }
            localStorage.setItem('wishlist_products', JSON.stringify(this.wishlists))
        },
        removeWishlist(payload) {
            this.wishlists = this.wishlists.filter(p => p.id !== payload.id)
            toast.error(`${payload.title} removed from wishlist`)
            localStorage.setItem('wishlist_products', JSON.stringify(this.wishlists))
        }
    },
    getters: {
        get_wishlist_products: (state) => {
            if (typeof window !== 'undefined') {
                const data = localStorage.getItem('wishlist_products')
                if (data) {
                    state.wishlists = JSON.parse(data)
                } else {
                    localStorage.setItem('wishlist_products', JSON.stringify([]))
                    state.wishlists = []
                }
            }
            return state.wishlists
        }
    }
})
