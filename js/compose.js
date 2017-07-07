let temp={};
function save(){
  temp.to = document.getElementById('tokenfield').value;
  temp.cc1 = document.getElementById('cc').value;
  temp.bcc1 = document.getElementById('bcc').value;
  temp.subject = document.getElementById('sub').value;
  temp.messsage = document.getElementById('msg').value;
  console.log(temp);
  alert('saved to draft');
}
function validateMail() {
    var x = document.forms["myForm"]["email"].value;
    var atpos = x.indexOf("@");
    var dotpos = x.lastIndexOf(".");
    if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length) {
        alert("Not a valid e-mail address");
        return false;
    }
    else {
      alert('Email Sent');
    }
}
