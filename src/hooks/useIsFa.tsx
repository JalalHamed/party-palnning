export const useIsFa: () => boolean = () => {
  return localStorage.getItem('i18nextLng') === 'fa';
};
