

<script>
    import { goto } from "$app/navigation";
    import { onMount } from 'svelte';
    import { base } from "$app/paths";
	import { updated } from "$app/stores";
	
    
    let search
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
    function sortByIndex(){

        /*
        let _list = []

        for (let index in data_list){
            _list.push({
                id: data_list[index].id,
                data: data_list[index]
            })
        }

        console.log(_list)*/
        data_list.sort((a, b) => a.id - b.id)

        data_list = data_list
    }
    
    
</script>


<form on:submit|preventDefault={()=> goto({base}+'/search/'+search.toLowerCase())}>
    <input type="text" placeholder="Sök upp en pokemon" bind:value={search} />
</form>

<footer>
    <button on:click={()=>ClearHistory()}>clear history</button>
    <div>
        <button on:click={()=>sortByIndex()}>sortByIndex</button>
    </div>
    <div class="sertches_box">
        {#each data_list as data}
            <div class="searches">
                <a href="{base}/search/{data.name}">{data.name}</a>
            </div>
        {/each}
    </div>
</footer>


<style>
    *{
        color: black;
        border-radius: 10px;

    }
    footer{
        display: flex;
        flex-direction: column;
        align-items:center;
        width: 100%;
        bottom: 0;
        text-align: center;
        
        
    }
    .sertches_box {
        display: flex;
        flex-direction: column-reverse;
        padding: 4px;
        border-color: rgba(240, 255, 255, 0.2) ;
    }
    .searches{
        margin: 4px;
        border-width: 3px;
        border-radius: 10px;

    }
    .searches:hover{
        border-color:rgba(240, 255, 255, 0.8);
        background-color:  rgba(240, 255, 255, 0.4);
        transform: scale(110%);
    }
</style>