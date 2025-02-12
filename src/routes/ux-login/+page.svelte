<script>
    import { base } from "$app/paths";
    let strigLetters = "QWERTYUIOPÅASDFGHJKLÖÄZXCVBNM"
    let letters = []
    let caracters = ""
    let nrc = []
    let step_count = false
    let username = ""
    function addLetter(index){
        
        let letter = letters[index]
        caracters+=letter.letter
        randomizeCaracter()
        console.log(letter.letter)
        strigLetters=strigLetters.replace(letter.letter,"")
        letters.splice(index,1)

        console.log(strigLetters)
        letters = letters
        strigLetters=strigLetters
    }
    function randomizePossision(){
        letters = []
        for (let letter of strigLetters){
            let top = Math.random()* 80
            let left = Math.random()* 80
            letters.push({letter:letter,top:top,left:left})
        }
        letters = letters
    }
    setInterval(()=>{
        if (!step_count) {
            randomizePossision()
        } else{
            letters = []

        }
        
        
    },2000);
    
    function _randomizeString(string){
        if (string.length > 1){
            let arrayified = [...string]
            let randomized = arrayified.sort((a, b) => 0.5 - Math.random());
            let new_string = randomized.toString()
            let new_styleized = string.replaceAll(",","" )
            console.log(new_styleized)
            return new_styleized
            
        }else{
            console.log("Nothig to randomise")
            return string
        }
    }
    function randomiseUsername(){
        if (username.length > 1){
            let arrayified = [...username]
            let randomized = arrayified.sort((a, b) => 0.5 - Math.random());
            let string = randomized.toString()
            let styleized = string.replaceAll(",","" )
            username = styleized
            console.log(username)
        }else{
            console.log("no username to randomise")
        }
        username = username
    }
    function randomizeCaracter() {
        if (caracters.length > 1){
            let arrayified = [...caracters]
            let randomized = arrayified.sort((a, b) => 0.5 - Math.random());
            let string = randomized.toString()
            let styleized = string.replaceAll(",","" )
            caracters = styleized
            console.log(caracters)
        }else{
            console.log("no caracter to randomise")
        }
        caracters = caracters
    }

    function on_next(){
        step_count +=1 
        if(step_count == 1){
            for (let c of caracters){
                nrc.push({caracter:c,count:1})
            }
        } else if (step_count == 2){
            for(let i = 0; i<nrc.length;i++){
                let n = nrc[i]
                console.log(n)
                for(let c=0; c < n.count; c++){
                    username += n.caracter
                    console.log(n.caracter)
                }
            }
        }
    }

    function handleSubmit(){
       
    }
</script>
<main>
    {#if step_count <= 2}
        <button id="next" on:click={()=>{on_next()}}>next step</button>
    {/if}
    
    <div class="container">
        {#if step_count == 0}
            <div class="caracters_container">
                <h1>Shose what caracters you haev in yore username!</h1>
                {#each letters as {letter,top,left},i}
                    <button on:click={()=>addLetter(i)} style="top: {top}%; left:{left}%" >{letter}</button>
                {/each}
            </div>
        {/if}
        <p>Caracters: {caracters}</p>


        {#if step_count == 1}
            <h1>How menny?</h1>
            
            <div class="car_count">
                {#each nrc as caracer,i }
                    <input type="range" max="5" min="1" step="1" bind:value={caracer.count} >
                    <p>{caracer.caracter }:{caracer.count}</p>
                {/each}
               
            </div>
        {/if}
        
        {#if step_count == 2}
            <form class="input_feald" on:submit|preventDefault={handleSubmit}>
                <label for="user">Username:{username}</label>
                <button on:click={()=>randomiseUsername()}>Randomize Username</button>
                <input type="submit" id="submit" value="Logga in" style="color: white;">
            </form>
        {/if}
        <h2 >Inget konto? <a href="{base}/register">Regester</a> </h2>
    </div>
</main>

<style>
    main{
        
        width: 100vw;
        height: 100vh;
        padding: 5%;
        min-height: 350px;
        
    }   
    h1{
        font-size: 150%;
        text-align: center;
    }
    .caracters_container{
        position: relative;

    }
    .caracters_container button{
        position: fixed;
        background-color: aqua;
        padding: 1em;
    }
    button:active{
        transform: scale(1.4);
        transition: all,40ms;
    }
    #next{
        background-color: green;
        border-radius: 40px;
        padding: 10px;
        position: fixed;
        right: 50px;
    }
    .container{
        position: relative;
        display:flex ;
        flex-direction:column;
        align-items: center;
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
    .car_count {
        display: flexbox;
        flex-direction: column-reverse;
        max-height: 100px;
        max-width: 80px;
        overflow: scroll;
        
    }
    .car_count input{
        min-width: 100px;
        
    }
</style>