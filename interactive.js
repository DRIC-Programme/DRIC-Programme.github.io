function changeClass(ID,oclass,otherclass){
	if (document.getElementById(ID).className===oclass){
		document.getElementById(ID).className=otherclass
		document.getElementById(ID).style.opacity="1.0"
		document.getElementBy(ID).style.zIndex=1.0
	}
	else{
	document.getElementById(ID).className=oclass
	document.getElementById(ID).style.opacity="0.0"
	document.getElementById(ID).style.zIndex=-1.0
	}
}

function highlight(x){
	x.style.opacity="1.0"
}

function normal(x){
	x.style.opacity="0.2"
}
