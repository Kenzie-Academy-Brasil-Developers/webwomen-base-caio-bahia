function RenderCards() {
  const ulCardPlacement = document.querySelector(".main-card-placement");

  jobsData.forEach(object => {
    const cardCreate = CreateCard(object);

    ulCardPlacement.appendChild(cardCreate);
  });
}

function CreateCard(object) {
  const liCard = document.createElement("li");
  liCard.classList.add("card");
  liCard.id = object.id;

  const h2Title = document.createElement("h2");
  h2Title.classList.add("card-title");
  h2Title.innerText = object.title;

  const divSmallsContainer = document.createElement("div");
  divSmallsContainer.classList.add("card-smalls-container");

  const smallEnterprise = document.createElement("small");
  smallEnterprise.classList.add("card-enterprise");
  smallEnterprise.innerText = object.enterprise;

  const smallLocal = document.createElement("small");
  smallLocal.classList.add("card-location");
  smallLocal.innerText = object.location;

  const h3JobDescription = document.createElement("h3");
  h3JobDescription.classList.add("card-job-description");
  h3JobDescription.innerText = object.descrition;

  const divCardFooter = document.createElement("div");
  divCardFooter.classList.add("card-footer");

  const divCardModalityContainer = document.createElement("div");
  divCardModalityContainer.classList.add("card-modality-container");

  const pJobModality01 = document.createElement("p");
  pJobModality01.classList.add("card-job-modality");
  pJobModality01.innerText = object.modalities[0];

  const pJobModality02 = document.createElement("p");
  pJobModality02.classList.add("card-job-modality");
  pJobModality02.innerText = object.modalities[1];

  const buttonJobApply = document.createElement("button");
  buttonJobApply.classList.add("card-apply-button");
  buttonJobApply.innerText = "Candidatar";
  buttonJobApply.id = object.id;

  buttonJobApply.addEventListener("click", () => {
    addToAside(object);
    console.log(object);
  });
  divCardModalityContainer.append(pJobModality01, pJobModality02);
  divCardFooter.append(divCardModalityContainer, buttonJobApply);
  divSmallsContainer.append(smallEnterprise, smallLocal);
  liCard.append(h2Title, divSmallsContainer, h3JobDescription, divCardFooter);

  return liCard;
}

RenderCards();
