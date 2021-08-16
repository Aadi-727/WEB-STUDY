const header = document.getElementById("header");
const title = document.getElementById("title");
const excerpt = document.getElementById("excerpt");
const profileImg = document.getElementById("profile");
const name = document.getElementById("name");
const date = document.getElementById("date");

const animated_bgs = document.querySelectorAll(".animated-bg");
const animated_bg_texts = document.querySelectorAll(".animated-bg-text");

setTimeout(getData, 2500);

function getData() {
	header.innerHTML = `
  <img
  src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80"
  alt="Laptop Image"
/>
`;

	title.innerHTML = `
Lorem ipsum dolor sit amet.
`;

	excerpt.innerHTML = `Lorem ipsum, dolor sit amet consecteturadipisicing elit. Totam optio
ad explicabo magni repellat omnis
`;

	profileImg.innerHTML = `<img
  src="https://randomuser.me/api/portraits/women/55.jpg"
  alt="profile pic"
/>`;
	name.innerHTML = "Emmy";
	date.innerHTML = "Aug 16, 2021";
	animated_bgs.forEach((bg) => bg.classList.remove("animated-bg"));
	animated_bg_texts.forEach((bg) => bg.classList.remove("animated-bg-text"));
}
