var BERJ0009 = {
	init: function () 
	{
		let newDiv = document.createElement("div");
		newDiv.className = "box";
		newDiv.textContent = "berj0009";
		document.getElementById("boxes").appendChild(newDiv);


		newDiv.addEventListener("mouseover", function () {
			newDiv.classList.toggle("highlight");

		});

		newDiv.addEventListener("mouseout", function () {
			newDiv.classList.toggle("highlight");
			newDiv.removeAttribute("style");

		});

		newDiv.addEventListener("click", function () {
			newDiv.style.borderColor = "blue";
			newDiv.style.backgroundColor = "yellow";

		});

	}


};
