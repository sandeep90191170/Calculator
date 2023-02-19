	let string = "";
	let buttons = document.querySelectorAll('.button');

	Array.from(buttons).forEach((button)=>{
		button.addEventListener('click', (e)=>{
			if(e.target.innerHTML == '='){
				string = eval(string);
				document.querySelector('input').value = string;
			}
			else if(e.target.innerHTML == "C"){
				string = "";
				document.querySelector('input').value = string;
			}
			
			else{
			console.log(e.target)
			string = string + e.target.innerHTML;
			document.querySelector('input').value = string;
			}
		})
	})
		

	document.addEventListener("keydown", (e) => {
			console.log(e.key);
			if (e.key == "+"||
				e.key == "-"||
 				e.key == "*"||
				e.key == "/"||
				e.key == "%"||
				e.key == "("||
				e.key == ")"||
				e.key <= 9)
				string += e.key;
			

})



	/*let screenValue = "";
	for (item of buttons){
	item.addEventListener("click", (e) => {
	buttonText = e.target.innerText;
	ScreenValue += buttonText;
	ScreenValue = ScreenValue;
	});
}
*/
