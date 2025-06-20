<template>
    <div class="blog__item-horizontal">
        <!-- Image -->
        <div class="blog__thumb-horizontal">
            <img :src="item.image" alt="blog" />
        </div>

        <!-- Content -->
        <div class="blog__content-horizontal">
            <h3 class="blog-title">{{ item.title }}</h3>
            <p>{{ truncateText(item.short_description, 20) }}</p>
            <a
                class="theme-primary-color"
            >
                View More
            </a>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        item: {
            type: Object,
            required: true,
        },
    },
    methods: {
        truncateText(text, wordLimit) {
            if (!text) return '';
            const words = text.split(' ');
            if (words.length <= wordLimit) return text;
            return words.slice(0, wordLimit).join(' ') + '...';
        },
    },
};
</script>

<style scoped>
.blog__item-horizontal {
    display: flex;
    gap: 10px;
    border-radius: 18px;
    align-items: center;
    box-shadow: 0 2px 16px rgba(0, 0, 0, 0.07);
    margin-bottom: 32px;
    transition: box-shadow 0.2s;
    padding: 16px;
}
.blog__item-horizontal:hover {
    box-shadow: 0 4px 24px rgba(0, 0, 0, 0.12);
}
.blog__thumb-horizontal img {
    width: 220px;
    //height: 140px;
    object-fit: cover;
    display: block;
}
.blog__content-horizontal {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.blog-title {
    font-weight: 600;
    line-height: 1.2;
    color: #222;
    font-size: 1rem;
    margin-bottom: 0.7rem;
}
.blog-desc {
    font-size: 12px;
    color: #757575;
    line-height: 1.2;
    margin: 0 0 12px;
}
.view-more-btn {
    align-self: flex-start;
    background-color: #007bff;
    color: #fff;
    padding: 6px 14px;
    font-size: 0.875rem;
    border-radius: 6px;
    text-decoration: none;
    transition: background-color 0.3s;
}


@media (max-width: 700px) {
    .blog__item-horizontal {
        flex-direction: column;
        align-items: stretch;
        padding: 18px 10px;
        gap: 18px;
    }
    .blog__thumb-horizontal img {
        width: 100%;
        height: 180px;
    }
    .blog-title {
        font-size: 1.2rem;
    }
    .blog-desc {
        font-size: 1rem;
    }
}
</style>
