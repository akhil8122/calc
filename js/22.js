function add(n){
	a = document.getElementById("ans");
	a.innerHTML = a.innerHTML + n;
}

function op(o){
	tempValue = document.getElementById("ans").innerHTML;
	document.getElementById("ans").innerHTML = "";
    tempOp = o;
}
function calc(){
	a = document.getElementById("ans");
	newValue = a.innerHTML;

	if(tempOp=="+"){
	a.innerHTML = parseFloat(tempValue) + parseFloat(newValue)
	}
	else if(tempOp=="-"){ 
	a.innerHTML = parseFloat(tempValue) - parseFloat(newValue)  
	}
	else if(tempOp=="*"){
	a.innerHTML = parseFloat(tempValue) * parseFloat(newValue)
	}
	else if(tempOp=="/"){
	a.innerHTML = parseFloat(tempValue) / parseFloat(newValue)  
	}
	else if(tempOp=="%"){
	a.innerHTML = parseFloat(tempValue) % parseFloat(newValue)  
	}
}

