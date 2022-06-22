const button = document.querySelector("button");
const container = document.getElementById("container");
const input = document.querySelector("input");
const form = document.querySelector("form");

button.addEventListener("click", (eo) => {
  eo.preventDefault();
  const task = ` <div class="task">
  <span class="icon-star iqon"></span>
  <p lang="ar" class="text">  ${input.value} </p>
  <div>
    <span class="icon-trash iqon"></span>
    <span class="icon-angry2 iqon"></span>
  </div>
</div>`;
  container.innerHTML += task;
});

container.addEventListener("click", (eo) => {
  switch (eo.target.className) {
    case "icon-trash iqon":
      eo.target.parentElement.parentElement.remove();
      break;
    case "icon-angry2 iqon":
      eo.target.classList.add("na");
      const hart = `<span class="icon-heart iqon"></span> `;

      eo.target.parentElement.parentElement
        .getElementsByClassName("text")[0]
        .classList.add("finash");

      eo.target.parentElement.innerHTML += hart;
      break;
    case "icon-heart iqon":
      eo.target.parentElement.parentElement
        .getElementsByClassName("text")[0]
        .classList.remove("finash");

      eo.target.classList.add("na");
      const gap = `<span class="icon-angry2 iqon"></span> `;
      eo.target.parentElement.innerHTML += gap;
    case "icon-star iqon":
      eo.target.classList.add("org");
      container.prepend(eo.target.parentElement);
      break;
    case "icon-star iqon org":
      eo.target.classList.remove("org");
      break;
    default:
      break;
  }
});
