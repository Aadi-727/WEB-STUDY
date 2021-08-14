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
		.filter((tag) => tag.trim() !== "")
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
	const times = 30;

	const interval = setInterval(() => {
		const randomTag = pickRandomTag();

		//* Highlight
		highlightTag(randomTag);

		//! Unhighlight
		setTimeout(() => {
			unhighlightTag(randomTag);
		}, 100);
	}, 100);
};

//? Random function

function pickRandomTag() {
	const tags = document.querySelector(".tag");
	return tags[Math.floor(Math.random() * tags.length)];
}

function highlightTag(tag) {
	tag.classList.add("highlight");
}
function unhighlightTag(tag) {
	tag.classList.remove("highlight");
}
