
<script>
	import { onMount } from 'svelte';
	
    let screen_height
    let screen_whith
    let left = 0
    let top = 0
    let alive = false
    let previus_life = false
    let is_jumping = false
    let enemy_list = []
    let score = 0
    let higscore = 0
    const JUMP_HIGHT = 80
    let intervalId
    let game_loop
    
    
    onMount(()=>{
        screen_whith = document.documentElement.clientWidth
        screen_height = document.documentElement.clientHeight
        console.log(document.documentElement.clientWidth)
        
        left =screen_whith / 2
        top = screen_height / 2
    })
    
    function startGameLoop(){
        game_loop = setInterval(()=>{
        score += 1
        if (top >= 300){
            top = 300
        }
        for (let enemy of enemy_list) {
            if (enemy.left > 0){
                enemy.left -= 1
            }
            else
                enemy.left = screen_whith

            
            if ((left < enemy.left+25 && left +50 > enemy.left)  && enemy.top<=top+50){
                console.log("colided",left ,enemy.left+25 ,left +50 ,enemy.left )
                alive = false
                
                clearInterval(game_loop)
                
            }   
        }
        enemy_list = enemy_list
    },6)
    }
    
    function onKeyDown(e) {
        if (alive){
            if ((e.keyCode == 32 || e.keyCode == 87) &&  !is_jumping){
                jump()
            }
            if(e.keyCode==69){
                spawn_enemy()
            }
            
        } 
    }
    function jump(){
        top -= JUMP_HIGHT;
                is_jumping = true
                intervalId = setInterval(()=>{ 
                    top += 1
                    if (top >= 300){
                        top = 300
                        is_jumping = false
                        clearInterval(intervalId)   
                    }
                },20)
    }
    function spawn_enemy(y_from_cener=0){
        
        enemy_list.push({type:"Normal_ememy",top:310+y_from_cener,left:screen_whith})
        enemy_list = enemy_list
        console.log("trgerd")
    }
    function startNewRound(){
        if (score > higscore){
            higscore = score
        }
        score = 0
        previus_life = true
        alive = true
        enemy_list = []
        startGameLoop()
    }
</script>

<main>
    <div class="player" style="top: {top}px; left:{left}px;"></div>
    {#each enemy_list as enemy}
        <div class="enemy" style="left:{enemy.left}px; top:{enemy.top}px;"></div>
    {/each}
    <div class="ground"> <button on:click={()=>{spawn_enemy()}}>Spawn enemy</button></div>
    {#if !alive}
    <div class="death_screen"  >
        {#if previus_life}
            <h1>You died! You got {score} points</h1>
            <h2>Yore previus higest score is {higscore}</h2>
        {/if}
        
        <button on:click={()=>startNewRound()}>Start new round</button>
        
    </div>    
   {/if}
</main>

<style>
    button{color: black;}
    
    .player{
        position: fixed;
        background-color: green;
        width: 50px;
        height: 50px;
    }
    .enemy{
        position: fixed;
        width: 25px;
        height: 40px;
        background-color: brown;
    }

    .ground{
        position: fixed;
        width: 100%;
        height: 25%;
        top: 351px;
        background-color: azure;
    }
    .death_screen{
        display: flex;
        flex-direction: column;
        position: fixed;
        color: black;
        justify-content: center;
        justify-items: center;
        width: 100%;
        height: 100%;
        background-color: blanchedalmond;
        text-align: center;
    }
</style>
<svelte:window on:keydown|preventDefault={onKeyDown} />