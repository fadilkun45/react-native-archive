export function customFormatNumber(number) {
    return number.toLocaleString('en-US').replace(/,/g, '.');
  }
  