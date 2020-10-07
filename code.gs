function doPost(e) {
  // 以下2行はgoogleフォームで作成したフォーム名に合わせてください。
  var name = e.namedValues['タイトル'][0];
  var body = e.namedValues['本文'][0];
  
  var url = 'https://api.line.me/v2/bot/message/push';// このURLは編集しないで大丈夫です。
  var channelToken = 'LINE developerページで取得したトークンをここにコピーしてください。';

　// こちらのtextの右側の文字で送信されますので必要に応じて書き換えてください。
  var messages = [{
    'type': 'text',
    'text': 'googleフォームの回答がありました。\n[タイトル]'+name+'\n[本文]'+body
  }];

  return UrlFetchApp.fetch(url, {
    'headers': {
      'Content-Type': 'application/json; charset=UTF-8',
      'Authorization': 'Bearer ' + channelToken,
    },
    'method': 'post',
    'payload': JSON.stringify({
      'to': 'LINEでメッセージを送信したい人のIDをコピーしてください。',
      'messages': messages,
    }),
  });
}
