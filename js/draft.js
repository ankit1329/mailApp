let mailDraft = [
  {

    to: "ankit@discoverdollar.com",
    name: "ankit",
    subject: "test1",
    message: "test mail1"
  },
  {
    to: "abhishek@discoverdollar.com",
    name: "ankit",
    subject: "test2",
    message: "test mail2"
  }
]
let list = document.getElementById('list');
for(let key of mailDraft){
  let newLi = document.createElement('li');
  newLi.innerHTML=`<a href="compose.html">
      <span id='name' class="mail-sender">${key.name}</span>
      <span id='subject' class="mail-subject">${key.subject}</span>
      <span id='message' class="mail-message-preview">${key.message.substr(0,25)+'...'}</span>
  </a>`;
  list.appendChild(newLi);
}
