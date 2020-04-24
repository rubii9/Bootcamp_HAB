const { eachDayOfInterval, differenceInBusinessDays } = require("date-fns");

const range = eachDayOfInterval({
  start: new Date(2014, 0, 10),
  end: new Date(2014, 2, 11),
});

for (const fecha of range) {
  console.log(fecha);
}

const workingDaysToNewYear = differenceInBusinessDays(
  new Date(2021, 0, 1),
  new Date()
);

console.log(
  `nos quedan ${workingDaysToNewYear} días de trabajo hasta fin de año`
);
