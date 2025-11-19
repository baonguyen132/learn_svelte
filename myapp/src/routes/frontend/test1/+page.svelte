<script lang="ts">

    let number = $state(0);
    let message = $derived.by(() => getMessage({number}));

    function hello({name , age} : {name: String, age: number}){
        alert(`Hello ${name}, you are ${age} years old.`);
    }

    function add() {
        number++ ;
    }
    function subtract() {
        number--;
    }

    function getMessage({number} : {number: number}) : string {
        if(number === 0) return `Please click button add`;
        else if(number > 0) return `Number is ${number} > 0`;
        else return `Number is ${number} < 0` ;
    }
</script>

<h1>{message}</h1>

<button onclick={add}>
    Add
</button>
<button onclick={subtract}>
    Subtract
</button>

<button onclick={() => hello({name: "Alice", age: 30})}>
    Clicked me
</button>
<style>
    h1 {
        color: purple;
    }
</style>