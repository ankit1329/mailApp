

let receivedMail = [
  {
    mlink: "#",
    name: "Youtube",
    subject: "New Subscribers!",
    message: "You have ten more subscriptions click here to view full list"
  },
  {
    mlink: "#",
    name: "Facebook",
    subject: "New Friend Request!",
    message: "You have a friend request. Click here to view full list"
  },
  {
    mlink: "#",
    name: "Youtube",
    subject: "New Subscribers!",
    message: "You have ten more subscriptions click here to view full list"
  },
  {
    mlink: "#",
    name: "Facebook",
    subject: "New Friend Request!",
    message: "You have a friend request. Click here to view full list"
  },
  {
    mlink: "#",
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

let list = document.getElementById('list');
for(let key of receivedMail){
  let newLi = document.createElement('li');
  newLi.innerHTML=`<a href="${key.mlink}">
      <span id='name' class="mail-sender">From: ${key.name}</span>
      <span id='subject' class="mail-subject">Sub: &lt;${key.subject}&gt;</span>
      <span id='message' class="mail-message-preview"><strong>${key.message.substr(0,25)+'...'}</strong></span>
  </a>`;
  newLi.style.borderWidth = "thick";
  list.appendChild(newLi);
}
