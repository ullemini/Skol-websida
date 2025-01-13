

<script>
    import { goto } from "$app/navigation";
    var search
    function pre_goto(){
        goto('/search/'+search.toLowerCase())
    }
</script>


<form on:submit|preventDefault={()=> pre_goto(search)}>
    <input type="text" placeholder="Sök upp en pokemon" bind:value={search} />
</form>

<style>
    *{
        color: black;
        border-radius: 10px;

    }
</style>