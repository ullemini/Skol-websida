<script >
	import { onMount } from 'svelte';

    /** @type {import('./$types').PageData} */
    export let data;
    let data_list = []
    /* shuld contain keyName */
    function SesionStore(_data){
        
        data_list.push(_data.response)
        sessionStorage.setItem('latest', JSON.stringify(data_list));
        
    }

    function SesionLoad(){
        let _temp = sessionStorage.getItem('latest')??"[]"
        if (_temp.length > 2){
            data_list = JSON.parse(_temp)
        }
         
        console.log("session", data_list)
        
    }
    
    onMount(
        ()=>{
            SesionLoad();
            SesionStore(data)
        }
    )

</script>

{#await data}
    <p>.. waiting</p>
{:then pokemon } 
    
    <article >
        
        {#each Object.entries(pokemon.response.sprites) as sprites}
            {#if typeof sprites[1] == "string"}
                <img src={sprites[1]} />
            {/if}
        {/each}
    </article>
    <h1>{pokemon.response.name}</h1>
    <section>
        <h1>{pokemon.response.moves[0].move.name}</h1>
    </section>
{/await}  



<style>
    article{
        display: flex;
        width: 90%;
        height: 30%;
        gap: 1em;
    }
    

</style>