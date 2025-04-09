<script>
    let colur
</script>

<main>
    <form >
        <input type="button" value="test" > <br>
        <input type="checkbox" name="checkbox" id="" bind:value={colur}><br>
        <input type="text" name="test" id="2" >
    </form>
    <button id="w">
        clicy clack
    </button>
    <div>
        <div></div>
        <div>
            <div></div>
        </div>
    </div>
</main>

<style>
    #w{
        
        background-color: aqua;
        width: 100px;
        height: 100px;

    }
    main{
     color: black;
     width: 100sw;
     padding: 10px;
     margin: 10px;
        width:auto;
    }
    @media (min-width:1000px){
        main{
            background-color: red;
        }
    }
    @media (max-width:1000px){
        main{
            background-color: blue;
        }
    }
</style>