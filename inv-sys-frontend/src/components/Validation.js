import React from "react";

const Validation = () => {
  const validateEmail = (inputValue, errorObject, errName) => {
    let pattern = new RegExp(
      /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
    );

    if (inputValue) {
      if (!pattern.test(inputValue)) {
        errorObject[errName] = "email is not Valid";
      } else {
        errorObject[errName] = null;
      }
    }
  };

  //validate simple usernames/firstnames/lastnames
  const validateStringWithoutSpace = (
    inputValue,
    errorObject,
    errName,
    labelName
  ) => {
    let pattern = new RegExp(/^[a-zA-Z]{3,}$/);

    if (inputValue) {
      if (!pattern.test(inputValue)) {
        errorObject[errName] = labelName + " is not Valid";
      } else {
        errorObject[errName] = null;
      }
    }
  };

  return {
    validateStringWithoutSpace,
    validateEmail,
  };
};

export default Validation;
