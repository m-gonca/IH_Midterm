const SingleProject = ("https://jsonplaceholder.typicode.com/posts/1")

function addPost (preventForm) {
	preventForm.preventDefault();

	let title =  document.getElementById("title").value;
	let body = document.getElementById("body").value;

	fetch("https://jsonplaceholder.typicode.com/posts", {
		method: "POST"
		headers: {
			Accept: "text/plain, application/json, */*", "Content-type": "application/json", 
		},
		body: JSON.stringify({title: title, body: body}),
		})
	.then((response) => response.json())
	.catch((dataDeFormulario) => console.log(dataDeFormulario));
}