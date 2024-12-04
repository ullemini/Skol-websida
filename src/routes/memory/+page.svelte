<script>
    
    let cards = [
        {front:"favicon.png",back:"https://preview.redd.it/sw96nbzsyz691.jpg?auto=webp&s=e96e62a872e48c8c4ade7fc354995cb5a39375ad" ,flipped:false},
        {front:"favicon.png",back:"https://preview.redd.it/sw96nbzsyz691.jpg?auto=webp&s=e96e62a872e48c8c4ade7fc354995cb5a39375ad" ,flipped:false},
        {front:"favicon.png",back:"https://preview.redd.it/it1g4oca35v61.jpg?auto=webp&s=4fdd30b07e0a9949bec47af606344fd654be7ea7" ,flipped:false},
        {front:"favicon.png",back:"https://preview.redd.it/it1g4oca35v61.jpg?auto=webp&s=4fdd30b07e0a9949bec47af606344fd654be7ea7" ,flipped:false},
        {front:"favicon.png",back:"https://preview.redd.it/kqxqx8hnmwg61.jpg?auto=webp&s=9ebe35ce39c8b4a480c6f56e887678f9c400f7f4" ,flipped:false},
        {front:"favicon.png",back:"https://preview.redd.it/kqxqx8hnmwg61.jpg?auto=webp&s=9ebe35ce39c8b4a480c6f56e887678f9c400f7f4" ,flipped:false},
        {front:"favicon.png",back:"" ,flipped:false},
        {front:"favicon.png",back:"" ,flipped:false},
        {front:"favicon.png",back:"" ,flipped:false},
        {front:"favicon.png",back:"" ,flipped:false},
        {front:"favicon.png",back:"" ,flipped:false},
        {front:"favicon.png",back:"" ,flipped:false},
    ]
    let bluePoints = 0
    let redPoints = 0
    let blueTurn = true
    function on_click(i){
        cards[i].flipped = !cards[i].flipped
        blueTurn = !blueTurn
        cards = cards
        
    }
    

</script>

<h1>Memory</h1>
<main>
    {#each cards as card,i}
    {#if card.flipped}
        <div class="card"  on:click={()=>on_click(i)} ><img class="back" src="{card.back}" alt=""></div>
    {:else}
        <div class="card" on:click={()=>on_click(i)}><img class="front" src="{card.front}" alt="" ></div>
    {/if}
    {/each}
</main>

<aside class="blue">
    <p>{bluePoints}</p>
</aside>

<aside class="red">
    <p>{redPoints}</p>
</aside>

<aside class="turn" class:blue={blueTurn}>
    
</aside>

<style>
    main {
        display: grid;
        grid-template-columns: repeat(4,100px);
        grid-template-rows: repeat(3,100px);
        gap: 1px;
        position: relative ;

        justify-self: center;
        
    }
    
    aside {
    width: 100px;
    height: 100px;
    position: fixed;
    bottom: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    }
    p{
    font-size: 30px;
    }
                          
    .card {
        size: 100%;
        background-color: aliceblue;
        backface-visibility: hidden;
    } 
    .front {

    }
    .back {
        
    }
    .blue{
        left:10px;
        background-color: blue;
        
    }
    .red{
        right: 10px;
        background-color: red;
    }
    .turn{
        right: 10px;
        z-index: -1;
        box-shadow: 0 0 10px 10px yellowgreen;
    }
    
</style>