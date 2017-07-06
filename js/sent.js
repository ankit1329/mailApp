let sentMail = [
  {
    to: "ankit@discoverdollar.com",
    name: "abhiskek",
    subject: "Dummy Mail!",
    message: "This is a dummy mail!"
  },
  {
    mlink: "ankit@discoverdollar.com",
    name: "abhishek",
    subject: "Dummy Mail!",
    message: "This is a dummy mail!"
  }
]

let list = document.getElementById('list');
for(let key of sentMail){
  let newLi = document.createElement('li');
  newLi.innerHTML=`<a href="#">
      <span id='name' class="mail-sender">To: ${key.name}</span>
      <span id='subject' class="mail-subject">Sub: ${key.subject}</span>
      <span id='message' class="mail-message-preview"><b>${key.message.substr(0,25)+'...'}<b></span>
  </a>`;
  list.appendChild(newLi);
}
