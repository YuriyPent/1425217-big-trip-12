import { getDateTime, getFormatDate } from "./../utils.js";

export const createDayInfoTemplate = (data, count) => {

  return (
    `<div class="day__info">
    <span class="day__counter">${count}</span>
    <time class="day__date"${getDateTime(data)}">${getFormatDate(data)}</time>
  </div>`);
};