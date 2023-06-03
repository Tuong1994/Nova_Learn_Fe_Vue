import { FieldValue, IRule } from "../interface/base";
import { EMAIL_REGEX, PHONE_REGEX, WHITE_SPACE_REGEX } from "../constant/regex";

const useValidate = (rules: IRule[], values: FieldValue) => {
  const key = Object.keys(values)[0];

  const value = String(values[key]);

  let error: FieldValue = {};

  for (let i = 0; i < rules.length; i++) {
    const rule = rules[i];

    if (rule) {
      // Validate required
      if ((rule.required && !value.trim()) || Number(value) === 0) {
        error = { [key]: rule.message };
        break;
      }
      // Validate min length
      else if (value.trim() && rule.min && value.length < Number(rule.min)) {
        error = { [key]: rule.message };
        break;
      }
      //  Validate max length
      else if (value.trim() && rule.max && value.length > Number(rule.max)) {
        error = { [key]: rule.message };
        break;
      }
      //  Validate phone
      else if (value.trim() && rule.phone && !PHONE_REGEX.test(value)) {
        error = { [key]: rule.message };
        break;
      }
      //  Validate email
      else if (value.trim() && rule.email && !EMAIL_REGEX.test(value)) {
        error = { [key]: rule.message };
        break;
      }
      // Validate white space
      else if (
        value.trim() &&
        rule.whiteSpace &&
        !WHITE_SPACE_REGEX.test(value)
      ) {
        error = { [key]: rule.message };
        break;
      }
    }
  }

  return error;
};

export default useValidate;
