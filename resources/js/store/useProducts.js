import { defineStore } from "pinia"
import productData from "../../data/productData.js"

export const useProductsStore = defineStore("products", {
    state: () => ({
        products: productData,
        filterProducts: productData,
        priceRange: [0, 500],
        activeCls: ''
    }),
    actions: {
        handleParentCategory(value) {
            this.filterProducts = this.products.filter(
                (p) => p.parentCategory.toLowerCase() === value.toLowerCase()
            )
            this.activeCls = value
        },
        handleCategory(value) {
            this.filterProducts = this.products.filter(
                (p) => p.category.toLowerCase() === value.toLowerCase()
            )
            this.activeCls = value
        },
        onChangeRange(value) {
            this.priceRange = value
        },
        filterPrice() {
            if (this.priceRange.length) {
                this.filterProducts = this.products.filter(
                    (p) => p.price >= this.priceRange[0] && p.price <= this.priceRange[1]
                )
            }
        },
        handleSize(size) {
            this.filterProducts = this.products.filter((p) => p.sizes?.includes(size))
            this.activeCls = size
        },
        handleColor(color) {
            this.filterProducts = this.products.filter((p) => p.colors?.includes(color))
            this.activeCls = color
        },
        handleBrand(brand) {
            this.filterProducts = this.products.filter(
                (p) => p.brand.toLowerCase() === brand.toLowerCase()
            )
            this.activeCls = brand
        },
        handleSelectFiltering(value) {
            switch (value) {
                case 'Default Sorting':
                    this.filterProducts = this.products
                    break
                case 'Sort By Trending':
                    this.filterProducts = this.products.filter(p => p.trending)
                    break
                case 'Short By BestSeller':
                    this.filterProducts = this.products.filter(p => p.bestSeller)
                    break
                case 'Price High To Low':
                    this.filterProducts = this.products.slice().sort((a, b) => b.price - a.price)
                    break
                case 'Price Low To High':
                    this.filterProducts = this.products.slice().sort((a, b) => a.price - b.price)
                    break
                default:
                    this.filterProducts = this.products
            }
        },
        handleResetFilter() {
            this.filterProducts = this.products
            this.activeCls = ''
            this.priceRange = [0, 500]
        }
    },
    getters: {
        getRelatedProducts: (state) => {
            return (category, id) =>
                state.products
                    .filter(
                        (p) =>
                            p.category.toLowerCase() === category.toLowerCase() &&
                            p.id !== id
                    )
                    .slice(0, 4)
        }
    }
})
