//comentário linha

/*
comentário bloco
*/

function pegarValor(valor){
    console.log(valor.value);
}

function carregar(){
    alert("página carregada")
}
function clicar(){
    document.getElementById("obrigado").innerHTML = "<p>Obrigado por clicar</p>";
}

function redirecionar(){

    //janela diferente
    window.open("http://www.globo.com");

    //mesma janela
    //window.location.href("http://www.globo.com")
}

function passeMouse(elemento){
    elemento.innerHTML = ("Obrigado por passar o mouse")
    //document.getElementById("passeMouse").innerHTML = "Obrigado por passar o mouse";
}

function retireMouse(elemento){
    elemento.innerHTML = ("Passe o mouse aqui")
    //document.getElementById("passeMouse").innerHTML = "Passe o mouse aqui";
}

/*
function somar(n1, n2){
    return n1 + n2;
}

alert(somar(5,10))
*/
/*
var valor1 = prompt("digite um valor")
var valor2 = prompt("digite outro valor")

function multiplicar(){
    return valor1 * valor2
}

console.log(multiplicar())
*/
/*
var contador;
for(contador=0; contador <=5; contador ++){
    alert(contador);
}
*/

/*
var data = new Date();

console.log(data.getMonth()+1);
console.log(data.getDate());
console.log(data.getFullYear());
console.log(data.getHours());
console.log(data.getMinutes());
*/

/*
var idade = prompt("Qual a sua idade?");

if (idade >= 18){
    alert("Você é maior de idade");
} else {
    alert("Você é menor de idade")
}

var contador = 0;

while(contador <= 5){
    console.log(contador);
    contador++;
}*/

/*
var nome = "André";
var sobrenome = "Reis";
var idade = 38;
var ano = 2021
var frase = "André é um cara feio";

alert("Meu nome é " + nome + " e tenho " + idade + " anos.");

console.log(idade);
console.log(nome.toUpperCase());
console.log(sobrenome.toLocaleLowerCase());
console.log(frase.replace("feio","lindo"));
console.log(ano - idade);
*/
/*
var lista = ["banana","uva","melancia"]
lista.push("maça", "melão")
lista.pop();
alert(lista.length);
console.log(lista.reverse());
console.log(lista.toString());
console.log(lista.toString()[0]);

console.log(lista.join(" - "));

var pessoas = [{nome: "André", sobrenome:"Reis"}, {nome: "Patrícia", sobrenome:"Freire"} ]
console.log("Seu nome é " + pessoas[1].nome + " e seu sobrenome é " + pessoas[1].sobrenome)
*/