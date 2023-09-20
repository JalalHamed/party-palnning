import createCache from '@emotion/cache';
import { Direction } from '@mui/material';
import { prefixer } from 'stylis';
import rtlPlugin from 'stylis-plugin-rtl';

const isBrowser = typeof document !== `undefined`;

export default function createEmotionCache(direction: Direction) {
  let insertionPoint: HTMLMetaElement | undefined;

  if (isBrowser) {
    const emotionInsertionPoint = document.querySelector<HTMLMetaElement>(
      'meta[name="emotion-insertion-point"]',
    );
    insertionPoint = emotionInsertionPoint ?? undefined;
  }

  if (direction === 'rtl')
    return createCache({
      key: 'mui-style-rtl',
      stylisPlugins: [prefixer, rtlPlugin],
      insertionPoint,
    });

  return createCache({ key: 'mui-style-ltr', insertionPoint });
}
