

let receivedMail = [
  {
    mlink: "http://www.Youtube.com",
    name: "Youtube",
    subject: "New Subscribers!",
    message: "You have ten more subscriptions click here to view full list"
  },
  {
    mlink: "http://www.facebook.com",
    name: "Facebook",
    subject: "New Friend Request!",
    message: "You have a friend request. Click here to view full list"
  },
  {
    mlink: "http://www.Youtube.com",
    name: "Youtube",
    subject: "New Subscribers!",
    message: "You have ten more subscriptions click here to view full list"
  },
  {
    mlink: "http://www.facebook.com",
    name: "Facebook",
    subject: "New Friend Request!",
    message: "You have a friend request. Click here to view full list"
  },
  {
    mlink: "http://www.facebook.com",
    name: "Facebook",
    subject: "New Message!",
    message: "You have a new message. Click here to view full list"
  },
  {
    mlink: "http://www.Youtube.com",
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
      <span id='subject' class="mail-subject">Sub: ${key.subject}</span>
      <span id='message' class="mail-message-preview">${key.message.substr(0,25)+'...'}</span>
  </a>`;
  list.appendChild(newLi);
}
