"use struct";

import React from 'react';
import ReactDOM from 'react-dom';

import * as serviceWorker from './serviceWorker';

import 'bootstrap/dist/css/bootstrap.min.css';
//import '@forevolve/bootstrap-dark/dist/css/bootstrap-dark.min.css';
//import './dark-theme.css';
import './index.css';

import App from './App';
import NetworkModel from './models/Network';

import('./dark-theme.css')
  .then(() => { })
  .catch(err => { });

const models = {
  network: new NetworkModel(),
};

ReactDOM.render(<App models={models} />, document.getElementById('root'));

// アプリをオフラインで動作させてより速くロードしたい場合は、以下で unregister() を
// register() に変更できます。これにはいくつかの落とし穴があります。
// サービスワーカーの詳細: https://bit.ly/CRA-PWA

serviceWorker.register();

// 要求スペック
//   config#onUpdate(registration);
//   config#onSuccess(registration);
// serviceWorker.register(config);
