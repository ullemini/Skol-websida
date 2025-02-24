<script>
    let korg_open = false
    let total = 0
    let varor = [
        {namn:"vara 1",pris:25,img:{alt:"img of vara 1",src:"https://public.blenderkit.com/thumbnails/assets/2f441b19260145619f16e695a24794ca/files/thumbnail_8ccf946b-f9cd-4455-80f0-0d11346ce780.jpg.256x256_q85_crop-%2C.jpg.webp?webp_generated=1695346062"} },
        {namn:"vara 2",pris:26, img:{alt:"img of vara 2",src:"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/3b75b124-8007-4c17-b621-27f1b4420313/d8iri9k-6a408e4d-be79-4ed9-8b38-f99a1bf69d4d.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzNiNzViMTI0LTgwMDctNGMxNy1iNjIxLTI3ZjFiNDQyMDMxM1wvZDhpcmk5ay02YTQwOGU0ZC1iZTc5LTRlZDktOGIzOC1mOTlhMWJmNjlkNGQuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.63-ggV3cTpj8nXzhn5l6jGxFiSLVLMbeM5E6hACjrzY"}}
        , {namn:"vara 3",pris:26, img:{alt:"img of vara 3",src:"https://images.stockcake.com/public/2/f/0/2f0b8618-6e62-4dcf-9449-10d7ba495133_medium/antique-book-opened-stockcake.jpg"}}
        , {namn:"vara 4",pris:26, img:{alt:"img of vara 4",src:"https://images.stockcake.com/public/9/8/8/9888aa7f-8a5d-4504-9ea9-da39914e0478_medium/ancient-magical-tome-stockcake.jpg"}}
        , {namn:"vara 5",pris:26, img:{alt:"img of vara 5",src:"https://minecraft.wiki/images/Enchanted_Book.gif?b21c4"}}
        , {namn:"vara 6",pris:26, img:{alt:"img of vara 6",src:"https://greatandnobletasks.com/wp-content/uploads/2023/05/342709599_793180945748581_5493333590325473_n-2-1.jpg"}}
        , {namn:"vara 7",pris:26, img:{alt:"img of vara 7",src:""}}
        , {namn:"vara 8",pris:26, img:{alt:"img of vara 8",src:""}}
    ]
    let korg = []
    function updateTotal(){
        let new_total =  0
        for(let item of korg){
            new_total += item.vara.pris * item.antal
        }
        total = new_total
        
    }
    function läggIKorg(i){
        let vara = varor[i]
        for (let item of korg){
            if(item.vara ==vara){
                item.antal += 1
                updateTotal()
                korg = korg
                return
            }
        }
        korg.push({vara:vara,antal:1})
        updateTotal()
        korg = korg
    }
    
    function taBortFrånKorg(i){
        korg.splice(i,1)
        updateTotal()
        korg = korg
    }
    function ändraAntal(i,_antal=1){
        if (_antal + korg[i].antal > 0){
            korg[i].antal += _antal
            updateTotal()
            korg = korg
        } else {
            taBortFrånKorg(i)
        }
            
        
        
    }
</script>

<button id="varukorg_knapp" draggable="false" on:click={()=>{korg_open = !korg_open }}>Varukorg</button>
{#if korg_open}

    <aside class="korg">
        <h2>Items</h2>
        <table>
            <tr>
                <th>Namn</th>
                <th>Pris x Antal</th>
                <th>Delete</th>
            </tr>
            
            {#each korg as item,i}
                <tr>
                    <td>{item.vara.namn}</td> 
                    <td>{item.vara.pris} x {item.antal} <button on:click={()=>{ändraAntal(i)}}>+</button><button on:click={()=>{ändraAntal(i,-1)}}>-</button></td>
                    <td><button on:click={()=>{taBortFrånKorg(i)}}>x</button></td> 
                </tr>
            {/each}
        </table>
        <div style="">
            <p>Total summa: {total}kr</p>
            <button class="kassa">Gå till kassa</button>
        </div>
    </aside>
{/if}
<main>
    {#each varor as vara, i}
        <div class="vara">
            <img src="{vara.img.src}" alt="{vara.img.alt}" >
            <div class="info">
                <h2>{vara.namn}</h2>
                <p>Pris: {vara.pris} kr</p>
            </div>
            <button  class="lägg_till_knapp" on:click={()=>{läggIKorg(i)}}>Lägg till</button>
        </div>
    {/each}
    

</main>
<footer>
    <p>About us</p>
</footer>

<style>
    button{
        user-select: none;
        border-color: #d9bda5;
        background-color: #523f30;
        padding-left: 3px;
        padding-right: 3px;
        border-width: 2px;
        border-radius: 4px;

    }
    #varukorg_knapp{
        position: fixed;
        border-width: 2px;
        right:1vw;
        top: 1vw;
        
    }
    .korg{
        color: black;
        display: flex;
        flex-direction: column;
        position: fixed;
        right: 1vw;
        top: 32px;
        min-width: 250px;
        min-height: 200px;
        padding: 6px;
        padding-left: 7px;
        border-width: 3px;
        background-image: url("https://clipart-library.com/images/BTar774Ec.png");
        background-size: cover;
        background-color: #d9bda5;
        text-align: center;
    }
    .korg .kassa{   
        justify-self: center;
    }
    .korg button {
        color:rgb(255, 242, 224);
    }
    .korg h2{
        font-size: larger;
    }
    main{
        display: grid;
        width: 90%;
        margin-top: 40px;
        margin-left: 3%;
        margin-right: 6%;
        background: none;
       
    }
    .vara{
        display: flex;
        flex-direction: column;
        margin-bottom: 5px;
        margin-top: 5px;
        margin-right: 20px;
        border-radius: 15px;
        justify-self:auto;
        align-self:auto;
        align-items: center; 
        background-image: url("https://as2.ftcdn.net/jpg/02/77/83/03/1000_F_277830300_GM5xEgQPvgtB6SXPdxP4RImUjZT4u1G0.jpg");
        background-size: cover;
    }
    .vara img{
        user-select: none;
        margin-top: 40px;
        margin-bottom: 20px;
        width: 200px;
        height: 200px;
        border-width: 10px;
        border-color: #d9bda5;
        background-color: rgb(196, 144, 75);
    }
    .vara .info {
        text-align: center;
        font-size: large;
        margin-top: 20px;
        margin-bottom: 20px;
    }
    .vara h2{
        font-size: xx-large;
        font-family:'Times New Roman', Times, serif;
    }
    .vara p{
        margin-top: 10px;
    }
    .vara .lägg_till_knapp{
        align-self: center;
        margin-bottom: 15px;
    }
    @media only screen 
    and (min-width: 900px) {

        main{
            grid-template-columns:repeat(3, 1fr);
        }
    }
    @media only screen 
    and (min-width:500px)
    and (max-width: 900px){
        main{
            grid-template-columns:repeat(2, 1fr);
        }
    }
    @media only screen 
    and (max-width: 500px){
        main{
            grid-template-columns:repeat(1, 1fr);
        }
    }
</style>