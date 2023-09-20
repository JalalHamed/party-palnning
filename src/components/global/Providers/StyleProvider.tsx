import { CacheProvider } from '@emotion/react';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import { FC, PropsWithChildren, useEffect, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import {
  basePalette,
  breakpoints,
  createEmotionCache,
  darkPalette,
  lightPalette,
  shadows,
} from 'styles';
import typography from 'styles/theme/typography';

const StyleProvider: FC<PropsWithChildren> = ({ children }) => {
  const themeMode = 'dark'; // TODO: read from state
  const { i18n } = useTranslation();

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
