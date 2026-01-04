<script lang="ts">
	import Button from '$components/Button.svelte';
	import StarRating from '$components/StarRating.svelte';
	import { getUserState, type Book } from '$lib/state/user-state.svelte.ts';


    interface BookPageProps {
        data: {
            bookData: Book ;
        }
    }
    let userContext = getUserState()

    let { data } : BookPageProps = $props();
    let  bookData  = $derived(data.bookData) ;

    let isEditMode = $state(false);
    
    let title = $state(bookData.title);
    let author = $state(bookData.author);
    let rating = $state(bookData.rating || 0);
    let description = $state(bookData.description || "");
    let genre = $state(bookData.genre || "");
    

    function goBack() {
        history.back();
    }    

    function toggleEditMode() {
        if(isEditMode) {
            // Save changes logic here
            console.log('Saving changes...');
        }
        isEditMode = !isEditMode
    }

    function updateReadingBookStatus() {

        const hasStartedReading = Boolean(bookData.started_reading_on) ;
        const currentTimestamp = new Date().toISOString();

        if(!hasStartedReading) {
            userContext.updateBooks(bookData.id, { started_reading_on:currentTimestamp })
        }
        else {
            userContext.updateBooks(bookData.id, { finished_reading_on:currentTimestamp })
        }
    }
</script>

{#snippet bookInfo()}
    <h2>{bookData.title}</h2>
    <p class="book-author">{bookData.author}</p>
    <h4 class="mt-m mb-xs semi-bold">Your rating</h4>

    <StarRating value={bookData.rating || 0} isReadOnly={false} />
    <p class="small-font">Click to {bookData.rating ? "change" : "give"} rating</p>

    {#if bookData.description}
        <h4 class="mt-m mb-xs semi-bold">Description</h4>
        <p class="mb-m">{bookData.description}</p>

    {:else}
        <h4 class="mt-m mb-xs semi-bold">No Description Available</h4>
        <button class="block mb-m" onclick={() => console.log('Add description clicked')}><p>Click to add one</p></button>
    {/if}
    {#if !bookData.finished_reading_on}
        <Button isSecondary={true} handleClick={(updateReadingBookStatus)} type="button">
            {
                bookData.started_reading_on ? "I finished reading this book" : "I started reading this book"
            }
        </Button>
    {/if}

    {#if bookData.genre}
        <h4 class="mt-m mb-xs semi-bold">Genre</h4>
        <p class="mb-m">{bookData.genre}</p>
    {/if}
{/snippet}

{#snippet editField()}
    <form>
        <input type="text" class="input input-title mt-m mb-xs" bind:value={title} />
        <div class="input-author mb-m">
            <p>by</p>
            <input type="text" class="input" placeholder="Author" bind:value={author} />
        </div>
        <h4 class="mt-m mb-xs semi-bold">Rating</h4>
        <StarRating value={ rating } isReadOnly={false} />
        <h4>Description</h4>
        <textarea class="input textarea-description mb-m" rows="5" bind:value={description}></textarea>

        {#if !bookData.finished_reading_on}
            <Button isSecondary={true} handleClick={updateReadingBookStatus} type="button">
                {
                    bookData.started_reading_on ? "I finished reading this book" : "I started reading this book"
                }
            </Button>
        {/if}
        <h4 class="mt-m mb-xs semi-bold">Genre</h4>
        <input type="text" class="input" placeholder="Genre" bind:value={genre} />
    </form>
{/snippet}

<div class="book-page">
    <button onclick={goBack}><i class='bxr  bxs-arrow-big-left-line mb-m' style="font-size: 36px;"></i> </button>
    <div class="book-container">
        <div class="book-info">
            {#if isEditMode} 
                {@render editField()}
            {:else}
               {@render bookInfo()}
            {/if}

            <div class="buttons-container mt-m">
                <Button 
                    isSecondary={true} 
                    handleClick={toggleEditMode}
                >
                    {isEditMode ? 'Save changes' : 'Edit'}
                </Button>
                <Button  isDanger={true}  handleClick={() => console.log('Delete from library clicked')} >
                    Delete from library
                </Button>

            </div>
        </div>
        <div class="book-cover" style="{bookData.cover_image ? `background-image: url(${bookData.cover_image}); background-size: cover; background-position: center;` : 'border: 1px solid black;'}">
            {#if !bookData.cover_image}
                <button class="add-cover">
                    <i class='bxr  bxs-camera-alt'></i> 
                    <p>Add Cover Image</p>
                </button>
            {/if}
        </div>
    </div>
</div>

<style>
    .book-container {
        display: flex;
        justify-content: flex-start;
        gap: 20px;
    }

    .book-info {
        width: 50%;
    }
    .book-cover {
        width: 40%;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 15px;
        min-height: 400px;
        max-width: 350px;
    }
    .book-cover img {
        max-width: 100%;
        max-height: 100%;
        border-radius: inherit;
        object-fit: cover;
    }   

    .add-cover {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 12px;
        background: none;
        border: none;
        cursor: pointer;
        font-size: 18px;
    }
    input {
        max-width: 100%;
        padding: 8px 4px;

    }
    .textarea-description {
        width: 100%;
    }
    .input-title {
        font-size: 60px;
        font-weight: bold;
        font-family: "EB Garamond", serif;
    }

    .input-author {
        display: flex;
        align-items: center;
        gap: 8px;
    }
    
</style>