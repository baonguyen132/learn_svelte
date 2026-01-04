<script lang="ts">
	import type { Book } from "$lib/state/user-state.svelte.ts";
	import BookCard from "./BookCard.svelte";

    interface BookCategoryProps {
        categoryName: string;
        books: Book[];
    }

    let { categoryName, books } : BookCategoryProps = $props();

</script>

<section class="book-category mb-s">
    <h3 class="mb-s">{categoryName}</h3>
    <div class="book-list">
        {#each books as book}
            <BookCard {book} />
        {/each}

    </div>
</section>

<style>
    .book-list {
        display: flex;
        flex-direction: row;
        gap: 24px;
        overflow-x: auto;
        scrollbar-width: thin;
        padding-bottom: 8px;
    }

    .book-list::-webkit-scrollbar {
        height: 8px;
    }
    .book-list::-webkit-scrollbar-thumb {
        background-color: rgba(0, 0, 0, 0.2);
        border-radius: 4px;
    }
</style>