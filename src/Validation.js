export const isValidEmail = (email) => {
  const emailRegex =
    /^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  return emailRegex.test(email);
};

export const isValidPassword = (password) => {
  const passwordregex =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
  return passwordregex.test(password);
};

export const isValidPhone = (phone) => {
  const phoneregex = /^\d{10}$/;
  return phoneregex.test(phone);
};

export const isValidName = (name) => {
  const nameregex = /^[a-zA-Z ]{2,30}$/;
  return nameregex.test(name);
};
