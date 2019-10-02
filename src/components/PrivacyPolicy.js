"use struct";

import React, { useState, useCallback } from 'react';

import './PrivacyPolicy.css';

const PrivacyPolicyText = `
１．基本的考え方
揺れる※※画像ジェネレータ（以下「当サイト」という。）において、提供するサービス（当サイトによる情報提供、各種意見の受付等）の円滑な運営に必要な範囲で、当サイトを利用される皆様の情報を収集しています。収集した情報は利用目的の範囲内で適切に取り扱います。

２．収集する情報の範囲
（１） 当サイトでは、インターネットドメイン名、ＩＰアドレス、当サイトの閲覧等の情報（以下「利用者の情報」という。）を自動的に収集します。なお、クッキー（サーバ側で利用者を識別するために、サーバから利用者のブラウザに送信され、利用者のコンピュータに蓄積される情報）は、ユーザビリティーの向上を目的とする内容に限定するものであり、個人情報は一切含みません。また、利用者のブラウザの設定によりクッキーの機能を無効にすることもできます。

３．利用目的
（１） ２．（１）において収集した情報は、当サイトが提供するサービスを円滑に運営するための参考として利用します。

（２） 当サイトでは、サイトの利用状況を把握するために[Google Analytics](https://developers.google.com/analytics/?hl=ja)を利用しています。Google Analytics は、クッキーを利用して利用者の情報を収集します。[Google Analytics 利用規約は、こちら](https://www.google.com/analytics/terms/jp.html)をご覧ください。

４．利用及び提供の制限
当サイトでは、法令に基づく開示請求があった場合、不正アクセス、脅迫等の違法行為があった場合その他特別の理由のある場合を除き、収集した情報を「３．利用目的」以外の目的のために自ら利用し、又は第三者に提供いたしません。ただし、統計的に処理された当サイトのアクセス情報、利用者属性等の情報については公表することがあります。

５．安全確保の措置
（１） 当サイトは、収集した情報の漏えい、滅失又はき損の防止その他収集した情報の適切な管理のために必要な措置を講じます。 

（２） Google Analyticsにより収集された利用者の情報は、Google社のプライバシーポリシーに基づいて管理されます。[Google社のプライバシーポリシーは、こちら](http://www.google.com/intl/ja/policies/privacy/)をご覧下さい。なお、Google Analyticsのサービス利用による損害については、[@sharkpp](https://twitter.com/sharkpp)は責任を負わないものとします。

６．自己に関する情報の開示
当サイトにおいては、氏名、生年月日その他一般的に個人を識別できる情報を収集しておりません。

７．適用範囲
本方針は、当サイトにおいてのみ適用され、当サイトにリンクされています外部サイトについては適用されません。

８．その他
@sharkpp では、本方針を改定することがあります。改定する場合は、当サイトでお知らせします。

当サイトの利用に関する落ちお合わせは、[@sharkpp](https://twitter.com/sharkpp) までお願いします。
`;

//const MatchLink = /\[.+?\]\(.+?\)/;
const MatchSection = /^[０-９]/;

export default function ({}) {

  return (
    <div className="privacy-policy">
{
  PrivacyPolicyText.split("\n").map((line, lineIndex) => {
    return (MatchSection.test(line)
        ? <h2 key={`L${lineIndex}`}>{line}</h2>
        : <p key={`L${lineIndex}`}>{line}</p>
      );
  })
}
    </div>
  );
}
