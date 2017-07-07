

let receivedMail = [
  {
    from: "abc@gmail.com",
    name: "Youtube",
    subject: "New Subscribers!",
    message: "You have ten more subscriptions click here to view full list"
  },
  {
    from: "xyz@yahoo.in",
    name: "Facebook",
    subject: "New Friend Request!",
    message: "You have a friend request. Click here to view full list"
  },
  {
    from: "abc@gmail.com",
    name: "Youtube",
    subject: "New Subscribers!",
    message: "You have ten more subscriptions click here to view full list"
  },
  {
    from: "xyz@yahoo.in",
    name: "Facebook",
    subject: "New Friend Request!",
    message: "You have a friend request. Click here to view full list"
  },
  {
    from: "abc@gmail.com",
    name: "Facebook",
    subject: "New Message!",
    message: "You have a new message. Click here to view full list"
  },
  {
    mlink: "#",
    name: "Youtube",
    subject: "New Vedeo from Molt",
    message: "Molt just uploaded a new video"
  }
]
function createInbox(){

  let list = document.getElementById('list');
  for(let key of receivedMail){
    let newLi = document.createElement('li');
    newLi.innerHTML=`<a href="content.html">
      <span id='mail' class="mail-senderId hidden">${key.from}</span>
      <span id='name' class="mail-sender">From: ${key.name}</span>
        <span id='subject' class="mail-subject">Sub: &lt;${key.subject}&gt;</span>
        <span id='message' class="mail-message-preview"><strong>${key.message}</strong></span>
    </a>`;
    newLi.style.borderWidth = "thick";
    list.appendChild(newLi);
    let toName=document.getElementsByClassName('mail-sender')[0].textContent;
    let toMail=document.getElementsByClassName('mail-senderId')[0].textContent;
    let toSubject=document.getElementsByClassName('mail-subject')[0].textContent;
    let toMessage=document.getElementsByClassName('mail-message-preview')[0].textContent;;
    sessionStorage.toName=toName;
    sessionStorage.toMail=toMail;
    sessionStorage.toSubject=toSubject;
    sessionStorage.toMessage=toMessage;
  }
}

function find(){
  let key=document.getElementById('srch').value;
  console.log(key);
}

function displayContent(){
  let toName= sessionStorage.toName;
  let toMail = sessionStorage.toMail;
  let toSubject=sessionStorage.toSubject;
  let toMessage=sessionStorage.toMessage;


  let list = document.getElementById('maildisplay');
    let newLi = document.createElement('li');
    newLi.innerHTML=`
    <span id='mail' class="text-primary">From: ${toMail}</span>
    <span id='name' class="mail-sender">( ${toName} )</span>
    <span id='subject' class="mail-subject">Sub: &lt;${toSubject}&gt;</span>
    <br>&ensp;&ensp;&ensp;

    <span id='message' class="mail-message-preview"><strong>${toMessage}</strong></span>
    <br><br>
</a>`;
    list.appendChild(newLi);

    document.getElementById('name').textContent = toName;
    document.getElementById('mail').textContent = toMail;
    document.getElementById('subject').textContent = toSubject;
    document.getElementById('message').textContent = toMessage;

}
