var inp = '';
var chatbox = '';
var temp = +0;

function sendText(){
    chatbox = document.getElementById('chatbox');
    inp = document.getElementById('inp').value;

    if ((inp.length) >0 && temp <=10){

      var newText = document.createElement('div');
      var br = document.createElement('br');
      
      newText.setAttribute('class', 'dis'); 

      document.getElementById('chatbox').appendChild(newText);
      document.getElementById('chatbox').appendChild(br);

      newText.innerHTML = inp;
      document.getElementsByClassName('dis').style.display = 'block';

      temp += 1;
      alert(+temp);
  


      // TRY TO FIND A WAY TO EMPTY THE TEXTAREA AFTER SENDING DM
      
      // document.getElementById('inp').innerHTML = 'hello';
    }
    // DONE >> ADD A NEW LINE FOR EACH MESSAGE 

    // if (temp == 1 && (inp.length) >0){

    //   chatbox = document.getElementById('chatbox');
    //   inp = document.getElementById('inp').value;

    //   var newText = document.createElement('div');
    //   var br = document.createElement('br');
      
    //   newText.setAttribute('class', 'dis'); 

    //   document.getElementById('chatbox').appendChild(newText);
    //   document.getElementById('chatbox').appendChild(br);

    //   newText.innerHTML = inp;
    //   document.getElementsByClassName('dis').style.display = 'block';
    //   }

}



// function sendTextr(){
//   var inp2 = document.getElementById('inp2').value;


// }

