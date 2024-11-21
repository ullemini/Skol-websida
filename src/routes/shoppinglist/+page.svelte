<script>

</script>


<main class="container">
    <h1 >Shoppinglist</h1>
    <div class="categories_container"></div>

</main>


<style>
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
        
    }
    .container h1{
        justify-content: center;
        align-items: center;
    }
    .categories_container{
        height: 100%;
        background-color: yellow;
    }
</style>