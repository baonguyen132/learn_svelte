<script lang="ts">
	import type { Book } from "$lib/state/user-state.svelte.ts";
	import StarRating from "./StarRating.svelte";

    
    interface BookCardProps {
        book: Book 
    }

    let { book } : BookCardProps = $props();

    let bookStatus = $derived.by(
        () => {
            if(book.finished_reading_on) return "Finished";
            if(book.started_reading_on) return "Reading";
            return "Not Started";
        }
    )

</script>

<a class="book-card" href={`/private/book/${book.id}`} style="{book.cover_image ? `background-image: url(${book.cover_image})` : 'background-color: grey' }">
    <div class="book-status">
        <span>{bookStatus}</span>
    </div>
    <div class="book-info">
        <h4 class="book-title">{book.title}</h4>
        <p class="mb-m"><i>{book.author}</i></p>
        <StarRating value={book.rating || 0} isReadOnly={false} />


    </div>
</a>

<style>
    .book-card {
        position: relative;
        display: flex;
        flex-direction: column;
        width: 250px;
        height: 300px;
        background-size: cover ;
        background-position: 50% 50%;
        box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
        color: white;
        text-align: left;
        border-radius: 12px;
        text-decoration: none;
    }

    .book-info {
        background: rgba(0, 0, 0, 0.4);
        width: 100%;
        height: 100%;
        padding: 60px 16px 0px 16px;
        border-radius: 12px;
    }
    .book-status {
        position: absolute;
        top: 16px;
        right: 0px;
        padding: 4px 8px;
        width: auto;
        background-color: rgb(4, 59, 92, 0.7);

    }
</style>