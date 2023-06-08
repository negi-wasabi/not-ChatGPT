// メッセージ送信ボタンのクリックイベント
document.getElementById('send-button').addEventListener('click', function() {
  sendMessage();
});

// ユーザーの入力欄でEnterキーが押された場合の処理
document.getElementById('user-input').addEventListener('keyup', function(event) {
  if (event.keyCode === 13) {
    sendMessage();
  }
});

// メッセージの送信と返答の生成
function sendMessage() {
  var userInput = document.getElementById('user-input');
  var messageArea = document.getElementById('message-area');
  var userMessage = userInput.value.trim();

  if (userMessage !== '') {
    messageArea.innerHTML += '<p><strong>ユーザー:</strong> ' + userMessage + '</p>';
    userInput.value = '';

    // ランダムな返答を生成
    var randomResponse = generateRandomResponse();
    messageArea.innerHTML += '<p><strong>エセChat GPT:</strong> ' + randomResponse + '</p>';

    // メッセージエリアを最下部までスクロール
    messageArea.scrollTop = messageArea.scrollHeight;
  }
}

// ランダムな返答の生成
function generateRandomResponse() {
  var responses = [
    "こんにちは！",
    "どうもどうも！",
    "お元気ですか？",
    "それは興味深いですね。",
    "ごめんなさい、よくわかりません。",
    "それについては何も言えません。",
    "なるほど。",
    "面白いですね！",
    "それはちょっと難しい質問ですね。",
    "すみません、お答えできません。",
    "何か他の質問はありますか？"
  ];

  var randomIndex = Math.floor(Math.random() * responses.length);
  return responses[randomIndex];
}
