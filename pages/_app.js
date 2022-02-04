import React from 'react';
import { configureAxios } from '../service';

import { wrapper } from '../redux/store';
import '../styles/globals.css';

configureAxios();

const MyApp = ({ Component, pageProps }) => <Component {...pageProps} />;

export default wrapper.withRedux(MyApp);
