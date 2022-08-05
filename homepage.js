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

