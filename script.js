
let clickCount = localStorage.getItem('clickCount') || 0;
    const clickBtn = document.getElementById('clickBtn');
    const clickCountDisplay = document.getElementById('clickCount');

    clickCountDisplay.textContent = `${clickCount}`;

    clickBtn.addEventListener('click', () => {
      clickCount++; 
      localStorage.setItem('clickCount', clickCount);
      clickCountDisplay.textContent = `${clickCount}`;
      localStorage.setItem('scoreprice', scoreprice);
    });



    //butt.onclick = function() {
    //   var val = document.getElementById('elem1').value;
    //   if (clickCount >= val && val >= 10) {
    //   clickCount-=val; 
    //   alert('Заявка успешно отправлена');
    //   localStorage.setItem('clickCount', clickCount);
    //   clickCountDisplay.textContent = `${clickCount}`; 
    //   localStorage.setItem('scoreprice', scoreprice);
    //   let message = '<b>Заявка с сайта!</b>\n';
    //   message += '<b>На вывод:</b>' `${val}`;
    //   console.log(message);
    // } else {
    //   alert('Ошибка');
    // }}


    
// const TOKEN = "6614663642:AAFrwsJiLTkDupbYfEhpgq2r753mVUCz3gY";
// const CHAT_ID = "-1002115537261";
// const URI_API = 'https://api.telegram.org/bot' + TOKEN + '/sendMessage';

// document.getElementById('tg').addEventListener('submit', function(e) {
//   e.preventDefault();
//   var val = document.getElementById('elem1').value;
//   if (clickCount >= val && val >= 10) {
//   clickCount-=val; 
//   alert('Заявка успешно отправлена');
//   localStorage.setItem('clickCount', clickCount);
//   clickCountDisplay.textContent = `${clickCount}`; 
//   localStorage.setItem('scoreprice', scoreprice);
  
//   let message = '<b>Заявка с сайта!</b>';

//   axios.post(URI_API, {
//     chat_id: CHAT_ID,
//     parse_mode: 'html',
//     text: message
//   })

// } else {
//   alert('Ошибка');
// }
 
// });



const TelegramBot = require('node-telegram-bot-api');

const token = '6614663642:AAFrwsJiLTkDupbYfEhpgq2r753mVUCz3gY';

const bot = new TelegramBot(token, {polling: true});

bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;

  bot.sendMessage(chatId, 'Hello');
});

