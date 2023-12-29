var namesOfPeople = [];
    
function submit() {                                             //função submit() para enviar o nome
    var GuestName = document.getElementById("name1").value;
	namesOfPeople.push(GuestName);

	console.log(GuestName);
        
    console.log(namesOfPeople);
    var lenghtOfName = namesOfPeople.length;
    console.log(lenghtOfName);
	document.getElementById("displayName").innerHTML=namesOfPeople.toString();
	
}

function sorting() {                                        //função sorting() para organizar em ordem alfabética, no caso
	namesOfPeople.sort();
	var i= namesOfPeople.join("<br>");
    console.log(namesOfPeople);		
	document.getElementById("sorted").innerHTML=i.toString();
}

function show() {                                           //função show() para exibir os nomes
	var i= namesOfPeople.join("<br>");
	console.log(namesOfPeople);
	document.getElementById("p1").innerHTML=i.toString();
	document.getElementById("sortButton").style.display="block";
}

function searching() {                                          //função searching() para procurar o nome digitado
	var s= document.getElementById("s1").value;
	var found=0;
	var j;
	for(j=0; j<namesOfPeople.length; j++) {
			if(s==namesOfPeople[j]) {
				found=found+1;
			}	
		}
	document.getElementById("p2").innerHTML="Nome encontrado "+found+" vez(es)";
	console.log("Nome encontrado "+found+" vez(es)");
}
