export const isValidDate = (input: string): boolean => {
  const datePattern = /^(0[1-9]|[12][0-9]|3[01])-(0[1-9]|1[0-2])-\d{4}$/;
  return datePattern.test(input);
};

export const isValidTime = (input: string): boolean => {
  const timePattern = /^([01]\d|2[0-3]):([0-5]\d)$/;
  return timePattern.test(input);
};
