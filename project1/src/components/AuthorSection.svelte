<script lang="ts">
	import authorImage from '$lib/assets/profile_pic.jpg';
</script>

<section class="author-section">
	<h2 class="mb-l">About the author</h2>
	<div class="author-container">
		<div class="author-text">
			<p class="mb-xs">
				Niklas Fischer is a seasoned expatriate with over seven years of experience living in Spain.
				Originally from New York, John left behind the hustle of corporate America to embrace a more
				fulfilling life on the sun-soaked coasts of Spain. Through his own journey, he has navigated
				the challenges of securing visas, finding the perfect home, and adapting to a new culture,
				making him an expert in the field of relocation.
			</p>
			<p>
				Niklas’ practical advice is rooted in real-life experience, having learned firsthand the
				intricacies of moving to a new country. His goal is to help others avoid common pitfalls and
				make their transition to life in Spain as smooth as possible. When not sharing his
				expertise, John enjoys exploring Spain’s rich culture and history, fully embracing the
				lifestyle he once dreamed of.
			</p>
		</div>
		<div class="author-image">
			<img class="author-image" src={authorImage} alt="" />
		</div>
	</div>
</section>

<style>
	.author-section {
		padding: 80px 100px;
	}
	.author-container {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		gap: 50px;
	}
	.author-text {
		flex: 7;
	}
	.author-image {
		flex: 5;
	}
	.author-image img {
		max-width: 350px;
		border: 5px solid black;
		box-shadow: 0 4px 24px rgb(0, 0, 0, 0.5);
	}
</style>
