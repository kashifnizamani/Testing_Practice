export function analyzeArray(arr) {
  if (arr.length == 0) {
    return "EMPTY";
  }

  let object = {};
  let sum = 0;
  let elements = 0;
  let min = arr[0];
  let max = arr[0];

  while (elements < arr.length) {
    sum += arr[elements];
    elements++;

    if (arr[elements] > max) max = arr[elements];
    if (arr[elements] < min) min = arr[elements];
  }

  object.average = sum / elements;
  object.min = min;
  object.max = max;
  object.length = elements;

  return object;
}
