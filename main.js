import "./style.css";



(function () {
  "use strict";

  const detailsForm = document.querySelector("#destinations-details-form");

  detailsForm.addEventListener("submit", handleFormSubmit);

  function handleFormSubmit(e) {
    e.preventDefault();

    const destName = e.target.elements["name"].value;
    const destLocation = e.target.elements["location"].value;
    const destPhoto = e.target.elements["photo"].value;
    const destDesc = e.target.elements["description"].value;

    for (let i = 0; i < detailsForm.length; i++) {
      detailsForm.elements[i].value = "";
    }

    const destCard = createDestinationCard(
      destName,
      destLocation,
      destPhoto,
      destDesc
    );

    const wishListContainer = document.getElementById("destination-container");

    if (wishListContainer.children.length === 0) {
      document.getElementById("title").innerText = "My Wish List";
    }

    document.querySelector("#destination-container").appendChild(destCard);
  }

  function createDestinationCard(name, location, photoURL, description) {
    const card = document.createElement("div");
    card.className = "card";

    const img = document.createElement("img");
    img.alt = name;

    const defaultPhotoUrl = "images/signpost.jpg";

    if (photoURL.length === 0) {
      img.src = defaultPhotoUrl;
    } else {
      img.src = photoURL;
    }

    card.prepend(img);

    const cardBody = document.createElement("div");
    cardBody.className = "card-body";

    const cardTitle = document.createElement("h3");
    cardTitle.innerText = name;
    cardBody.appendChild(cardTitle);

    const cardSubtitle = document.createElement("h4");
    cardSubtitle.innerText = location;
    cardBody.appendChild(cardSubtitle);

    if (description.length !== 0) {
      const cardText = document.createElement("p");
      cardText.className = "card-text";
      cardText.innerText = description;

      cardBody.appendChild(cardText);
    }

    const cardDeleteBtn = document.createElement("button");
    cardDeleteBtn.innerText = "Remove";
    cardBody.appendChild(cardDeleteBtn);

    cardDeleteBtn.addEventListener("click", removeDestination);

    card.append(cardBody);

    return card;
  }

  function removeDestination(e) {
    const card = e.target.parentElement.parentElement;
    card.remove();
  }
})();
