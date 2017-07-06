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
