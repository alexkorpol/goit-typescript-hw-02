/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum weekDay {
  MONDAY,
  TUESDAY,
  WEDNESDAY,
  THURSDAY,
  FRIDAY,
  SATURDAY,
  SUNDAY,
}

function isWeek(weekDay): boolean {
  let weekend: boolean = false;
  if (weekDay === 'SATURDAY' || weekDay === 'SUNDAY') {
    weekend = true
  }
  return weekend
}

isWeek(weekDay.MONDAY)

isWeek(weekDay.SUNDAY)

