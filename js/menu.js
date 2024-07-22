let menu_checkbox = document.querySelector(".navigation__toggle");

let navigation = document.querySelector(".navigation__list").children;

[...navigation].forEach(element => {
	element.children[0].addEventListener('click', function () {
		menu_checkbox.checked = false
	})
});