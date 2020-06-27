export function checkAge(userAge) {
  if (userAge < 0 || userAge > 151) {
    return true;
  } else {
    return false;
  }
}
