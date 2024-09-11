const PASSWORD_INPUTS = document.querySelectorAll('input[type="password"]');
const PASSWORD_INPUT_1 = PASSWORD_INPUTS[0];
const PASSWORD_INPUT_2 = PASSWORD_INPUTS[1];

function setInvalid() {
  PASSWORD_INPUTS.forEach((i) => {
    i.ariaInvalid = true;
  });
}

function setValid() {
  PASSWORD_INPUTS.forEach((i) => {
    i.ariaInvalid = false;
  });
}

PASSWORD_INPUT_1.addEventListener("blur", (e) => {
  const inputValue = e.target.value;
  if (!PASSWORD_INPUT_2.value && !inputValue) {
    setValid();
  } else if (PASSWORD_INPUT_2.value !== inputValue) {
    setInvalid();
  } else {
    setValid();
  }
});

PASSWORD_INPUT_2.addEventListener("blur", (e) => {
  const inputValue = e.target.value;
  if (PASSWORD_INPUT_1.value !== inputValue) {
    setInvalid();
  } else {
    setValid();
  }
});
