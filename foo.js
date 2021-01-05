const getFullName = (name, surname) => {
  return name + " " + surname;
};

const getSurname = (name, surname) => {
  return surname;
};

exports.getFullName = getFullName;
exports.getSurname = getSurname;
