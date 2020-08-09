import { createEventTemplate } from "./view/newEvent.js"
import { createDayInfoTemplate } from "./view/dayInfo.js"
import { createFilterTemplate } from "./view/filter.js"
import { createSiteMenuTemplate } from "./view/menu.js"
import { createSortTemplate } from "./view/sort.js"
import { createTripDaysTemplate } from "./view/day.js"
import { createTripDaysItemTemplate } from "./view/daysItem.js"
import { createTripEventItemTemplate } from "./view/eventItem.js"
import { createTripEventsListTemplate } from "./view/eventsList.js"
import { createEventDestinationTemplate } from "./view/trip-destination.js";
import { createEventOffersTemplate } from "./view/offers.js";
import { createTripInfoTemplate } from "./view/info.js"
import { generateEvent } from "./mock/event.js";

const ROUTE_POINT_COUNT = 10;
const events = new Array(ROUTE_POINT_COUNT).fill().map(generateEvent);
console.log(events)

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

render(siteTripMainElement, createTripInfoTemplate(events), POSITION.AFTER_BEGIN);
render(siteMenuElement, createSiteMenuTemplate(), POSITION.AFTER_END);
render(siteFilterElement, createFilterTemplate(), POSITION.AFTER_END);
render(siteSortElement, createSortTemplate(), POSITION.AFTER_END);
render(siteSortElement, createEventTemplate(events[0]), POSITION.AFTER_END);
render(siteTripEventsElement, createTripDaysTemplate());
const tripDaysItemElement = siteTripEventsElement.querySelector(`.trip-days`);
const eventDetailsElement = eventEditElement.querySelector(`.event__details`);
render(tripDaysItemElement, createTripDaysItemTemplate());
render(tripDaysItemElement, createDayInfoTemplate());
render(tripDaysItemElement, createTripEventsListTemplate());
render(eventDetailsElement, createEventDestinationTemplate(), POSITION.BEFORE_END);

let currentDay = events[1].date[0].getDate();
const lastDay = events[events.length - 1].date[0].getDate();
let currentData = events[1].date[0];
let countDay = 1;
let index = 1;

do {
    render(tripDaysItemElement, createDayInfoTemplateTemplate(currentData, countDay), POSITION.BEFORE_END);

    const tripListElement = siteTripEventsElement.querySelector(`.trip-events__list`);
    const tripEventsListElement = tripListElement[tripListElement.length - 1];

    for (let i = index; i < events.length; i++) {

        if (events[i].date[0].getDate() === currentDay) {
            render(tripEventsListElement, createEventOffersTemplate(events[i]), POSITION.BEFORE_END);
            for (let y = 0; y < Math.min(events[i].offers.length, 3); y++) {
            render(tripListElement, createTripEventItemTemplate(events[i].offers[y]), POSITION.BEFORE_END);
            }
        } else {
            currentDay = events[i].date[0].getDate();
            currentData = events[i].date[0];
            countDay++;
            index = i;
            break;
        }
    }
} while (currentDay !== lastDay);