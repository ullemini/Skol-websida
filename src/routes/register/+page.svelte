<script>
    let color = "black"
    let colors = [
        {namn: "Blå", value: "blue"},
        {namn: "Röd", value: "red"},
        {namn: "Gul", value: "yellow"},
        {namn:"Grön", value: "green"},
        {namn: "vit", value: "white"},
        {namn:"svart",value: "black"},
        {namn:"gray",value: "gray"},
        {namn:"grey",value: "grey"},
        ]

    bind:value={color}
    function handleSubmit(){
        alert("Välkommen")
    }
</script>
<main>
    <div class="container">
        <h1>Registrering</h1>
        <form class="input_feald" on:submit|preventDefault={handleSubmit}>
            <label for="name">Namn:</label>
            <input type="text" id="name" >
            <label for="login">login</label>
            <input type="password" id="login">
            <label for="Favoritfärg">Favoritfärg</label>
            <select name="Favoritfärg" id="Favoritfärg">
                {#each colors as c}
                    <option value={c.color}>{c.namn}</option>
                {/each}
            </select>
            <div style="width: 100px; height: 100px; border-radius: 50%; overflow:hidden; background-color:{color};"></div>
            <input type="submit" value="Registrera" style="color: white;">
        </form>
    </div>
</main>

<style>
    main{
        background-image: url("https://t4.ftcdn.net/jpg/05/21/65/59/360_F_521655929_N80d5GaCQJ2VP073PfTXJTe9mkvsNtHE.jpg");
        background-size: cover;
        width: 100%;
        height: 100%;
        padding: 5%;
    }   
    .container{
        display:flex ;
        flex-direction:column;
        align-items: center;
        justify-content: space-evenly;
        border: solid 5px rosybrown;
        border-radius: 10px;
        width: 35%;
        height: 80%;
        background-color: #3a2e3b;
        margin: auto;
    
    }
    .input_feald input{
        color: black;
    }
    .input_feald option{
        color: black;
    }
</style>
