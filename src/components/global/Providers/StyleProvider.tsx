import { CacheProvider } from '@emotion/react';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import { FC, PropsWithChildren, useEffect, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import {
  basePalette,
  breakpoints,
  createEmotionCache,
  darkPalette,
  lightPalette,
  shadows,
  typography,
} from 'styles';
import 'styles/globals.css';

const StyleProvider: FC<PropsWithChildren> = ({ children }) => {
  const { i18n } = useTranslation();
  const themeMode = useSelector((state: any) => state.theme.theme);

  const theme = useMemo(
    () =>
      createTheme({
        palette:
          themeMode === 'dark'
            ? { ...basePalette, ...darkPalette }
            : { ...basePalette, ...lightPalette },
        shadows,
        typography,
        breakpoints,
      }),
    [themeMode]
  );

  useEffect(() => {
    document.body.dir = i18n.dir();
  }, [i18n]);

  return (
    <CacheProvider value={createEmotionCache(i18n.dir())}>
      <ThemeProvider theme={{ ...theme, direction: i18n.dir() }}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </CacheProvider>
  );
};

export default StyleProvider;
