<script>
	import { onMount } from 'svelte';

    /** @type {import('./$types').PageData} */
    export let data;
    let key_list = []
    /* shuld contain keyName */
    function SesionStore(_data){
        key_list.push(_data)
        sessionStorage.setItem('latest', JSON.stringify(key_list));
        
    }

    function SesionLoad(){
        key_list = JSON.parse( sessionStorage.getItem('latest'))
    }
    
    onMount(
        ()=>SesionLoad(),
        ()=>SesionStore(data)
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

<footer>
    {#each key_list as _key}
        <h1>{_key}</h1>
    {/each}
    
</footer>

<style>
    article{
        display: flex;
        width: 90%;
        height: 30%;
        gap: 1em;
    }
    footer{
        width: 100%;
        bottom: 0;
    }

</style>