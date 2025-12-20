// @ts-check

/**
 * Calculates the sum of the two input arrays.
 *
 * @param {number[]} array1
 * @param {number[]} array2
 * @returns {number} sum of the two arrays
 */
export function twoSum(array1, array2) {
  let num1 = String(array1).replaceAll(",", "");  // remove any commas
  let num2 = String(array2).replaceAll(",", "");

  return (Number(num1) + Number(num2) );
}

/**
 * Checks whether a number is a palindrome.
 *
 * @param {number} value
 * @returns {boolean} whether the number is a palindrome or not
 */
export function luckyNumber(value) {
  //throw new Error('Remove this line and implement the function');
  let number = String(value);
  let i = 0, len = (number.length - 1);
  //console.log(number);
  while (i < (len - i)) {
    //console.log(number[i] + " " + number[len - i]);
    if (number[i] != number[len - i] )
      return false;
    i++;
  }
  return true;
}

/**
 * Determines the error message that should be shown to the user
 * for the given input value.
 *
 * @param {string|null|undefined} input
 * @returns {string} error message
 */
export function errorMessage(input) {
  if (input == undefined || input == null || input == "")
    return 'Required field';
  
  let num = Number(input);
  if (num == 0 || isNaN(num))
    return 'Must be a number besides 0';
  
  return '';
}
