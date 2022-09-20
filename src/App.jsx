import React from 'react';

import Header from './components/Header';
import Layout from './components/Layots/Layout.tsx';
import ThisDay from './components/ThisDay';
import DetailInfo from './components/DetailInformation';
import Days from './components/Days';
import { ThemeProvider } from './providers/ThemeProvider';
import { Provider } from 'react-redux';
import { store } from './redux/store';

import '../src/scss/app.scss';

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <Layout>
          <div className="container">
            <Header />
            <div className="content">
              <div className="content-top">
                <ThisDay />
                <DetailInfo />
              </div>
              <div className="content-bottom">
                <Days />
              </div>
            </div>
          </div>
        </Layout>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
