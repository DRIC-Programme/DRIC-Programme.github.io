function changeClass(ID,oclass,otherclass){
	if (document.getElementById(ID).className===oclass){
		document.getElementById(ID).className=otherclass
	}
	else{
	document.getElementById(ID).className=oclass
	}
}

function highlight(x){
	x.style.opacity="1.0"
}

function normal(x){
	x.style.opacity="0.2"
}
