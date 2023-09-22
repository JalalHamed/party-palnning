const typography = {
  fontFamily:
    localStorage.getItem('i18nextLng') === 'fa' ? 'Iranyekan' : 'Montserrat',
  button: {
    textTransform: undefined,
  },
  h3: {
    fontSize: '18px',
    fontWeight: '700',
    lineHeight: '24px',
    letterSpacing: '0.5px',
  },
  body1: {
    fontSize: '16px',
    fontWeight: '700',
    lineHeight: '20px',
    letterSpacing: '0',
  },
  body2: {
    fontSize: '14px',
    fontWeight: '700',
    lineHeight: '20px',
    letterSpacing: '0',
  },
  subtitle1: {
    fontSize: '14px',
    fontWeight: '400',
    lineHeight: '20px',
    letterSpacing: '0',
  },
  subtitle2: {
    fontSize: '12px',
    fontWeight: '400',
    lineHeight: '16px',
    letterSpacing: '0',
  },
};

export default typography;
