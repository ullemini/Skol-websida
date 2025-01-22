<script >
	import { onMount } from 'svelte';

    /** @type {import('./$types').PageData} */
    export let data;
    let data_list = []
    /* shuld contain keyName */
    function SesionStore(_data){
        /* Assume index 0 is oldest uniqe sertch and list desends: first \n second \n third \n osv.. */
        
        for (let index in data_list) {
            if (_data.response.name == data_list[index].name ){
                data_list.splice(index,1)  
            }                

        }

        if (data_list.length >= 5){
            data_list.shift()
            data_list = data_list
        }
        

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
    <h1>{pokemon.response.name}</h1>
    <article >
        
        {#each Object.entries(pokemon.response.sprites) as sprites}
            {#if typeof sprites[1] == "string"}
                <img alt="imege of {pokemon.response.name}" src={sprites[1]} />
            {/if}
        {/each}
    </article>
    <section>
        <div class="type_box">
            <h2>Type: </h2>
            {#each pokemon.response.types as type}
                <p>{type.type.name}</p>
            {/each}
        </div>
        <div class="stats_box">
            <h2>Stats</h2>
            <br>
            {#each pokemon.response.stats as stat}
                <p style="right:3px ;">{stat.stat.name}:</p><p style="left: 1;">{stat.base_stat}</p>
            {/each}
        </div>
        
    </section>
{/await}  



<style>
    h1,h2, p{
        color: black;
    }
    h1{
        
        font-size:50px;
    }
    p{
        margin-right: 5px;
        margin-left: 5px;
    }
    article{
        display: flex;
        
        width: 90%;
        height: 30%;
        gap: 1em;
        
    }
    .type_box{
        display: flex;
        
    }
    .type_box p{
        margin: 4px;
        border-color: rgba(240, 255, 255, 0.6) ;
        border-width: 3px;
        border-radius: 10px;
        
    }
    .stats_box{
        display: grid;
        grid-template-columns: 1fr 1fr;
        
    }
</style>