/*holdingBox = document.getElementById("playerButtonHolder");
holdingBox.children;
var clrbtn = holdingBox.children;
var color = [rgb(135, 0, 22), rgb(2, 112, 0 ), rgb(0, 62, 133), rgb(128, 130, 0), rgb(135, 88, 0), rgb(119, 0, 125)];

		for(let i = 0; i < 7; i++) {

      if(clrbtn == document.getElementById('button')
      {
				clrbtn[i].setAttribute('background-color', color[i]);
			}
		}


    holdingBox = document.getElementById("playerButtonHolder:hover");
    holdingBox.children;
    var clrbtn = holdingBox.children;
    var color = [rgb(255, 0, 42), rgb(22, 240, 97 ), rgb(0, 62, 133), rgb(8, 122, 252), rgb(241, 160, 9), rgb(226, 8, 237)];

    		for(let i = 0; i < 7; i++) {

          if(clrbtn == document.getElementById('button')
          {
    				clrbtn[i].setAttribute('background-color', color[i]);
    			}
    		}
*/

function highlight(group) {

  var hcolor = ['rgb(255, 0, 0)', 'rgb(0, 255, 0 )', 'rgb(0, 0, 255)', 'rgb(125, 125, 0)', 'rgb(125, 0, 125)', 'rgb(0, 125, 125)'];

  document.getElementById("gruppe"+group).setAttribute('style', 'background-color:' + hcolor[group]);
}


function nohighlight(group) {
 document.getElementById("gruppe"+group).setAttribute('style', '');
}
