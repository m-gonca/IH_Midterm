// document.getElementById("getText").addEventListener("click", getText);
// document.getElementById("getJson").addEventListener("click", getJson);
// document.getElementById("getApi").addEventListener("click", getApi);
// document.getElementById("addPost").addEventListener("click", addPost);




// function getText () {
// 	fetch("text.txt")
// 		.then((response) => response.text())
// 		.then((theInfoFromText) => {
// 		document.getElementById("output").innerHTML = theInfoFromText
// 		})
// 		.catch((error) => console.log(error));
// }

// function getJson () {
// 	fetch("users.json")
// 		.then((response) => response.json())
// 		.then((res) => {
// 			let userData = "";
// 			res.forEach((user) => {
// 				userData += `
// 				<ul>
// 					<li>${user.name}</li>
// 					<li>${user.id}</li>
// 					<li>${user.email}</li>
// 				</ul>
// 				`;
// 			});
// 			document.getElementById("output").innerHTML = userData;
// 		})

// }


const url1  = ("https://jsonplaceholder.typicode.com/posts")
const url2  = ("https://jsonplaceholder.typicode.com/posts/?_limit=3")
const SingleProject = ("https://jsonplaceholder.typicode.com/posts/1")


function getApi () {
	fetch(url2)
		.then((response) => response.json())
		.then((res) => {
			let apiData = "";
			res.forEach((articulo) => {
				apiData += `
				<article class="box-section">
					<img src="images/projects1/${articulo.id}.png" alt="simplify">
					<div class="width">
						<h3 class="gray">${articulo.title}</h3>
						<h5>${articulo.body}</h5>
						<a href="project-page.html" class="button-learn blue">Learn More</a>
					</div>
				</article>
				`;
		});
		document.querySelector(".projects").innerHTML = apiData;
	});
};

getApi();

