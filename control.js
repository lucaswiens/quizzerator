function start() {
  questions = [];
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
                } else {
                    alert("Dieser Browser unterstützt kein HTML5.");
                }
            } else {
                alert("Bitte eine CSV-Datei hochladen.");
            }
            console.log(questions);
        }
