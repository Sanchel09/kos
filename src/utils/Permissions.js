export const checkAdmin = (data) => {
  if (data === "Admin") {
    return true;
  }
  return false;
};

export const checkStudent = (data) => {
  if (data === "Student") {
    return true;
  }
  return false;
};

export const checkInstructor = (data) => {
  if (data === "Instructor") {
    return true;
  }
  return false;
};
