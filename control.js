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
                    }
                    reader.readAsText(fileUpload.files[0]);
                    window.localStorage.setItem("questions", JSON.stringify(questions));
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
      &&  1 <= nquest && nquest <= 100) {
        ngroups = ngrp;
        nquestions = nquest;
   // window.location.href = "http://www.google.de";

    window.localStorage.setItem("ngroups", JSON.stringify(ngroups));
    window.localStorage.setItem("nquestions", JSON.stringify(nquestions));

    /*var ngroups = JSON.parse(window.localStorage.getItem("ngroups"));*/
  }
  else {
    var error = 'Es sind folgende Fehler aufgetreten: \n';

    if (Number.isInteger(ngrp) == false
      ||Number.isInteger(nquest) == false ) {
        alert("Bitte geben Sie eine Spielerzahl und eine Fragenzahl an.");
    }
    else {

      if (ngrp < 1 || ngrp > 6) {
        error = error + 'Die Spielerzahl muss zwischen 1 und 6 liegen.\n';
      }

      if (nquest < 1 || nquest > 100) {
        error = error + 'Die Anzahl der Fragen muss zwischen 1 und 100 liegen.\n';
      }
      alert(error);
   }
 }


}

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