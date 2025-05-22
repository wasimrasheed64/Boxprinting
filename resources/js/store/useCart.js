import { defineStore } from 'pinia';
import { toast } from 'vue3-toastify';

export const useCartStore = defineStore('cart', {
    state: () => ({
        cart_products: [],
        orderQuantity: 1,
        quantityCount: 0,
        total: 0,
    }),

    actions: {
        // Add product to cart
        add_cart_product(payload) {
            const isExist = this.cart_products.some(i => i.id === payload.id);
            if (!isExist) {
                const newItem = {
                    ...payload,
                    orderQuantity: 1,
                };
                this.cart_products.push(newItem);
                toast.success(`${payload.title} added to cart`);
            } else {
                this.cart_products = this.cart_products.map(item => {
                    if (item.id === payload.id) {
                        if (item.orderQuantity !== undefined) {
                            if (item.quantity >= item.orderQuantity + this.orderQuantity) {
                                item.orderQuantity =
                                    this.orderQuantity !== 1
                                        ? this.orderQuantity + item.orderQuantity
                                        : item.orderQuantity + 1;
                                toast.success(`${this.orderQuantity} ${item.title} added to cart`);
                            } else {
                                toast.error(`No more quantity available for this product!`);
                                this.orderQuantity = 1;
                            }
                        }
                    }
                    return { ...item };
                });
            }

            localStorage.setItem('cart_products', JSON.stringify(this.cart_products));
        },

        // Decrement quantity
        quantityDecrement(payload) {
            this.cart_products = this.cart_products.map(item => {
                if (item.id === payload.id) {
                    if (item.orderQuantity !== undefined && item.orderQuantity > 1) {
                        item.orderQuantity = item.orderQuantity - 1;
                    }
                }
                return { ...item };
            });

            localStorage.setItem('cart_products', JSON.stringify(this.cart_products));
        },

        // Remove single product
        remover_cart_products(payload) {
            this.cart_products = this.cart_products.filter(p => p.id !== payload.id);
            toast.error(`${payload.title} removed from cart`);
            localStorage.setItem('cart_products', JSON.stringify(this.cart_products));
        },

        // Clear all cart
        clear_cart() {
            const confirmMsg = window.confirm('Are you sure you want to delete all cart items?');
            if (confirmMsg) {
                this.cart_products = [];
            }
            localStorage.setItem('cart_products', JSON.stringify(this.cart_products));
        },

        // Reset quantity
        initialOrderQuantity() {
            this.orderQuantity = 1;
        },
    },

    getters: {
        totalPriceQuantity: (state) => {
            return state.cart_products.reduce(
                (cartTotal, cartItem) => {
                    const { price, orderQuantity } = cartItem;
                    if (orderQuantity !== undefined) {
                        const itemTotal = price * orderQuantity;
                        cartTotal.quantity += orderQuantity;
                        cartTotal.total += itemTotal;
                    }
                    return cartTotal;
                },
                {
                    total: 0,
                    quantity: 0,
                }
            );
        },

        get_cart_products: (state) => {
            if (typeof window !== 'undefined') {
                const data = localStorage.getItem('cart_products');
                if (data) {
                    return (state.cart_products = JSON.parse(data));
                } else {
                    localStorage.setItem('cart_products', JSON.stringify([]));
                    return (state.cart_products = []);
                }
            } else {
                return state.cart_products;
            }
        },
    },
});
