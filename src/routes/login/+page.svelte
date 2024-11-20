
<script>
    import { base } from '$app/paths';
    import { onMount } from 'svelte';
    import {users_store} from "$lib/user";

    let users = []
    let email_value =""
    let password_value =""
    onMount(() => {
        if($users_store.length > 2){
            users = JSON.parse($users_store);
        }
    });

    function handleSubmit(){

        if (email_value == ""){
            alert("no email inputed")
            return
        } 
        
        let user_ = users.filter(user => user.email == email_value && user.password == password_value)
        if (user_.length>1){
            alert("WARNIG: more than one accont, contact support! ")
            return
        }
        if (user_.length>0){
            alert("Välkommen "+ user_[0].email +"!\n"+ "Credentials:\n"+"   Email: " + email_value +"\n"+ "   Password: " + password_value )
        } else {
            alert("no accout whith that email exists or wrog pasowrd")
        }
    }
</script>
<main>
    <div class="container">
        <h1>Inloggning</h1>
        <form class="input_feald" on:submit|preventDefault={handleSubmit}>
            <label for="email">Email:</label>
            <input type="email" id="email" bind:value={email_value}>
            <label for="login">Login:</label>
            <input type="password" id="login" bind:value={password_value}>
            <label for="submit"></label>
            <input type="submit" id="submit" value="Logga in" style="color: white;">
        </form>
        <h2>Inget konto? <a href="{base}/register">Regester</a> </h2>
    </div>
</main>

<style>
    main{
        background-image: url("https://t4.ftcdn.net/jpg/05/21/65/59/360_F_521655929_N80d5GaCQJ2VP073PfTXJTe9mkvsNtHE.jpg");
        background-size: cover;
        width: 100vw;
        height: 100vh;
        padding: 5%;
        min-height: 350px;
        
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
        min-width: 250px;
        min-height: 300px;
    }
    .input_feald{
        width: 100%;
        text-align: center;
    }
    .input_feald input{
        color: black;
    }
</style>
