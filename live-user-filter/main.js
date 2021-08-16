const result = document.querySelector("#result");
const filter = document.querySelector("#filter");
const listItems = [];

getData();
filter.addEventListener("input", (e) => {
	filterUsers(e.target.value);
});
async function getData() {
	const res = await fetch("https://randomuser.me/api?results=50");

	const { results } = await res.json();

	result.innerHTML = "";
	//! Clear result
	//? data.results --> gets the results(the array) from the api object // or destructure it above

	// * Looping through the result

	results.forEach((user) => {
		const li = document.createElement("li");
		listItems.push(li);
		li.innerHTML = `<img src = "${user.picture.large}" alt ="${user.name.first}">
    <div class="user-info">
    <h4>${user.name.first} ${user.name.last}</h4>
		<p>${user.location.city}, ${user.location.country}</p>
    </div>
    `;
		result.appendChild(li);
	});
}

function filterUsers(search) {
	listItems.forEach((input) => {
		if (input.innerText.toLowerCase().includes(search.toLowerCase())) {
			input.classList.remove("hide");
		} else {
			input.classList.add("hide");
		}
	});
}
