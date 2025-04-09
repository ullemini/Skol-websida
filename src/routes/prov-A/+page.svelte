<script>
	import { onMount } from "svelte";

    let ammount = 6
    let boxes = []

    function update_boxes(){
        boxes = []
        for (let index = 0; index < ammount; index++) {
            let lis = []
            for (let i = 0; i < Math.min(Math.floor(Math.random()*10),index); i++) {
                lis.push(Math.floor(Math.random()*10))
            }
            boxes[index] = lis
        }
        console.log(boxes)
        boxes = boxes
    }
    onMount(
        update_boxes()
        )
</script>

<input type="number" bind:value={ammount} min="0" max="7"  on:input={()=>{update_boxes()}}>
<main>
    {#each boxes as box,i}
        <div class="box" class:choosen = {i==0}>
            {#each box as item}
                <li>{item}</li>
            {/each}
        </div>
    {/each}
    
</main>
<img src="favicon.png" alt="fav" >
<style>

.choosen{
    grid-column-start: 1;
    grid-column-end: 4;
}

    *{color: black;}
    main{
        display: grid;
        gap: 5px;
        height: 70%;
        width: 60%;
    }
    .box{
        padding: 10px;
        background-color: red;
    }
    .box:hover {
        border-color: aqua;
        border-style: dotted;
        border-width: 2px;
    }
    img{
        display: none;
        position: absolute;
        bottom: 1px;
        left: 1px;
    }
    @media ( min-width: 900px){
        main{
            grid-template-columns:repeat(3,1fr);
            
        }
    }
    @media (max-width: 900px){
        main{
            grid-template-columns:repeat(2,1fr);
        }
    }
    
</style>