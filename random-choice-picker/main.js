// Selectors
const tagsEl = document.querySelector("#tags");
const textarea = document.querySelector("textarea");

textarea.focus();

textarea.addEventListener("keyup", (e) => {
	createTags(e.target.value);

	if (e.key === "Enter") {
		setTimeout(() => {
			e.target.value = "";
		}, 10);

		randomSelect();
	}
});

const createTags = (input) => {
	const tags = input
		.split(",")
		.filter((tag) => tag.trim() !== " ")
		.map((tag) => tag.trim()); // --> trim gets rid of whitespace
	tagsEl.innerHTML = "";
	tags.forEach((tag) => {
		const tagEl = document.createElement("span");
		tagEl.classList.add("tag");
		tagEl.innerText = tag;
		tagsEl.appendChild(tagEl);
		if (input === "") {
			tagsEl.innerHTML = "";
		}
	});
};

const randomSelect = () => {
	console.log("123");
};
