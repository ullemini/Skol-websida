
<script>
    
    let image = "https://picsum.photos/id/70/367/267"
    let photo = "https://picsum.photos/id/88/367/267"
    let picture = "https://picsum.photos/id/93/367/267"

</script>

<main>
    <h1 class="gradient-text">Photoapp</h1>

    <p class="gradient-text">Denna sida innehåller fina bilder</p>

    <div class="photos">
        <div class="image-wrapper"><img src={image} alt="Flexbox egenskaper"></div>
        <div class="image-wrapper"><img src={photo} alt=""></div>
        <div class="image-wrapper"><img src={picture} alt=""></div>

    </div>
</main>

<style>
    h1{
        text-align: center;
        font-size: 50px;
        margin: 20px;
        color: grey;
        
    }
    p{
        text-align: center;
    }
    /* fun test that did not fully work
    .gradient-text {
        background-color: linear-gradient(45deg, #f3ec78, #61af42);
        background-size: 100%;
        background-clip: text;
    }
    */
    .photos {
        display:flex;
        overflow:hidden;
        align-items: center;
        justify-content:center;
        width: 100vw;
        flex-wrap: wrap;
    }
    
    .image-wrapper{
        flex: 1;
        margin:10px;
        flex-basis: 300px;
        
    }
    .image-wrapper img{ 
        width: 100%; 
        border-radius: 20px;
        border: 2px solid rgba(2, 189, 227, 0.404);
        background-color: gainsboro;
        box-shadow: 4px 8px 10px rgba(0,0,0,0.2);
    }
    .image-wrapper:hover { 
        flex-grow:2;
        transition-timing-function: ease-in-out;
        transition:flex 2s;
    }
    .image-wrapper:active { 
        transform: scale(0.9); 
    }

</style>