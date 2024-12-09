<script>
    import {fade} from 'svelte/transition'
    let varor = [{name:"test",köpt:false,prio:0},{name:"tet 2",köpt:true,prio:1}]
    let new_item = ""
    
    function handleSubmit(){
        if (new_item ==("")){return}
        varor.push({name:new_item,köpt:false,prio:varor.length})
        varor = varor
    }
    function switch_list(i){
        if (varor[i].köpt ){
            varor[i].köpt =false
        } else{
            varor[i].köpt = true
        }
        varor = varor
    }
    function remove(i){
        varor.splice(i,1)
        varor = varor
    }
    function change_item_priorety(i,prio_change=1){
        if (!i || i+prio_change >= varor.length){alert(" ")} else {
        let temp_to = varor[i+prio_change]
        varor[i+prio_change] = varor[i]
        varor[i] = temp_to
        }
        varor = varor
        
    }
    
    </script>


<main class="container">
    <h1 >Shoppinglist</h1>
    <div class="categories_container">
        <section>
            <h2>Varor att köpa</h2>
            <ol>
                {#each varor as vara,i }
                {#if vara.köpt == false}
                    <li transition:fade>
                        {vara.name} <button transition:fade on:click={()=>remove(i)}>X</button> <button on:click={()=>switch_list(i)}>&gt</button> <button on:click={()=>change_item_priorety(i,-1)}>&uparrow;</button> <button on:click={()=>change_item_priorety(i,1)}>&downarrow;</button>
                    </li>
                {/if}
                {/each}
            </ol>
        </section>
        <section>
            <h2>Köpta varor</h2>
            <ul>
                {#each varor as vara,i}
                {#if vara.köpt == true }
                    <li transition:fade>
                        {vara.name} <button  on:click={()=>remove(i)}>X</button><button on:click={()=>switch_list(i)}>&lt</button> <button on:click={()=>change_item_priorety(i,-1)}>&uparrow;</button> <button on:click={()=>change_item_priorety(i,1)}>&downarrow;</button>
                    </li>
                    {/if}
                {/each}
            </ul>
            
        </section>
        
    </div>
    <form on:submit|preventDefault={handleSubmit} style="justify-self:center;">
        <input type="text" id="new_item_feald" bind:value={new_item}>
        <input type="submit" id="submit" value="submit item" style="color: white;">
    </form>
</main>


<style>
    button {
        color: white;;
        background-color: #000;
        border-color: black;
        border-radius: 25px;
        border-width: 1px;
    }
    h1{
        border-radius: 20px;
        color: #000;
        background-color: aqua;
    }
    .container{
        display: grid;
        grid-template-rows: 1fr 9fr 1fr;
        background-color: gray;
        width: 60vw;
        height: 70vh;
        border-radius: 20px;
        color: #000;
        
    }
    .container h1{
        justify-self: center;
        align-self:center;
        
    }
    .categories_container{
        display: grid;
        grid-template-columns:  repeat(2,1fr);
        height: 100%;
        background-color: yellow;
        column-gap:10px;
    } 
    section {
        width: 100%;
        height: 100%;
        
    }
    
 .categories_container section:first-child{  /* vilket barn vill vi styla? */
    background-color: rgba(0, 0, 0, 0.1) /* svart bakgrund med 10% opacitet */
  }
 
  .categories_container section:last-child{  /* vilket barn vill vi styla? */
    background-color: rgba(0, 0, 0, 0.3) /* svart bakgrund med 30% opacitet */
  }
  .categories_container h2 {
    background-color: rgba(0, 0, 0, 0.3);
    text-align:center;
    font-size:20px;
    margin: 10px;
  }
  .categories_container ul{
    list-style: disc, inside;
  }
  .categories_container ol{
    list-style: lower-greek inside;
    
  }
  .categories_container li {
    border-width: 1px;
    border-right:0px;
    border-left: 0px;
    border-color: aliceblue;
  }
</style>