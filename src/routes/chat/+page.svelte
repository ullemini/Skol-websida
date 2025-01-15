<script>
    import ElizaBot from 'elizabot';
    import { enhance } from "$app/forms";
    import {chats_store} from "$lib/chat";
    import { onMount } from 'svelte';
    const eliza = new ElizaBot();
    let chats = []
    let chat = [{ user: 'Eliza', message: eliza.getInitial() }];

    
    
    onMount(() => {
        /*Check if has more then 2 characters*/
        if($chats_store.length > 2){
            chats = JSON.parse($chats_store);
        }
        
    });
    function save_chat(){
        chats = [...chats, chat];
        $chats_store = JSON.stringify(chats);
        reset_chat()
    }
    function lodeChat(i){
        chat = chats[i]
    }
    function reset_chat(){
        eliza.reset();
        chat = [{ user: 'Eliza', message: eliza.getInitial() }];
    }
    function delete_save(i){
        chats.splice(i,1)
        chats = chats
    }
    async function write(msg) {
        chat.push({user:'User',message:msg})
        chat=chat
        
        var element = document.getElementById("visible");
        element.style.display = "flex"; 
        await new Promise((r) => setTimeout(r, 1000 + Math.random() * 1000));
        element.style.display = "none";
        chat.push({user:'Eliza',message:eliza.transform(msg)})
        chat=chat
        
    }
       
</script>

<main>
    <section>
        {#each chat as msg}
            <article class={msg.user}>
                <p >{msg.user}: {msg.message}</p>
            </article>
        {/each}
        <article id="visible">
            <span class="circle"></span>
            <span class="circle"></span>
            <span class="circle"></span>
        </article>
    </section>
    <form method="post" 
    use:enhance={({ formElement, formData, action, cancel }) => {
        cancel(); //don't post anything to server
        const text = formData.get("text"); // what does "text" refer to?
        write(text);
        formElement.reset()
      }}>
        <input type="text" id="text" name="text" required placeholder="test" > <button type="reset" on:click={reset_chat}>reset</button>
    </form>
    
</main>
<aside>
    <button style="background-color: aqua;" on:click={save_chat}>save curent chat!</button>
    <div class="save_holder">
    {#each chats as _chat,i}
        <div class="save_actions">
        <p >Name: "{_chat[1].message}"</p>
        <p>Chat length: {_chat.length}</p>
        <button on:click={()=>lodeChat(i)}>load</button>
        <button on:click={()=>delete_save(i)}>X</button>
        </div>
    {/each}
   </div>
</aside>
<style>
    main {
        width: 60vw;
        height:70vh;
        justify-self: center;
        padding: 10px;
        background-color: bisque;
    }
    * {
        color: blueviolet;
    }
    aside{
        width: 20vw;
        top:10vh;
        display:flex;
        flex-direction: column;
        justify-self: left;
        align-self: center;
        background-color: beige;
        position: fixed;
        
    }
    .save_actions{
        margin:2px;
        border-width: 1px;
        border-color: black;
    }
    .save_holder{
        display:grid;
        
    }
    .save_holder button{
        background-color: aquamarine;
        border-radius: 10px;
        padding-right: 5px;
        padding-left: 5px;
    }
    section {
        height: 90%;
        overflow-y:scroll;
    }
    
    article, input {
        width: 90%;
        margin: 10px;
        padding: 10px;
        border-radius: 10px;
        background-color: rgba(0, 0, 0, 0.2);;
        color:black;
        
    }
    #visible{
        width: 100px;
        height: 60px;
        display:none;
        justify-content: center;
        align-items: center;
    }
    .circle {
        display: inherit;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background-color: aqua;
        animation-name: typing;
        animation-duration: 1000ms;
        animation-timing-function: ease;
        animation-iteration-count: infinite;
    }
    .User {
        background-color: rgba(0, 0, 0, 0.4);;
        margin-left: 8.915855%;
    }
    .User p {
        text-align: end;
    }
    @keyframes typing {
        0%{ transform: scale(1); }
        25%{transform: scale(1);}
        50% { transform: scale(1.4); }
        100% { transform: scale(1); }
    }
    .circle:nth-child(1){
        animation-delay: 0ms;
    }
    .circle:nth-child(2){
        animation-delay: 333ms;
    }
    .circle:nth-child(3){
        animation-delay: 666ms;
    }
</style>