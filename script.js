//your JS code here. If required.
const name = document.getElementById("name");
const age = document.getElementById("age");
const btn = document.getElementById("btn");


const handleForm = (e) => {
	e.preventDefault();
	if(!name.value  || !age.value ){
		alert("inputs cannot be empty.");
	} else{
		alert(name.value+ " "+age.value);
		const promise = new Promise((resolve, reject) => {
			if(age.value > 18){
				setTimeout(() => {
					resolve(
						alert(`Welcome, ${name.value}. You can vote.`)
					);
				}, 4000)
			}else{
				setTimeout(() => {
				reject(
					alert(`Oh sorry ${name.value}. You aren't old enough.`)
				);
				}, 4000)
			}
		})
	}
}


btn.addEventListener("click", (e) => handleForm(e));










