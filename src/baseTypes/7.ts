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

function isWeek(day: weekDay): boolean {
  return day === weekDay.SATURDAY || day === weekDay.SUNDAY; 
}

isWeek(weekDay.MONDAY)

isWeek(weekDay.SUNDAY)

