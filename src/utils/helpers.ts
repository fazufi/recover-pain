export const areObjectValuesFilled = (obj: any) => {
  return Object.values(obj).every((v) => v !== null && v !== '');
};
