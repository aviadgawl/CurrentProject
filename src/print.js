console.log("print.js hes just been loaded");

function printMe(){
    console.log("print me!");
}

function printYou(){
    console.log("print you!");
}

module.exports = {
    printMe: printMe ,
    printYou: printYou 
}