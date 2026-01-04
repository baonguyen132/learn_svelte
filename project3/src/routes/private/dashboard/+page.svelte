<script lang="ts">
	import BookCard from '$components/BookCard.svelte';
	import BookCategory from '$components/BookCategory.svelte';
	import StarRating from '$components/StarRating.svelte';
    import { getUserState } from '$lib/state/user-state.svelte.ts'

    let userContext = getUserState();
    let { allBooks, username } = $derived(userContext);

    

</script>

<div class="dashboard ">
    <div class="dashboard-header mb-l">
        <div class="add-book-container">
            <a href="/private/scan-shelf" class="add-book"><i class='bxr  bx-plus-circle' ></i> </a>
            <p>Add a new book</p>
        </div>
        <div class="welcome-message">
            <div class="headline">
                <h3 class="bold mb-xs">Welcome Back, {username}</h3>
                <p>
                    There's nothing quite like journey a good book can take you on. Have
                    you discovered any new favorites lately?
                </p>
            </div>
        </div>
    </div>
    

    <!-- BookCategories -->

    <BookCategory categoryName="Your favourite books" books={userContext.getHighestRatedBooks()} />

    <BookCategory categoryName="Recently added, unread books" books={userContext.getUnreadBooks()} />

    <BookCategory categoryName="Highest rated books from your favourites genre: Fantasy" books={allBooks.slice(0 , 10)} />

</div>

<style>
    .dashboard-header {
        display: flex;
        align-items: start;
        gap: 12px;
    }
    .add-book-container {
        display: flex;
        align-items: center;
        gap: 20px;
        flex: 8;
    }
    .add-book-container i{
        font-size: 50px;
    }

    .welcome-message {
        flex: 4
    }
    
</style>