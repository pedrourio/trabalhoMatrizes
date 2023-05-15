var matriz = new Array();
var matriz2 = new Array();
var matrizR = new Array();
var espaco = "  ";

matriz.push([parseInt(Math.random() * 5), parseInt(Math.random() * 5), parseInt(Math.random() * 5)]);
matriz.push([parseInt(Math.random() * 5), parseInt(Math.random() * 5), parseInt(Math.random() * 5)]);
matriz.push([parseInt(Math.random() * 5), parseInt(Math.random() * 5), parseInt(Math.random() * 5)]);
document.write("<br>");
matriz2.push([parseInt(Math.random() * 5), parseInt(Math.random() * 5), parseInt(Math.random() * 5)]);
matriz2.push([parseInt(Math.random() * 5), parseInt(Math.random() * 5), parseInt(Math.random() * 5)]);
matriz2.push([parseInt(Math.random() * 5), parseInt(Math.random() * 5), parseInt(Math.random() * 5)]);

document.write("<div class='container'>");
document.write("<div id='matriz'>");
for (var i = 0; i < 3; i++) {

    document.write("<br>");
    for (var j = 0; j < matriz[i].length; j++) {
        document.write(matriz[i][j]+espaco);
    }
    document.write("<br>")
}
document.write("</div>");
//----------------------------
document.write("<div id='sinal'>");
document.write("x")
document.write("</div/>");
//---------------------------

document.write("<div id='matriz2'>");

for (var i = 0; i < 3; i++) {
    document.write("<br>");
    for (var j = 0; j < matriz2[i].length; j++) {
        document.write(matriz2[i][j]+espaco);
    }
    document.write("<br>")
}
document.write("</div>");

//-------------------------
document.write("<div id='sinal'>");
document.write("=")
document.write("</div/>");
//-------------------------

document.write("<div id='matriz3'>");
for (let i = 0; i < 3; i++) {
    matrizR.push([]);
    for (let j = 0; j < 3; j++) {
        matrizR[i][j] = 0
        for (let k = 0; k < 3; k++) {
           matrizR[i][j] += parseInt(matriz[i][k] * matriz2[k][j]);
        }
    }
}

for (let m = 0; m < 3; m++) {
    document.write("<br>");
    for (let n = 0; n < 3; n++) {
        document.write(matrizR[m][n]+espaco);
    }
    document.write("<br>")
}

document.write("</div>");
document.write("</div>");
//-------------------



console.table(matrizR);