export default {
  data() {
    return {
      menuData: [
        {
          link: '/',
          title: 'Home',
          hasDropdown: true,
          megamenu: false,
          dropdownItems: [
            { link: '/', title: 'Home Style 1' },
          ]
        },
        {
          link: '/shop',
          title: 'Shop',
          hasDropdown: true,
          megamenu: true,
          dropdownItems: [
            {
              link: '/shop',
              title: 'Shop Pages',
              dropdownMenu: [
                { link: '/shop', title: 'Standard Shop Page' },
              ]
            },
            {
              link: '/shop',
              title: 'Products Pages',
              dropdownMenu: [
                { link: '/product-details', title: 'Product Details' },
              ]
            },
            {
              link: '/shop',
              title: 'Other Shop Pages',
              dropdownMenu: [
                { link: '/wishlist', title: 'Wishlist' },
                { link: '/compare', title: 'Compare' },
                { link: '/cart', title: 'Shopping Cart' },
                { link: '/checkout', title: 'Checkout' },
                { link: '/register', title: 'Register' },
                { link: '/login', title: 'Login' },
              ]
            },
          ]
        },
        {
          link: '/blog',
          title: 'Blog',
          hasDropdown: true,
          megamenu: false,
          dropdownItems: [
            { link: '/blog', title: 'Blog' },
            { link: '/blog-details', title: 'Blog Details' },
          ]
        },
        {
          link: '/shop',
          title: 'Pages',
          hasDropdown: true,
          megamenu: false,
          dropdownItems: [
            { link: '/wishlist', title: 'Wishlist' },
            { link: '/cart', title: 'Shopping Cart' },
            { link: '/checkout', title: 'Checkout' },
            { link: '/account', title: 'Account' },
            { link: '/register', title: 'Register' },
            { link: '/login', title: 'Login' },
            { link: '/404', title: 'Error 404' },
          ]
        },
        {
          link: '/contact',
          title: 'Contact',
        },
      ]
    }
  }
}
