import 'configs/i18n';
import { FC } from 'react';
import RouteProvider from './RouteProvider';
import StoreProvider from './StoreProvider';
import StyleProvider from './StyleProvider';

const Providers: FC = () => (
  <StoreProvider>
    <StyleProvider>
      <RouteProvider />
    </StyleProvider>
  </StoreProvider>
);

export default Providers;
