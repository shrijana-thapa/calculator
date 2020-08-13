function insert(num){
    calculator.textview.value =calculator.textview.value+num;
}

//---------Squareroot----------
function squarert(){
    calculator.textview.value = Math.pow(calculator.textview.value,1/2);
}

//---------Cuberoot---------
function cubert(){
    calculator.textview.value = Math.pow(calculator.textview.value,1/3);
}

//---------Factorial---------
function fac(){
    var i, no, fact;
    fact=1;
    no=calculator.textview.value;
    for(i=1; i<=no; i++)  
        {
            fact= fact*i;
        }  
    calculator.textview.value = fact;
}

//---------Power 10---------
function tenpow(){
    calculator.textview.value = Math.pow(10,calculator.textview.value)
}

//---------Logarithmic---------
function fnlog(){
    calculator.textview.value = Math.log(calculator.textview.value) / Math.log(10) ;
}

//---------Trignomerty---------
function fnsin(){
    calculator.textview.value = Math.sin(calculator.textview.value);
}

function fncos(){
    calculator.textview.value = Math.cos(calculator.textview.value);
}

function fntan(){
    calculator.textview.value = Math.tan(calculator.textview.value);
}

//---------Percentage---------
function percentage(){
    calculator.textview.value = (calculator.textview.value/100);
}

//---------Absoulte value---------
function abs(){
    calculator.textview.value = Math.abs(calculator.textview.value);
}

//---------Square of number---------
function square(){
    calculator.textview.value = Math.pow(calculator.textview.value,2);
}

//---------cube of number---------
function cube(){
    calculator.textview.value = Math.pow(calculator.textview.value,3);
}

//---------Exponential---------
function exp(){
    calculator.textview.value = Math.exp(calculator.textview.value);
}

//---------AC: All Clear---------
function ac(){
    calculator.textview.value = "";
}

//---------C: Clear---------
function c(){
    calculator.textview.value = "";
}

//---------Delete last number---------
function backspace(){
    var prevalue = calculator.textview.value;
    calculator.textview.value = prevalue.substr(0,prevalue.length-1);
}

//---------Equals to---------
function equalto(){
    calculator.textview.value = eval(calculator.textview.value);
}