$(document).ready(function () {
    console.log("Inside ready");
    $.ajax({
        type: "GET",
        url: "target-file.csv",
        dataType: "text",
        success: function (data) {
            processData(data);
        }
    });
});

function processData(csv) {
    let csvLines = csv.split(/\r\n|\n/);
    let headers = csvLines[0].split(',');
    let elGenerate = '<table><tr><th>Person</th><th>Title</th><th>Superpower</th></tr>';

    for (let i = 1; i < csvLines.length; i++) {
        var data = csvLines[i].split(',');
        if (data.length == headers.length) {
            let strOut = "<!-- Table Generate -->\n";
            strOut = strOut.concat(`<tr><td>${data[0]}</td><td>${data[1]}</td><td>${data[2]}</td></tr>`);
            elGenerate = elGenerate.concat(strOut);
        }
    }
    
    let elout = document.getElementById("output");
    elout.insertAdjacentHTML('beforeend', elGenerate);
} 