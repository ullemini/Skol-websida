<script>
    let color_value = "black"
    let name_value=""
    let email_value =""
    let password_value =""
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

    
    function handleSubmit(){
        alert("Välkommen "+ name_value +"!\n"+ "Credentials:\n collor: "+color_value+ "\n   Email: " + email_value +"\n"+ "   Password: " + password_value )
    }
</script>
<main>
    <div class="container">
        <h1>Registrering</h1>
        <form class="input_feald" on:submit|preventDefault={handleSubmit}>
            <div style="width: 100px; height: 100px; border-radius: 50%; overflow:hidden; background-color:{color_value};"></div>
            <label for="name">Namn:</label>
            <input type="text" id="name" bind:value={name_value}>
            <label for="email">Email:</label>
            <input type="email" id="email" bind:value={email_value}>
            <label for="login">Login:</label>
            <input type="password" id="login" bind:value={password_value}>
            <label for="Favoritfärg">Favoritfärg</label>
            <select name="Favoritfärg" id="Favoritfärg" bind:value={color_value} style="color:black;" >
                {#each colors as c}
                    <option style="color:{c.value}" value={c.value}>{c.namn}</option>
                {/each}
            </select>
            
            <input type="submit" value="Registrera" style="color: white;">
        </form>
    </div>
</main>

<style>
    main{
        background-image: url("https://t4.ftcdn.net/jpg/05/21/65/59/360_F_521655929_N80d5GaCQJ2VP073PfTXJTe9mkvsNtHE.jpg");
        background-size: cover;
        width: 100vw;
        height: 100vh;
        padding: 5%;
        min-height: 550px;
        
    }   
    .container{
        display:flex ;
        flex-direction:column;
        align-items: center;
        justify-content: space-evenly;
        border: solid 5px rosybrown;
        border-radius: 10px;
        width: 35vw;
        height: 80vh;
        background-color: #3a2e3b;
        margin: auto;
        min-width: 300px;
        min-height: 430px;
    }
    .input_feald{
        width: 100%;
        text-align: center;
    }
    .input_feald input{
        color: black;
    }
    .input_feald option{
        color: black;
    }
</style>
