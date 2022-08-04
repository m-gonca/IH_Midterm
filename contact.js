const url = ("https://jsonplaceholder.typicode.com/comments")

document.querySelector("#monicas-form").addEventListener("submit", addPost);



function addPost (preventForm) {
	preventForm.preventDefault();

	let name =  document.getElementById("name").value;
	let email = document.getElementById("email").value;
	let phone = document.getElementById("phone").value;
	let message = document.getElementById("message").value;

	fetch(url, {
		method: "POST",
		headers: {
			Accept: "text/plain, application/json, */*", 
			"Content-type": "application/json", 
		},
		body: JSON.stringify({name: name, email: email, phone: phone, message: message}),
		})
	.then((response) => response.json())
	.then((dataDeFormulario) => console.log(dataDeFormulario));
}