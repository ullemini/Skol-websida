<script>
    let strigLetters = "QWERTYUIOPÅASDFGHJKLÖÄZXCVBNM"
    let letters = []
    let username = ""

    function addLetter(index){
        let letter = letters[index]
        username+=letter.letter
        letters[index].top = Math.random()* 80
        letters[index].left = Math.random()* 80
    }
    setInterval(()=>{
        letters = []
        for (let letter of strigLetters){
            let top = Math.random()* 80
            let left = Math.random()* 80
            letters.push({letter:letter,top:top,left:left})
        }
        letters = letters
    },2000);

</script>


<section>
    {#each letters as {letter,top,left},i}
        <button on:click={()=>addLetter(i)} style="top: {top}%; left:{left}%" >{letter}</button>
    {/each}
</section>
<p>Username: {username}</p>

<style>
    section{
        position: relative;
        background-color: beige;

    }
    button{
        position: fixed;
        background-color: aqua;
        padding: 1em;
    }
    button:active{
        transform: scale(1.4);
        transition: all,40ms;
    }
</style>