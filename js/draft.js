let mailDraft = [
  {

    to: "ankit@discoverdollar.com",
    name: "ankit",
    subject: "test",
    message: "test mail"
  },
  {
    to: "abhishek@discoverdollar.com",
    name: "abhishek",
    subject: "test",
    message: "test mail"
  }
]
function displayDraft(){
let list = document.getElementById('list');
for(let key of mailDraft){
  let newLi = document.createElement('li');
  let data=key;


  newLi.innerHTML=`<a onclick='window.location="compose.html";'>
      <span id='mail' class="mail-senderId">${key.to}</span>
      <span id='name' class="mail-sender">${key.name}</span>
      <span id='subject' class="mail-subject">${key.subject}</span>
      <span id='message' class="mail-message-preview"><b>${key.message}</b></span>
  </a>`;
  list.appendChild(newLi);
}
}
function getDraftData(){
  let toMail=document.getElementsByClassName('mail-senderId')[0].textContent;
  let toSubject=document.getElementsByClassName('mail-subject')[0].textContent;
  let toMessage=document.getElementsByClassName('mail-message-preview')[0].textContent;;

  sessionStorage.toMail=toMail;
  sessionStorage.toSubject=toSubject;
  sessionStorage.toMessage=toMessage;
}
function displayDefault(){
  let toMail = sessionStorage.toMail;
  let toSubject=sessionStorage.toSubject;
  let toMessage=sessionStorage.toMessage;
  document.getElementById('tokenfield').value = toMail;
  document.getElementById('sub').value = toSubject;
  document.getElementById('msg').value = toMessage;


}
