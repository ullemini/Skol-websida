

<script>
    import { goto } from "$app/navigation";
    import { onMount } from 'svelte';
    import { base } from "$app/paths";
    
    var search
    let data_list = []
    function SesionLoad(){
        let _temp = sessionStorage.getItem('latest')??"[]"
        if (_temp.length > 2){
            data_list = JSON.parse(_temp)
        }
         
        console.log("session", data_list)
        
    }
    
    onMount(()=>{SesionLoad()})
    function ClearHistory(){
        sessionStorage.setItem('latest',"[]")
        data_list = []
    }
</script>


<form on:submit|preventDefault={()=> goto('/search/'+search.toLowerCase())}>
    <input type="text" placeholder="Sök upp en pokemon" bind:value={search} />
</form>

<footer>
    <button on:click={()=>ClearHistory()}>clear history</button>
    {#each data_list as data}
        <div>
            <a href="{base}/search/{data.name}">{data.name}</a>
        </div>
    {/each}
    
</footer>


<style>
    *{
        color: black;
        border-radius: 10px;

    }
    footer{
        width: 100%;
        bottom: 0;
        text-align: center;
    }
</style>