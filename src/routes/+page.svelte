<!--Delar upp sidan i två delar-->


<main>
	<div>
  	  <h1 class="" > Namn efternamn </h1>
	  <h2>Här har jag samlat min uppgifter jag gjort i samband med webbutveckling i årskurs 2 på Maja Beskowgymnasiet!</h2>
	  <h3>Inspirerade citat för min webbutvecklingsresa:</h3>
	  <!--Under denna kommer vi lägga till fler element-->
	  <p id="inspo">
		"The only way to learn a new programming language is by writing programs in it." - <strong>Dennis Ritchie</strong>, creator of the C programming language.
	</p>

	<p id="inspo2">
		"Every great developer you know got there by solving problems they were unqualified to solve until they actually did it." - <span>Patrick McKenzie, software engineer and entrepreneur</span>.
	</p>
	</div>
	  <!--Här kommer vi lägga till en bild senare i uppgiften 1.2.4 Extra styling-->  
  
</main>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#00cba9" fill-opacity="1" d="M0,96L26.7,90.7C53.3,85,107,75,160,80C213.3,85,267,107,320,144C373.3,181,427,235,480,261.3C533.3,288,587,288,640,282.7C693.3,277,747,267,800,229.3C853.3,192,907,128,960,122.7C1013.3,117,1067,171,1120,197.3C1173.3,224,1227,224,1280,197.3C1333.3,171,1387,117,1413,90.7L1440,64L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z"></path></svg>


<style>
	main{
	  /*Styling för att dela upp sidan i två delar. */
	  /*Vi kommer gå igenom detta i detalj senare*/
	  margin: auto;
	  width: 80vw;
	  height: 70vh;
	  display: grid;
	  grid-template-columns: repeat(2,50%);
	  overflow: hidden;
	  
	}
	div{
	  /*Styling för att centrera texten i behållaren*/
	  margin: auto;
	}
	
	h1{
		color:grey;
		background-color: lightblue;
	}
	h2{
		color: rgb(255, 165, 0);
	}
	h3{
		color: #3cb371;
		font-family: sans-serif;
		font-weight: bold;
	}
	.item{
    	width: 100px;
    	height: 100px;
	}
	.name{
		font-family:'Gill Sans';
		font-size: 50px;
	}
	#number {
		border: 1px solid black;
		padding: 10px;
	}
	
	#inspo{
    font-family: courier;
    font-size: 160%;
	}
	#inspo2{
		background-color: palevioletred;
	}
	span{
    color: green;
	}
	h1, h2, h3, p {
  	display: block;
  	/*Ger utrymme mellan element*/
  	margin: 10px;
	}
    
</style>
  