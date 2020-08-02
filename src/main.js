import { createAddFirstEventTemplate } from "./view/newEvent"
import { createDayInfoTemplate } from "./view/dayInfo"
import { createFilterTemplate } from "./view/filter"
import { createSiteMenuTemplate } from "./view/menu"
import { createSortTemplate } from "./view/sort"
import { createTripDaysTemplate } from "./view/day"
import { createTripDaysItemTemplate } from "./view/daysItem"
import { createTripEventItemTemplate } from "./view/eventItem"
import { createTripEventsListTemplate } from "./view/eventsList"
import { createTripInfoTemplate } from "./view/info"


const ROUTE_POINT_COUNT = 3;
const POSITION = {
    BEFORE_BEGIN: `beforebegin`,
    AFTER_BEGIN: `afterbegin`,
    BEFORE_END: `beforeend`,
    AFTER_END: `afterend`,
};

const render = (container, template, position = POSITION.BEFORE_END) => {
    container.insertAdjacentHTML(position, template);
};

const siteTripMainElement = document.querySelector(`.trip-main`);
const siteMenuElement = siteTripMainElement.querySelector(`.trip-main__trip-controls > h2`);
const siteFilterElement = siteTripMainElement.querySelector(`.trip-main__trip-controls > h2 + h2`);
const siteTripEventsElement = document.querySelector(`.trip-events`);
const siteSortElement = siteTripEventsElement.querySelector(`h2`);

render(siteTripMainElement, createTripInfoTemplate(), POSITION.AFTER_BEGIN);
render(siteMenuElement, createSiteMenuTemplate(), POSITION.AFTER_END);
render(siteFilterElement, createFilterTemplate(), POSITION.AFTER_END);
render(siteSortElement, createSortTemplate(), POSITION.AFTER_END);
render(siteSortElement, createAddFirstEventTemplate(), POSITION.AFTER_END);
render(siteTripEventsElement, createTripDaysTemplate());
const tripDaysItemElement = siteTripEventsElement.querySelector(`.trip-days`);
render(tripDaysItemElement, createTripDaysItemTemplate());
render(tripDaysItemElement, createDayInfoTemplate());
render(tripDaysItemElement, createTripEventsListTemplate());

const tripListElement = siteTripEventsElement.querySelector(`.trip-events__list`);
for (let i = 0; i < ROUTE_POINT_COUNT; i++) {
    render(tripListElement, createTripEventItemTemplate());
}