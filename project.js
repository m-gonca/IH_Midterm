const url1  = ("https://jsonplaceholder.typicode.com/posts")
const url2  = ("https://jsonplaceholder.typicode.com/posts/?_limit=3")
const SingleProject = ("https://jsonplaceholder.typicode.com/posts/1")
const url4  = ("https://jsonplaceholder.typicode.com/posts/?_limit=1")

const url3 = ("https://jsonplaceholder.typicode.com/posts/4_limit=3")


function getRecentProjects () {
	fetch(url2)
		.then((response) => response.json())
		.then((res) => {
			let recent = "";
			res.forEach((articulo) => {
				recent += `
				<article class="box-section">
					<img src="images/projects2/${articulo.id}.png" alt="simplify">
					<div class="width">
						<h3 class="gray">${articulo.title}</h3>
						<h5>${articulo.body}</h5>
						<a href="project-page.html" class="button-learn blue">Learn More</a>
					</div>
				</article>
				`;
		});
		document.querySelector(".projects").innerHTML = recent;
	});

};


function getMain () {
	fetch(url4)
		.then((response) => response.json())
		.then((res) => {
			let recent = "";
			res.forEach((articulo) => {
				recent += `
				<h1>${articulo.title}</h1>
				<div class="article">
					<div class="horizontal">
						<h3 class="light-grey">${articulo.title}</h3>
						<div class="date">
							<h4>Completed on</h4>
							<h4 class="light-grey">22/22/22</h4>
						</div>
					</div>
					<div class="box-project">
						<div class="background"></div>
						<p class="grey">${articulo.body}</p>
					</div>
				</div>
				`;
		});
		document.querySelector(".projects2").innerHTML = recent;
	});
};

getRecentProjects();

getMain();