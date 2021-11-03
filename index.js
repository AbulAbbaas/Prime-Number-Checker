const checker = () => {

	const num = document.querySelector(".num-check").value;
	let factors = []
	if(!Number(num)){
		document.querySelector("p").textContent = 
		"Please type in a number!";
	}
	else if(Number(num) === 0 || Number(num) === 1){
		document.querySelector("p").textContent = 
		"Please type in a number greater than 1, prime number starts from 2!";
	}
	else{
	for (let i = 1; i <= num; i++) {
		if (num%i === 0){
			factors.push(i)
		}
	}
	if (factors.length > 2){
		document.querySelector("p").textContent = 
		"This number is not a prime number, because its factors numbers are: " 
		+ factors.join(" , ");
	}else {
		document.querySelector("p").textContent = 
		"This number is a prime number, because its factors are just two: " 
		+ factors.join(" and ");
	}}

}

document.querySelector("button").addEventListener("click", checker);
document.addEventListener("keydown", function(e){
	if(e.key === 'Enter'){
		checker();
	}
});