<script lang="ts">

    interface StarRatingProps {
        isReadOnly: boolean;
        value: number;
        updateDatabaseRating?: (newRating: number) => void
    }

    let {isReadOnly, value , updateDatabaseRating} : StarRatingProps = $props();

    function handleRating(newRating: number) {

        if(updateDatabaseRating) {
            value = newRating;
            updateDatabaseRating(value);
        }
    }


</script>

<div class="rating-container" role={isReadOnly ? 'img' : 'group'} aria-label={isReadOnly ? `Rate ${value} out of 5 stars` : "Rate this book"}  aria-readonly={isReadOnly}>
    {#each Array(5) as _ , index}
        <button 
        type="button" 
        class="star" 
        aria-label={isReadOnly ? `Rated ${index + 1} out of 5 stars` : `Rate ${index + 1} out of 5 stars`}
        aria-pressed={!isReadOnly && value > index}
        onclick={() => {handleRating(index + 1);}}
        disabled={isReadOnly}
        >
            <i class='bxr  bxs-star' style="font-size: 32px; color: {value > index ? 'gold' : 'gray'};"></i>

        </button>
        
    {/each}
</div>

<style>
    .rating-container {
        display: inline-flex;
        gap: 4px;
        outline: none;

    }

    .star {
        background: none;
        border: none;
        outline: none;
        
        cursor: pointer;
        padding: 0;
    }
    .star i {
        color: var(--fill);
    }
</style>