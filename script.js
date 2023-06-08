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
    messageArea.innerHTML += '<p class="user-message"><strong>ユーザー:</strong> ' + userMessage + '</p>';
    userInput.value = '';

    // 1秒の遅延を追加してから返答を生成
    setTimeout(function() {
      // ランダムな返答を生成
      var randomResponse = generateRandomResponse();
      var responseElement = document.createElement('p');
      responseElement.className = 'bot-message';
      //messageArea.appendChild(responseElement);
      
      messageArea.appendChild('<p class="bot-message"><strong>エセChat GPT:</strong> ' + responseElement + '</p>');
    

      
      
      // 1文字ずつ出力するアニメーション
      animateMessage(randomResponse, responseElement);
      
      // メッセージエリアを最下部までスクロール
      messageArea.scrollTop = messageArea.scrollHeight;
    }, 1000);
  }
}

// 1文字ずつ出力するアニメーション
function animateMessage(message, element) {
  var index = 0;
  var timer = setInterval(function() {
    element.innerHTML += message.charAt(index);
    index++;
    if (index === message.length) {
      clearInterval(timer);
    }
  }, 50);
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
