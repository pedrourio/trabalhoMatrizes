var matriz = new Array();
var matriz2 = new Array();
var matrizR = new Array();
var espaco = "  ";

matriz.push([parseInt(Math.random()*5),parseInt(Math.random()*5),parseInt(Math.random()*5)]);
matriz.push([parseInt(Math.random()*5),parseInt(Math.random()*5),parseInt(Math.random()*5)]);
matriz.push([parseInt(Math.random()*5),parseInt(Math.random()*5),parseInt(Math.random()*5)]);
document.write("<br>");
matriz2.push([parseInt(Math.random()*5),parseInt(Math.random()*5),parseInt(Math.random()*5)]);
matriz2.push([parseInt(Math.random()*5),parseInt(Math.random()*5),parseInt(Math.random()*5)]);
matriz2.push([parseInt(Math.random()*5),parseInt(Math.random()*5),parseInt(Math.random()*5)]);

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
document.write("+")
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
document.write("</div>");
//-------------------------

document.write("<div id='matriz3'>");
for (let i = 0; i < 3; i++) {
    matrizR[i]= new Array();   
    for (let j = 0; j < matriz[i].length; j++) {
        matrizR[i][j] = (matriz[i][j] + matriz2[i][j]);
    }
}

for (let i = 0; i < 3; i++) {
    document.write("<br>");

    for (let j = 0; j < matrizR[i].length; j++) {

        document.write(matrizR[i][j]+espaco);
    }
    document.write("<br>")
}

document.write("</div>");
document.write("</div>");
//----------------------------





