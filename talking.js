function talk(){
let date;
let replies = {
  "Hi":"Hi how are you?",
  "can you help me":"yes i can , just ask?",
  "who am i":"you are the user",
  "who are you":"i am a virtual asistance",
  "time":getCurTime(),
};

  let usermsg = document.getElementById("usrinput").value;
  if(usermsg in replies){
    document.getElementById("reply").innerHTML = replies[usermsg];
  }
  else{
    document.getElementById("reply").innerHTML = "sorry i idont know";
  }
}
function getCurTime(){
  let t = new Date();
  return t;
}
