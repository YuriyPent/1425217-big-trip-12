import { getShortTime, getFullTime, durationTime } from "./../utils.js";

export const createTripEventItemTemplate = (event, offer) => {

  const { type, destination, date, cost } = event;

  return (
    `<li class="trip-events__item">
    <div class="event">
      <div class="event__type">
        <img class="event__type-icon" width="42" height="42" src="img/icons/${type}.png" alt="Event ${type} icon">
      </div>
      <h3 class="event__title">${type} to ${destination}</h3>
      <div class="event__schedule">
        <p class="event__time">
          <time class="event__start-time" datetime="${getFullTime(date[0])}">${getShortTime(date[0])}</time>
          &mdash;
          <time class="event__end-time" datetime="${getFullTime(date[1])}">${getShortTime(date[1])}</time>
        </p>
        <p class="event__duration">${durationTime(date[1], date[0])}</p>
      </div>
      <p class="event__price">
        &euro;&nbsp;<span class="event__price-value">${cost}</span>
      </p>
      <h4 class="visually-hidden">Offers:</h4>
      <ul class="event__selected-offers">
        <li class="event__offer">
          <span class="event__offer-title">${offer.title}</span>
          &plus;
          &euro;&nbsp;<span class="event__offer-price">${offer.cost}</span>
        </li>
      </ul>
      <button class="event__rollup-btn" type="button">
        <span class="visually-hidden">Open event</span>
      </button>
    </div>
  </li>`);
};