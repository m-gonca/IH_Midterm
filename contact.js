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
	.then((dataDeFormulario) => console.log(dataDeFormulario))
	.then(() => {
		let message = "";
		message += `
		<div id="message2">
			<h6>Yeh I got ya fren!</h6>
		</div>
		`;
		document.getElementById("message3").innerHTML = message;
		console.log(document.getElementById("message3"));
	})
	.catch(() => {
		let message = "";
		message += `
		<div id="message2">
			<h6>Oops, I did it again, I played with your posts, got lost in the fetch</h6>
		</div>
		`;
		document.getElementById("message3").innerHTML = message;
	});

	document.getElementById("name").value = "";
	document.getElementById("email").value = "";
	document.getElementById("phone").value = "";
	document.getElementById("message").value = "";
}