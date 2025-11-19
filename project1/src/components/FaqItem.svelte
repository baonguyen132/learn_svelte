<script lang="ts">
	interface FaqItemProps {
		question: string;
		answer: string;
        isShowingAnswer: boolean;
        handelerClick: () => void
	}
	const { question, answer , isShowingAnswer , handelerClick }: FaqItemProps = $props();
	
</script>

<div class="item" onclick={handelerClick} >
	<div class="question-container" class:mb-m = {isShowingAnswer}>
		<p class="question-title">{question}</p>
		<i class={!isShowingAnswer ? 'bxr  bx-arrow-from-top-stroke' : 'bxr  bx-arrow-to-top-stroke'}></i>
	</div>
	{#if isShowingAnswer}
		<div class="answer-container">
			<p>{answer}</p>
		</div>
	{/if}
</div>

<style>
    .item {
        border-bottom: 2px solid black;
		padding: 20px 0px;
        cursor: pointer;
    }
	.question-container {
		display: flex;
		justify-content: space-between;
	}
    .question-container .question-title {
        font-size: 18px;
        font-weight: 600;
    }
    .question-container button {
        font-size: 24px;
    }
    .answer-container p{
        font-size: 16px;
    }
</style>
