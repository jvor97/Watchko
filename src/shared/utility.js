export const validateValue = (rule, value) => {
  let isValid = true;
  if (rule.require && isValid) {
    value.trim() !== "" ? (isValid = true) : (isValid = false);
  }
  if (rule.minLength && isValid) {
    value.length >= rule.minLength ? (isValid = true) : (isValid = false);
  }
  if (rule.number && isValid) {
    const patt = /[0-9]/g;
    patt.test(value) ? (isValid = true) : (isValid = false);
  }
  if (rule.specChar && isValid) {
    const patt = /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
    patt.test(value) ? (isValid = true) : (isValid = false);
  }
  return isValid;
};


export const formChangeHandler = (event, id, state) => {
  const updatedForm = { ...state.form };
  const updatedFormEl = { ...updatedForm[id] };

  updatedFormEl.value = event.target.value;
  updatedFormEl.valid = validateValue(
    updatedFormEl.validation,
    updatedFormEl.value
  );
  updatedFormEl.touched = true;

  let validForm = true;
  for (let formElement in updatedForm) {
    // if (updatedForm[formElement].valid && validForm) {
    //   validForm = true;
    // }
    //nefunguje preco ?
    validForm = updatedForm[formElement].valid && validForm;
  }

  updatedForm[id] = updatedFormEl;
  let newState = {
    updatedForm: updatedForm,
    valid: validForm
  };
  return newState;
};
