import './style.css';
import MyPrint from './print.js'
import $ from 'jquery'

function component(){

    var element = document.createElement("pre");
    var btn = document.createElement("button");

    element.innerHTML = "Hello WebPack after change";
    btn.innerText = "print me";
    
    btn.onclick = MyPrint.printMe;
    document.body.appendChild(btn);

    return element;
}

document.body.appendChild(component());

// if(module.hot){
//     module.hot.accept('./print.js' , function(){
//         console.log('Accepting the updated printMe module!');
//         document.body.removeChild(element);
//         element = component();
//         document.body.appendChild(element);
//     })
// }
