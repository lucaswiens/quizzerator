///////////////////////////////////////////////////////////////////////////////
// CONTROL JS 
///////////////////////////////////////////////////////////////////////////////


// OPTION HANDLING

// This function creates the player buttons depending on user specified options
function pb_submitOptions() {
		
		numberButtons = 4;
		maxNoButtonsRow = 3;
		
		noButtonLines = Math.ceil(numberButtons / maxNoButtonsRow);
		
		holdingBox = document.getElementById("playerButtonHolder");
		for(let i = 0; i < numberButtons; i++) {	
			var btn = document.createElement("button");
			btn.setAttribute('type', 'button');
			btn.setAttribute('class', 'gruppe');// + );
			btn.setAttribute('id', 'gruppe' + i.toString());
			btn.setAttribute('onmouseover', 'highlight('+ i.toString()+')')
			btn.setAttribute('onmouseleave', 'nohighlight('+ i.toString()+')')
			btn.innerHTML = i.toString()
			
			holdingBox.appendChild(btn);	
			
			if ((i+1) % maxNoButtonsRow == 0){
				holdingBox.appendChild(document.createElement("br"));
			}
		}

		
}


function pb_updatePoints() {
		holdingBox = document.getElementById("playerButtonHolder");
		
		playerButtons = holdingBox.children;
		for(let i = 0; i < playerButtons.length; i++) {
			if (playerButtons[i].type == 'button') {
				console.log(i)
				console.log(playerButtons[i].type)
				
				playerButtons[i].value = 'test';
				
				console.log(playerButtons[i].value)	
			}
		}
}


// COLOR MANAGEMENT

function highlight(group) {

  var hcolor = ['rgb(255, 0, 0)', 'rgb(0, 255, 0 )', 'rgb(0, 0, 255)', 'rgb(125, 125, 0)', 'rgb(125, 0, 125)', 'rgb(0, 125, 125)'];

  document.getElementById("gruppe"+group).setAttribute('style', 'background-color:' + hcolor[group]);
}


function high(element) {

  var hcolor = ['rgb(255, 0, 0)', 'rgb(0, 255, 0 )', 'rgb(0, 0, 255)', 'rgb(125, 125, 0)', 'rgb(125, 0, 125)', 'rgb(0, 125, 125)'];

  element.setAttribute('style', 'background-color:' + hcolor[group]);
}


function nohighlight(group) {
 document.getElementById("gruppe"+group).setAttribute('style', '');
}