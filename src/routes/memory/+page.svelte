<script>
    
    let front = "favicon.png"
    let cards = [
        {back:"https://preview.redd.it/sw96nbzsyz691.jpg?auto=webp&s=e96e62a872e48c8c4ade7fc354995cb5a39375ad" ,flipped:false,matched:false},
        {back:"https://preview.redd.it/sw96nbzsyz691.jpg?auto=webp&s=e96e62a872e48c8c4ade7fc354995cb5a39375ad" ,flipped:false,matched:false},
        {back:"https://preview.redd.it/it1g4oca35v61.jpg?auto=webp&s=4fdd30b07e0a9949bec47af606344fd654be7ea7" ,flipped:false,matched:false},
        {back:"https://preview.redd.it/it1g4oca35v61.jpg?auto=webp&s=4fdd30b07e0a9949bec47af606344fd654be7ea7" ,flipped:false,matched:false},
        {back:"https://preview.redd.it/kqxqx8hnmwg61.jpg?auto=webp&s=9ebe35ce39c8b4a480c6f56e887678f9c400f7f4" ,flipped:false,matched:false},
        {back:"https://preview.redd.it/kqxqx8hnmwg61.jpg?auto=webp&s=9ebe35ce39c8b4a480c6f56e887678f9c400f7f4" ,flipped:false,matched:false},
        {back:"https://preview.redd.it/i-mean-its-not-gay-right-v0-3aeeczldfx2e1.png?auto=webp&s=39bd4d1451f4e769054fbdd80714626290df0374" ,flipped:false,matched:false},
        {back:"https://preview.redd.it/i-mean-its-not-gay-right-v0-3aeeczldfx2e1.png?auto=webp&s=39bd4d1451f4e769054fbdd80714626290df0374" ,flipped:false,matched:false},
        {back:"assets/dora_deport.webp" ,flipped:false,matched:false},
        {back:"assets/dora_deport.webp" ,flipped:false,matched:false},
        {back:"assets/no_emegency_pls.webp" ,flipped:false,matched:false},
        {back:"assets/no_emegency_pls.webp" ,flipped:false,matched:false},
    ]
    shuffleArray(cards)
    let bluePoints = 0
    let redPoints = 0
    let blueTurn = true
    let flipCount  = 0
    let first_flipped_i = null
    function on_click(i){
        if (flipCount  >= 2){
            return
        }
        
        if (cards[i].flipped){
            return
        } 
        cards[i].flipped = !cards[i].flipped
        
        flipCount ++

        if (flipCount < 2){
            first_flipped_i = i
            return
        } 
        
        if (cards[first_flipped_i].back == cards[i].back) {
            cards[first_flipped_i].matched = true
            cards[i].matched = true
            if (blueTurn) {bluePoints++ } else { redPoints++}
            
        } else {
            blueTurn = !blueTurn
        }
        setTimeout(() => {
            cards.forEach((card) => {
                card.flipped = card.matched;
          });
          flipCount = 0;
          cards = cards;
        }, 1000);

        cards = cards
        let count =0
        cards.forEach(card => {
            if (card.matched == true){
                count++
            } 
        
        });
        if (cards.length == count){
            game_end()
        }
        
    }
    function restart_game(){
        cards.forEach(card => {
            card.matched = false;
            card.flipped = false;
        });
        shuffleArray(cards)
        cards = cards

        flipCount = 0
        blueTurn = true
        first_flipped_i = null
        
    }
    function game_end(){
        alert("game ended")
    }
    function shuffleArray(array) {
    for (let i = array.length - 1; i >= 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

</script>

<h1 style="justify-self: center;">Memory</h1>
<main>
    {#each cards as card,i}
        <div class="card"  class:flipped={card.flipped} on:click={()=>on_click(i)} >
            <img class="back" draggable="false" src="{card.back}" alt="">
            <img class="front" draggable="false" src="{front}" alt="">
        </div>
    {/each}
</main>
<div class="button_holder">
    <button on:click={()=>restart_game()}>Restart game</button>
</div>

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

    .button_holder{
        justify-self:center ;
    }

    .card {
        size: 100%;
        background-color: 2c3656 ;
        transform-style: preserve-3d;
        position: relative ;
        transition: transform 0.5s ;
    } 

    .card img{
        backface-visibility: hidden;
        position: absolute;
        width: 100%;
        height: 100%;
        
    }
   
    .card:not(.flipped):hover{
        transform : scale(1.1);
    }

    .back {
        transform: rotateY(180deg);
        
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
    .flipped{
        transform: rotateY(180deg);
    }
    
    
@media (min-height: 500px){
  main{
    grid-template-columns: repeat(4, 100px);
    grid-template-rows: repeat(3, 100px);
  }
}
@media (max-height: 500px){
  main{
    grid-template-columns: repeat(6, 100px);
    grid-template-rows: repeat(2, 100px);
  }
}
          

</style>