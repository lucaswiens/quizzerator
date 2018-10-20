
function start() {
  questions = [];
  ngroups = 0;
  nquestions = 0;
}




function Upload() {
            var fileUpload = document.getElementById("fileUpload");
            var regex = /^([a-zA-Z0-9\s_\\.\-:])+(.csv|.txt)$/;
            if (regex.test(fileUpload.value.toLowerCase())) {
                if (typeof (FileReader) != "undefined") {
                    var reader = new FileReader();
                    reader.onload = function (e) {
                        var rows = e.target.result.split("\r\n");
                        for (var i = 0; i < rows.length; i++) {
                            questions[i] =[];
                            var cells = rows[i].split(";");
                            if (cells.length > 1) {
                                for (var j = 0; j < cells.length; j++) {
                                  questions[i][j] = cells[j];
                                }
                            }
                        }
                        window.localStorage.setItem("questions", JSON.stringify(questions));

                        alert("Upload war erfolgreich.");
                    }
                    reader.readAsText(fileUpload.files[0]);
                } else {
                    alert("Dieser Browser unterstützt kein HTML5.");
                }
            } else {
                alert("Bitte eine CSV-Datei hochladen.");
            }
        }

function gameStart() {
  var ngrp = parseInt(document.getElementById("ngroups").value);
  var nquest = parseInt(document.getElementById("nquestions").value);

  if (1 <= ngrp && ngrp <= 6
      &&  1 <= nquest && nquest <= 100
      && questions != []) {
        ngroups = ngrp;
        nquestions = nquest;

    console.log(JSON.parse(window.localStorage.getItem("questions")));
    window.location.href = "quiz.html";

    window.localStorage.setItem("ngroups", JSON.stringify(ngroups));
    window.localStorage.setItem("nquestions", JSON.stringify(nquestions));


  }
  else {
    var error = 'Es sind folgende Fehler aufgetreten: \n';

    if (Number.isInteger(ngrp) == false ) {
        error = error + "Es wurde keine Spielerzahl angegeben.\n";
    }
    else {
      if (ngrp < 1 || ngrp > 6) {
        error = error + 'Die Spielerzahl muss zwischen 1 und 6 liegen.\n';
      }
    }
    if (Number.isInteger(nquest) == false ) {
        error = error + "Es wurde keine Fragenzahl angegeben.\n";
    }
    else {
      if (nquest < 1 || nquest > 100) {
        error = error + 'Die Anzahl der Fragen muss zwischen 1 und 100 liegen.\n';
      }
    }
    if (questions.length == 0) {
      error = error + 'Es wurde kein Fragenkatalog hochgeladen.\n'
    }

      alert(error);
   }
 }

///////////////////////////////////////////////////////////////////////////////
// CONTROL JS
///////////////////////////////////////////////////////////////////////////////


function startQuiz() {
  questions = JSON.parse(window.localStorage.getItem("questions"));
  console.log(questions);
  nextQuestion();

  createPlayers();
}


function nextQuestion() {

  document.getElementById("question").innerHTML=questions[0][0];
}



// OPTION HANDLING

// This function creates the player buttons depending on user specified options
function createPlayers() {
	var ngroups = JSON.parse(window.localStorage.getItem("ngroups"));
	const maxNoButtonsRow = 3;

	noButtonLines = Math.ceil(ngroups / maxNoButtonsRow);

	holdingBox = document.getElementById("playerButtonHolder");
	for(let i = 0; i < ngroups; i++) {
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


// POINT SYSTEM

function updatePoints(playerNumber, isCorrect) {
	playerButtons = getPlayerbuttons();

	points = toFloat(playerButtons[playerNumber].innerHTML);
	if (isCorrect) {
		playerButtons[playerNumber].innerHTML = points + 500;
	} else{
		playerButtons[playerNumber].innerHTML = points - 250;
	}
}


// GENERAL STUFF

function getPlayerbuttons() {
	playerButtons = [];
	buttonHolder = document.getElementById("playerButtonHolder").children;
	for(let i = 0; i < buttonHolder.length; i++) {
		if (buttonHolder[i].type == 'button') {
			playerButtons.push(buttonHolder[i])
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

/*App Menu Button*/
function activateMenu(x) {
	x.classList.toggle("active");
	if (document.getElementById("appmenubutton").value == 1) {
		document.getElementById("appmenu").style.height = "0";
		document.getElementById("appmenubutton").value = 0;
	} else {
		document.getElementById("appmenu").style.height = "auto";		
		document.getElementById("appmenubutton").value = 1;
	}	
}