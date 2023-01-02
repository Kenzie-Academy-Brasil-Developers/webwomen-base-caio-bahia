function addToAside(card) {
  const UlAsideCardPlacemente = document.querySelector(
    ".aside-job-selected-list"
  );
  const CreateFav = favoriteCreate(card);
  UlAsideCardPlacemente.appendChild(CreateFav);
  console.log(card);
}
function checklist() {
  // Vai checkar se a lista tem algum elemento , se sim display none
  // no notification, se não, display flex
}

function favoriteCreate(card) {
  const LiCard = document.createElement("li");
  LiCard.classList.add("job-select-card");

  const divAsideInformation = document.createElement("div");
  divAsideInformation.classList.add("aside-information-container");

  const h2AsideTitle = document.createElement("h2");
  h2AsideTitle.classList.add("aside-information-title");
  h2AsideTitle.innerText = card.title;

  const divSmallsContainer = document.createElement("div");
  divSmallsContainer.classList.add("aside-information-smalls-container");

  const smallEnterprise = document.createElement("small");
  smallEnterprise.classList.add("aside-card-enterprise");
  smallEnterprise.innerText = card.enterprise;

  const smallLocal = document.createElement("small");
  smallLocal.classList.add("aside-card-local");
  smallLocal.innerText = card.location;

  const divDelete = document.createElement("div");
  divDelete.classList.add("aside-delete-button");
  divDelete.dataset.id = card.id;

  divDelete.addEventListener("click", () => {
    console.log("ola");
  });

  const imgDelete = document.createElement("span");
  imgDelete.innerHTML =
    '<img src="/assets/img/delete.png" alt="delete button">';

  divDelete.append(imgDelete);
  divSmallsContainer.append(smallEnterprise, smallLocal);
  divAsideInformation.append(h2AsideTitle, divSmallsContainer);

  LiCard.append(divAsideInformation, divDelete);

  return LiCard;
}
