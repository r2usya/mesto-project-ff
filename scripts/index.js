const placesList= document.querySelector('.places__list');

function addCard(element, deleteCard) {
  const cardTemplate = document.querySelector('#card-template').content;
  const cardElement = cardTemplate.cloneNode(true);
  const title = cardElement.querySelector('.card__title');
  const img = cardElement.querySelector('.card__image');

    title.textContent = element.name;
    img.src = element.link;
    img.alt = element.name;

    const deleteButton = cardElement.querySelector('.card__delete-button');
    deleteButton.addEventListener('click', deleteCard);
    return cardElement;
}

function deleteCard(event) {
  const card = event.target.closest('.card');
  card.remove();
}

initialCards.forEach((element) => {
  placesList.append(addCard(element, deleteCard));
});
// @todo: Темплейт карточки

// @todo: DOM узлы

// @todo: Функция создания карточки

// @todo: Функция удаления карточки

// @todo: Вывести карточки на страницу

