export const PASSWORD_MIN_LENGTH = 4;
export const PASSWORD_REGEX =
  // /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#?!@$%^&*-]).{4,}$/;
  /^(?=\d{4,}).{4,}$/;
export const PASSWORD_REGEX_ERROR =
  // "A passwords must contain at least one UPPERCASE, lowercase, number and special characters #?!@$%^&*-";
  "숫자로된 4글자 이상 비밀번호를 넣어주세요!";
