<script lang="ts">
    import bookCover from '$lib/assets/book_cover.png';
    import phoneCover from '$lib/assets/phone_cover.png'
    import {Button} from '$components'
</script>

<section class="hero">
    <div class="hero-showcase text-center bold">
        <h1 class="purple">MOVE TO</h1>
        <h1 class="purple">SPAIN</h1>
        <h4 class="semi-bold italic">There's no need to make the mistakes I made. </h4>
        <img class="bookCover" src="{bookCover}" alt="">
        <img class="phoneCover" src="{phoneCover}" alt="">
    </div>
    <div class="hero-text white text-center">
        <h1>THIS EBOOK WILL</h1>
        <h1>SAVE YOU MONEY,</h1>
        <h1 class="mb-m">TIMES AND NEVER</h1>
        <p class="light-grey mb-m">
            I moved to Spain seven years ago. The process was painful and difficult. I
            learned most things the hard way: finding a job, getting a visa,
            calculating my cost of living, choosing an apartment. That's why I wrote
            this e-book, to tell you how I did it. No bullshit, no stress.
        </p>
        <Button>PURCHASE E-BOOK FOR $10 </Button>

    </div>
</section>

<style>
    .hero {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        height: 100vh  ;
        overflow: hidden; 
    }
    .hero-showcase {
        position: relative;
        flex: 1;
        padding: 100px 16px 0px 16px;
        background: linear-gradient(
            135deg,
        #e2cbff,
        #e2cbff 25%,
        #deeaff 50%,
        #ece5ff 75%,
        #927bce
        );
    }
    .hero-text {
        flex: 1 ;
        background: black;
        padding: 100px 50px;
    }
    .bookCover {
        position: absolute;
        transform: translateY(30%);
        bottom: 0;
        right: 2%;
    }
    .phoneCover {
        position: absolute;
        transform: translateY(25%);
        bottom: 0;
        right: 55%;
    }
</style>