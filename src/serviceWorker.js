"use struct";

// このオプションのコードは、Service Workerを登録するために使用されます。
// register() はデフォルトでは呼び出されません。

// これにより、その後の実稼働時のアクセスでアプリの読み込みが速くなり、
// オフライン機能が提供されます。 ただし、開発者（およびユーザー）は、
// 以前にキャッシュされたリソースがバックグラウンドで更新されるため、
// ページで開いている既存のタブがすべて閉じられた後、ページへの以降の
// アクセスでのみ展開された更新が表示されます。

// このモデルの利点とオプトイン方法の詳細については、
// https://bit.ly/CRA-PWA をご覧ください。

const isLocalhost = Boolean(
  window.location.hostname === 'localhost' ||
    // [::1] は IPv6 localhost アドレスです。
    window.location.hostname === '[::1]' ||
    // 127.0.0.1/8 は IPv4 のローカルホストと見なされます。
    window.location.hostname.match(
      /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
    )
);

export function register(config) {
  if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
    // URLコンストラクターは、SWをサポートするすべてのブラウザーで使用できます。
    const publicUrl = new URL(process.env.PUBLIC_URL, window.location.href);
    if (publicUrl.origin !== window.location.origin) {
      // PUBLIC_URL がページの配信元と異なる発信元にある場合サービスワーカーは機能しません。
      // これは、アセットの提供にCDNが使用されている場合に発生する可能性があります。
      // https://github.com/facebook/create-react-app/issues/2374 を参照してください
      return;
    }

    window.addEventListener('load', () => {
      const swUrl = `${process.env.PUBLIC_URL}/service-worker.js`;

      if (isLocalhost) {
        // これはローカルホストで実行されています。 Service Workerがまだ存在するかどうかを確認しましょう。
        checkValidServiceWorker(swUrl, config);

        // いくつかの追加のログを localhost に追加し、開発者に
        // service worker/PWA ドキュメントを参照させます。
        navigator.serviceWorker.ready.then(() => {
          console.log(
            'This web app is being served cache-first by a service ' +
              'worker. To learn more, visit https://bit.ly/CRA-PWA'
          );
        });
      } else {
        // ローカルホストではありません。サービスワーカーを登録するだけです。
        registerValidSW(swUrl, config);
      }
    });
  }
}

function registerValidSW(swUrl, config) {
  navigator.serviceWorker
    .register(swUrl)
    .then(registration => {
      registration.onupdatefound = () => {
        const installingWorker = registration.installing;
        if (installingWorker == null) {
          return;
        }
        installingWorker.onstatechange = () => {
          if (installingWorker.state === 'installed') {
            if (navigator.serviceWorker.controller) {
              // この時点で更新された事前キャッシュされたコンテンツが取得されましたが、
              // 以前のサービスワーカーは、すべてのクライアントタブが閉じられるまで
              // 古いコンテンツを引き続き提供します。
              console.log(
                'New content is available and will be used when all ' +
                  'tabs for this page are closed. See https://bit.ly/CRA-PWA.'
              );

              // コールバックを実行
              if (config && config.onUpdate) {
                config.onUpdate(registration);
              }
            } else {
              // この時点ですべてが事前にキャッシュされています。
              // "コンテンツはオフラインで使用するためにキャッシュされます。"
              // メッセージを表示するのに最適なタイミングです。
              console.log('Content is cached for offline use.');

              // コールバックを実行
              if (config && config.onSuccess) {
                config.onSuccess(registration);
              }
            }
          }
        };
      };
    })
    .catch(error => {
      console.error('Error during service worker registration:', error);
    });
}

function checkValidServiceWorker(swUrl, config) {
  // ページをリロードできない場合、サービスワーカーが見つかるかどうかを確認します。
  fetch(swUrl)
    .then(response => {
      // Service Worker が存在し、JSファイルを実際に取得していることを確認してください。
      const contentType = response.headers.get('content-type');
      if (
        response.status === 404 ||
        (contentType != null && contentType.indexOf('javascript') === -1)
      ) {
        // サービスワーカーが見つかりません。おそらく別のアプリ。ページをリロード。
        navigator.serviceWorker.ready.then(registration => {
          registration.unregister().then(() => {
            window.location.reload();
          });
        });
      } else {
        // サービスワーカーが見つかりました。通常どおり続行。
        registerValidSW(swUrl, config);
      }
    })
    .catch(() => {
      console.log(
        'No internet connection found. App is running in offline mode.'
      );
    });
}

export function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(registration => {
      registration.unregister();
    });
  }
}
