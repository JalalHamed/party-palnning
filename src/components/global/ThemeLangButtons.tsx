import { Stack, Typography } from '@mui/material';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { changeTheme } from 'store/themeSlice';
import { Icon } from '.';

const ThemeLangButtons: FC = () => {
  const { i18n } = useTranslation();
  const dispatch = useDispatch();
  const themeMode = useSelector((state: any) => state.theme.theme);
  const currentLang = localStorage.getItem('i18nextLng');

  return (
    <>
      <Stack
        bgcolor='input.background'
        borderRadius='50px'
        width='24px'
        height='24px'
        alignItems='center'
        justifyContent='center'
        sx={{ cursor: 'pointer' }}
        onClick={() => {
          i18n.changeLanguage(currentLang === 'fa' ? 'en' : 'fa');
          // No choice, since I have to change directions and the fonts as well
          // eslint-disable-next-line no-restricted-globals
          location.reload();
        }}
      >
        <Typography variant='subtitle2' color='texture.main'>
          {currentLang === 'fa' ? 'En' : 'Fa'}
        </Typography>
      </Stack>
      {themeMode === 'light' ? (
        <Icon id='Dark' onClick={() => dispatch(changeTheme('dark'))} />
      ) : (
        <Icon id='Light' onClick={() => dispatch(changeTheme('light'))} />
      )}
    </>
  );
};

export default ThemeLangButtons;
