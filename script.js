const form = document.querySelector("#form");
const btn = document.getElementById("buttonHeader");
const fields = document.querySelectorAll(".fields");

btn.addEventListener("click", scrollButtonClick);

function scrollButtonClick() {
	form.scrollIntoView(true, { behavior: "smooth" });
}

form.addEventListener("submit", async (e) => {
	e.preventDefault();
	const formData = new FormData(form);
	formData.append("type", 1);

	let response = await fetch("http://localhost:9999/feedback", {
		method: "POST",
		body: formData,
	});

	if (response.status === 200) {
		alert("Ок");
	}
});
