export const PHONE_REGEX =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
export const EMAIL_REGEX = /^[A-Za-z0-9_!#$%&'*+=?`{|}~^.-]+@[A-Za-z0-9.-]+$/gm;
export const WHITE_SPACE_REGEX = /^\S{3,}$/;
export const REPLACE_NUM_REGEX = /\{\{\s*num\s*\}\}/gi;
export const REPLACE_MIN_NUM_REGEX = /\{\{\s*min\s*\}\}/gi;
export const REPLACE_MAX_NUM_REGEX = /\{\{\s*max\s*\}\}/gi;
