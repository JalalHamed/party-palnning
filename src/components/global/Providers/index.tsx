import 'configs/react-i18n';
import { FC } from 'react';
import RouteProvider from './RouteProvider';
import StyleProvider from './StyleProvider';

const Providers: FC = () => (
  <StyleProvider>
    <RouteProvider />
  </StyleProvider>
);

export default Providers;
