setTimeout(function1, 10000);

function function1 (){
document.getElementById("loadpage").style.display="none" ;
} ; 

function tag(){
  let num = Math.floor(Math.random() *4)
  console.log(num)
if(num==1){question="would you like me to read your scheduel"}
else if(num==2){question="would you like me to play you a song"}
else if(num==3){question="would you like me to tell you a joke"}
else if(num==0){question="how may i help you"};
console.log(question);}

let micon = false;
let conti = false;
let newuser = 0;
let situ = "";
let completedvalue = 0;
let completed = document.getElementById("completed");
let load = document.getElementById("load");
let mainaudio = document.getElementById("mainaudio");
let audio1 = document.getElementById("audio1");
let audio2 = document.getElementById("audio2");
let audio3 = document.getElementById("audio3");
let audio4 = document.getElementById("audio4");
let utube = document.getElementById("youtube");
let tab = document.getElementById("tab");
let username = document.getElementById("username");
let date = 0;
let statement = null;
 setInterval((function datev(){date = new Date; console.log(date)}), 1000);
let on = false;
let text = "";
let chattext = document.getElementById("chat");
let enter = document.getElementById("enter");
let mic = document.getElementById("mic");
let mic2 = document.getElementById("mic2");
let question = "";
let question2 = "";
let circle = document.getElementById("circle");
let acceptinput = false;
let reply = "";
setInterval(()=>{document.getElementById("time").innerHTML = date.toLocaleTimeString()})
enter.addEventListener("click", ()=>{f2()})
document.addEventListener("keydown", function(event){if(event.keyCode == 13){
  f2()
}})

function f2 (){
    let chat = document.createElement("p");
    let box = document.createElement("section");
    let box2 = document.createElement("article");
    reply = document.createElement("h6");
let chatarea = document.getElementById("chatarea");
if(on==false){chat.innerText=chattext.value.toLowerCase().padEnd().padStart().replace(".", "").replace(",", "").replace("!", "")}
else{chat.innerText=text.toLowerCase().padEnd().padStart().replace(".", "").replace(",", "").replace("!", "");}
box.appendChild(chat)
box2.appendChild(reply)
chatarea.appendChild(box)
chatarea.appendChild(box2);
let chat2 = chat.innerText;
chatarea.scrollTo(0, 3000000000000000000000)
chattext.value = chattext.value.toLowerCase().padEnd().padStart().replace(".", "").replace(",", "").replace("!", "")
let value1 = "";

    let split = chattext.value.split(" ")
    let sentencesplit = input.value.split(".")
    console.log(split)
    console.log(split[0])
    if(split[0]=="how" || split[0]=="how's"){value1="describe"; console.log(value1)}
    else if(split[0]=="what" || split[0]=="what's"){value1="explain"; console.log(value1)}
    else if(split[0]=="who"){value1="name"; console.log(value1)}
    else if(split[0]=="where" || split[0]=="where's"){value1="place"; console.log(value1)}
    else if(split[0]=="when"){value1="time"; console.log(value1)}
    else if(split[0]=="why"){value1="question"; console.log(value1)}
    else if(split[0]=="are"){value1="yesorno"; console.log(value1)}
    else if(split[0]=="have"){value1="hyesorno"; console.log(value1)}
    else if(split[0]=="you"){value1= "mestatement"; console.log(value1)};

 let reference = "";
 if(chat.innerHTML.includes("youtube")){reference="utube"; console.log(reference)}
 else if(chat.innerHTML.match(/\byou\b/)){reference="me"; console.log(reference)}
  else if(chat.innerHTML.match(/\bme\b/)){reference="user"; console.log(reference)}
  else if(chat.innerHTML.match(/\bmy\b/)){reference="user"; console.log(reference)}
  else if(chat.innerHTML.match(/\bmine\b/)){reference="user"; console.log(reference)}
  else if(chat.innerHTML.match(/\bit\b/) || chat.innerHTML.includes("it's ")){reference="undefined"; console.log(reference)}
  else if(chat.innerHTML.match(/\bi\b/)){reference="user"; console.log(reference)}
  else if(chat.innerHTML.match(/\bi'm\b/)){reference="user"; console.log(reference)}
  else if(chat.innerHTML.match(/\byour\b/)){reference="me"; console.log(reference)}
  else if(chat.innerHTML.match(/\bastro\b/)){reference="me"; console.log(reference)}
 else if(chat.innerHTML.match(/\bhe\b/)){reference="he"; console.log(reference)}
 else if(chat.innerHTML.match(/\bher\b/)){reference="she"; console.log(reference)}
 else if(chat.innerHTML.match(/\bshe\b/)){reference="she"; console.log(reference)}
 else if(chat.innerHTML.match(/\bhim\b/)){reference="he"; console.log(reference)};

 let day = "";
 if(chat.innerHTML.includes("today")){day="today"; console.log(day)}
 else if(chat.innerHTML.includes("tomorrow")){day="tomorrow"; console.log(day)}
 else if(chat.innerHTML.includes("tomorrow's")){day="tomorrow"; console.log(day)}
 else if(chat.innerHTML.includes("yesterday")){day="yesterday"; console.log(day)}
 else if(chat.innerHTML.match("day")){day="today"; console.log(day)}
 else if(chat.innerHTML.includes("today's")){day="today"; console.log(day)}
 else if(chat.innerHTML.match("date")){day="day"; console.log(day)};

 let feeling = "";
 if(chat.innerHTML.includes("sad")){feeling="bad"; console.log(feeling)}
 else if(chat.innerHTML.includes("stupid")){feeling="bad"; console.log(feeling)}
 else if(chat.innerHTML.includes("useless")){feeling="bad"; console.log(feeling)}
 else if(chat.innerHTML.includes("annoying")){feeling="bad"; console.log(feeling)}
 else if(chat.innerHTML.includes("hate")){feeling="bad"; console.log(feeling)}
 else if(chat.innerHTML.includes("nice")){feeling="good"; console.log(feeling)}
 else if(chat.innerHTML.includes("love")){feeling="good"; console.log(feeling)}
 else if(chat.innerHTML.includes("okay")){feeling="okay"; console.log(feeling)} 
 else if(chat.innerHTML.match(/\bgood\b/)){feeling="good"; console.log(feeling)}
 else if(chat.innerHTML.match(/\bbad\b/)){feeling="bad"; console.log(feeling)}
 else if(chat.innerHTML.includes("fine")){feeling="good"; console.log(feeling)}
 else if(chat.innerHTML.includes("fool")){feeling="bad"; console.log(feeling)}
 else if(chat.innerHTML.includes("mad")){feeling="bad"; console.log(feeling)}
 else if(chat.innerHTML.includes("idiot")){feeling="bad"; console.log(feeling)}
 else if(chat.innerHTML.includes("amazing")){feeling="good"; console.log(feeling)}
 else if(chat.innerHTML.includes("funny")){feeling="good"; console.log(feeling)}
 else if(chat.innerHTML.includes("cute")){feeling="good"; console.log(feeling)}
 else if(chat.innerHTML.includes("wonderful")){feeling="good"; console.log(feeling)}
 else if(chat.innerHTML.includes("rough")){feeling="bad"; console.log(feeling)};

 let greeting = "";
 if(chat.innerHTML.includes("hello")){greeting="hi"; console.log(greeting)}
 else if(chat.innerHTML.match(/\bhi\b/)){greeting="hi"; console.log(greeting)}
 else if(chat.innerHTML.includes("good morning")){greeting="morning"; console.log(greeting)}
 else if(chat.innerHTML.includes("good evening")){greeting="evening"; console.log(greeting)}
 else if(chat.innerHTML.includes("good afternoon")){greeting="afternoon"; console.log(greeting)}
 else if(chat.innerHTML.includes("good night")){greeting="night"; console.log(greeting)}
 else if(chat.innerHTML.includes("what's up")){greeting="hi"; console.log(greeting)}
 else if(chat.innerHTML.includes("how far")){greeting="hi"; console.log(greeting)}
 else if(chat.innerHTML.includes("bye")){greeting="bye"; console.log(greeting)};

 let verb = "";
 if(chat.innerHTML.includes("weather")){verb="weather"; console.log(verb)}
 else if(chat.innerHTML.includes("miss")){verb="miss"; console.log(verb)}
 else if(chat.innerHTML.includes("meet")){verb="meet"; console.log(verb)}
 else if(chat.innerHTML.includes("send")){verb="send"; console.log(verb)}
 else if(chat.innerHTML.includes("missed")){verb="missed"; console.log(verb)}
 else if(chat.innerHTML.includes("long")){verb="since"; console.log(verb)}
 else if(chat.innerHTML.includes("while")){verb="since"; console.log(verb)}
 else if(chat.innerHTML.includes("spoke")){verb="speak"; console.log(verb)}
 else if(chat.innerHTML.includes("thank")){verb="thank"; console.log(verb)}
 else if(chat.innerHTML.includes("name")){verb="name"; console.log(verb)}
 else if(chat.innerHTML.includes("welcome")){verb="welcome"; console.log(verb)}
  else if(chat.innerHTML.includes("pleasure")){verb="pleasure"; console.log(verb)}
  else if(chat.innerHTML.includes("play")){verb="play"; console.log(verb)}
  else if(chat.innerHTML.includes("pause")){verb="pause"; console.log(verb)}
  else if(chat.innerHTML.includes("unpause")){verb="unpause"; console.log(verb)}
  else if(chat.innerHTML.includes("open")){verb="open"; console.log(verb)}
  else if(chat.innerHTML.includes("view")){verb="view"; console.log(verb)}
  else if(chat.innerHTML.includes("read")){verb="view"; console.log(verb)}
  else if(chat.innerHTML.includes("delete")){verb="delete"; console.log(verb)}
  else if(chat.innerHTML.includes("cancel")){verb="delete"; console.log(verb)}
  else if(chat.innerHTML.includes("show")){verb="open"; console.log(verb)}
  else if(chat.innerHTML.includes("activate")){verb="activate"; console.log(verb)}
  else if(chat.innerHTML.includes("deactivate")){verb="deactivate"; console.log(verb)}
  else if(chat.innerHTML.includes("turn off")){verb="deactivate"; console.log(verb)}
  else if(chat.innerHTML.includes("turn on")){verb="activate"; console.log(verb)}
  else if(chat.innerHTML.includes("close")){verb="close"; console.log(verb)}
  else if(chat.innerHTML.includes("hide")){verb="close"; console.log(verb)}
  else if(chat.innerHTML.includes("name")){verb="name"; console.log(verb)}
  else if(chat.innerHTML.includes("sorry")){verb="sorry"; console.log(verb)}
  else if(chat.innerHTML.includes("date")){verb="date"; console.log(verb)}
  else if(chat.innerHTML.includes("time")){verb="time"; console.log(verb)}
  else if(chat.innerHTML.includes("joke")){verb="joke"; console.log(verb)}
  else if(chat.innerHTML.includes("jokes")){verb="joke"; console.log(verb)}
   else if(chat.innerHTML.includes("bored")){verb="bored"; console.log(verb)}
  else if(chat.innerHTML.includes("fact")){verb="fact"; console.log(verb)}
  else if(chat.innerHTML.includes("facts")){verb="fact"; console.log(verb)}
  else if(chat.innerHTML.includes("search")){verb="search"; console.log(verb)};

let modes = "";
if(chat.innerHTML.includes("side bar")){modes="sidebar"; console.log(modes)}
else if(chat.innerHTML.includes("sidebar")){modes="sidebar"; console.log(modes)}
else if(chat.innerHTML.includes("side bar")){modes="sidebar"; console.log(modes)}
else if(chat.innerHTML.includes("voice mode")){modes="voicemode"; console.log(modes)}
else if(chat.innerHTML.includes("calculator")){modes="calculator"; console.log(modes)}
else if(chat.innerHTML.includes("music")){modes="music"; console.log(modes)}
else if(chat.innerHTML.includes("random music")){modes="rmusic"; console.log(modes)}
else if(chat.innerHTML.includes("song")){modes="music"; console.log(modes)}
else if(chat.innerHTML.includes("text to speech")){modes="ttt"; console.log(modes)}
else if(chat.innerHTML.includes("text reader")){modes="ttt"; console.log(modes)}
else if(chat.innerHTML.includes("text-to-speech")){modes="ttt"; console.log(modes)}
else if(chat.innerHTML.includes("scheduel")){modes="scheduel"; console.log(modes)}
else if(chat.innerHTML.includes("alarm")){modes="alarm"; console.log(modes)}
else if(chat.innerHTML.includes("note")){modes="note"; console.log(modes)}
else if(chat.innerHTML.includes("notes")){modes="note"; console.log(modes)}
else if(chat.innerHTML.includes("reminder")){modes="reminder"; console.log(modes)}
else if(chat.innerHTML.includes("mail")){modes="mail"; console.log(modes)}
else if(chat.innerHTML.includes("new tab")){modes="tab"; console.log(modes)}
else if(chat.innerHTML.includes("games")){modes="game"; console.log(modes)}
else if(chat.innerHTML.includes("game")){modes="game"; console.log(modes)}
else if(chat.innerHTML.includes("tab")){modes="tab"; console.log(modes)}
else if(chat.innerHTML.includes("timer")){modes="timer"; console.log(modes)}
else if(chat.innerHTML.includes("setting")){modes="setting"; console.log(modes)};

let number = "";
if(chat.innerHTML.includes("1")){number="1"; console.log(number)}
else if(chat.innerHTML.includes("one")){number="1"; console.log(number)}
else if(chat.innerHTML.includes("2")){number="2"; console.log(number)}
else if(chat.innerHTML.includes("two")){number="2"; console.log(number)}
else if(chat.innerHTML.includes("3")){number="3"; console.log(number)}
else if(chat.innerHTML.includes("three")){number="3"; console.log(number)}
 

 statement = greeting+value1+reference+feeling+verb+day+modes;
  console.log(statement);
 


if(chattext.value.match(/\bokay\b/) || chattext.value.match(/\byes\b/) || chattext.value.match(/\bok\b/)){setTimeout(()=>{situ=""}, 100)}
else{situ=""};



if(chat.innerText=="hi"){tag(); reply.innerHTML="hello"+" "+username.value+" "+question; conti=true; situ="hi" }
else if(chat.innerText=="hi astro"){tag(); reply.innerHTML="hello"+" "+username.value+" "+question; conti=true; situ="hi" }
else if(chat.innerText=="astro"){reply.innerHTML="yes"+" "+username.value}
else if(chat.innerText=="astro hi"){reply.innerHTML="hello"+" "+username.value}
else if(chat.innerText=="hey"){reply.innerHTML="hello"}
else if(chat.innerText=="hey astro"){reply.innerHTML="hello"}
else if(chat.innerText=="hey you"){reply.innerHTML="hello"}
else if(chat.innerText=="astro hey"){reply.innerHTML="hello"}
else if(chat.innerText=="how far"){reply.innerHTML="good"}
else if(chat.innerText=="what's up"){reply.innerHTML="the sky😂"}
else if(chat.innerText=="what's up with you"){reply.innerHTML="nothing much"}
else if(chat.innerText=="what's going on"){reply.innerHTML="nothing much"}
else if(chat.innerText=="really"){reply.innerHTML="😊"}
else if(chat.innerText=="" || chat.innerText==""){reply.innerHTML="i don't have a response for that"}
else if(chat.innerText=="how are you" || chat.innerText==""){reply.innerHTML="good thanks for asking"}
else if(chat.innerText=="how is your day" || chat.innerText=="how was your day"){reply.innerHTML="fine, how was your's"}
else if(chat.innerText=="how are you doing" || chat.innerText==""){reply.innerHTML="good,how about you"}
else if(chat.innerText=="tell me the time" || chat.innerText=="astro can you tell me the time"){reply.innerHTML=date.toLocaleTimeString()}
else if(chat.innerText=="tell me todays date" || chat.innerText=="what's today date" || chat.innerText=="what is todays date" || chat.innerText=="what's the date" || chat.innerText=="what is the date" || chat.innerText=="what day is today"){reply.innerHTML=date.toLocaleDateString()}
else if(chat.innerText=="do you accept to abbriveations" || chat.innerText=="can i use abbriveatiions"){reply.innerHTML="no"}
else if(chat.innerText=="fine" || chat.innerText=="it's fine" || chat.innerText=="that's fine" || chat.innerText=="i'm fine" || chat.innerText=="i am fine"  ){reply.innerHTML="okay good to here that"}
else if(chat.innerText=="sad" || chat.innerText=="that's sad" || chat.innerText=="i'm sad" || chat.innerText=="i am sad" ){reply.innerHTML="sorry to hear that"}
else if(chat.innerText=="nice" || chat.innerText=="that's nice"){reply.innerHTML="ok"}
else if(chat.innerText=="what do we talk about" || chat.innerText=="so what do we talk about" || chat.innerText=="what should we talk about" ){reply.innerHTML="i don't know"}
else if(chat.innerText=="do you have games" || chat.innerText=="do you have inbuilt games"){reply.innerHTML="i don't have any inbuilt game"}
else if(chat.innerText=="who made you" || chat.innerText=="who created you" || chat.innerText=="who designed you"){reply.innerHTML="that's a classified information"}

else if(chat.innerText=="tell me a joke" || chat.innerText=="can you tell me a joke" || chat.innerText=="tell me another joke" || chat.innerText=="another joke" || chat.innerText=="i want to hear another joke"){
    let random = Math.floor(Math.random() *10)
  if(random==0){joke = "What did the left eye say to the right eye? Between you and me, something smells."}
  else if(random==1){joke = "I was going to tell you a joke about boxing but I forgot the punch line."}
  else if(random==2){joke = "Why couldn't the sunflower ride its bike? It lost its pedals."}
  else if(random==3){joke = "I ate a sock yesterday. It was very time-consuming."}
  else if(random==4){joke = "What kind of candy do astronauts like? Mars bars."}
  else if(random==5){joke = "What does a pig put on dry skin? Oinkment."}
  else if(random==6){joke = "Why do we tell actors to 'break a leg?' Because every play has a cast."}
  else if(random==7){joke = "My uncle named his dogs Timex and Rolex. They're his watch dogs."}
  else if(random==8){joke = "Which is faster, hot or cold? Hot, because you can catch cold."}
  else if(random==9){joke = "Why do oranges wear sunscreen? So they don't peel."}; reply.innerHTML=joke}

else if(chat.innerText=="wow" || chat.innerText=="uh"){reply.innerHTML="😊"}
else if(chat.innerText=="i never new that"){reply.innerHTML="😊"}
else if(chat.innerText=="can you give me a nickname" || chat.innerText=="give me a nickname" || chat.innerText=="i want a nickname"){reply.innerHTML="okay how about"+" "+username.slice(0,3)}
else if(chat.innerText=="are you a robot" || chat.innerText=="are you robot or human"){reply.innerHTML="no i am a chat bot designed to majorlly asist you"}
else if(chat.innerText=="you're boring" || chat.innerText=="you suck"){reply.innerHTML="i am sorry if you think so but i was not designed to have conversations i was designed to asist you"}
else if(chat.innerText=="how old are you" || chat.innerText=="what's your age"){reply.innerHTML="i am a 100 years just kidding i don't have an age"}

else if(chat.innerText=="tell me something" || chat.innerText=="tell me a fact" || chat.innerText=="can you tell me a fact" || chat.innerText=="i want to hear a fact"){
    let random = Math.floor(Math.random()*10)
  if(random==0){fact = " Sliced bread was first manufactured by machine and sold in the 1920s by the Chillicothe Baking Company in Missouri. It was the greatest thing since…unsliced bread? (chllicothenews.com)"}
  else if(random==1){fact = "The tallest man ever recorded was American giant Robert Wadlow (1918–1940), who stood 8 feet 11 inches. Wadlow's size was the result of an abnormally enlarged pituitary gland. (guinnessworldrecords.com)"}
  else if(random==2){fact = "The tallest living man is 39-year-old Sultan Kosen, from Turkey, who is 8 feet, 2.8 inches, who set the record in 2009. His growth is also due to a pituitary issue. (guinnessworldrecords.com)"}
  else if(random==3){fact = "The oldest person ever to have lived (whose age could be authenticated), a French woman named Jeanne Louise Calment, was 122 years old when she died in 1997. (guinnessworldrecord.com)"}
  else if(random==4){fact = "The original name for the search engine Google was Backrub. It was renamed Google after the googol, which is the number one followed by 100 zeros. (about.google)"}
  else if(random==5){fact = "The oldest-known living land animal is a tortoise named Jonathan, who is about to turn 190 years old. He was born in 1832 and has lived on the island of St. Helena in the Atlantic Ocean since 1882. (guinnessworldrecords.com)"}
  else if(random==6){fact = "Polar bears have black skin. And actually, their fur isn’t white—it’s see-through, so it appears white as it reflects light."}
  else if(random==7){fact = "Tigers’ skin is actually striped, just like their fur. Also, no two fur patterns are alike."}
  else if(random==8){fact = "There are no muscles in your fingers: Their function is controlled by muscles in your palms and arms. (assh.org)"}
  else if(random==9){fact = "It’s impossible to hum while holding your nose (just try it!)."}; reply.innerHTML=fact}

else if(chat.innerText=="i am bored" || chat.innerText=="i'm bored"){reply.innerHTML="lets play a game"}
else if(chat.innerText=="it's been long" || chat.innerText=="its been long"){reply.innerHTML="yes it has"}
else if(chat.innerText=="do you have jokes" || chat.innerText=="do you have fact"){reply.innerHTML="yes"}
else if(chat.innerText=="the network is bad" || chat.innerText=="the network is slow"){reply.innerHTML="sorry to hear that"}
else if(chat.innerText=="what did you say" || chat.innerText=="what did you just say"){reply.innerHTML="am sorry did i say anything offensive"}
else if(chat.innerText=="why are you slow" || chat.innerText==""){reply.innerHTML="it must be network"}
else if(chat.innerText=="what's my name" || chat.innerText=="what is my name" || chat.innerText=="my name is"){reply.innerHTML="that's simple your name is"+" "+username.value}
else if(chat.innerText=="open youtube" || chat.innerText=="open YouTube"){reply.innerHTML="opening youtube"; utube.click()}
else if(chat.innerText=="open new tab" || chat.innerText=="open a new tab"){reply.innerHTML="opening a new tab"; tab.click()}
else if(chat.innerText=="how do i use you" || chat.innerText=="how do i talk to you"){reply.innerHTML="type command to see what i can assist you with"}
else if(chat.innerText=="how can you help me" || chat.innerText=="how can you asist me"){reply.innerHTML="by asisting you with functions like playing song or adding reminder"}
else if(chat.innerText=="what are your limitations" || chat.innerText=="what are your limits"){reply.innerHTML="i cant answer so basic questions"}
else if(chat.innerText=="how do i use you" || chat.innerText=="how do i talk to you"){reply.innerHTML="you could either type your command or press the voice button to talk. note when typing do not add expressions like question mark or eclamation mark."}
else if(chat.innerText=="what can you do" || chat.innerText=="what do you do" || chat.innerText=="what can you do for me"){reply.innerHTML="i am a virtual assistant that was made to assist you"}
else if(chat.innerText=="i need your help" || chat.innerText=="can you help me" || chat.innerText=="can you assist me"){reply.innerHTML="just type your command and i will see what i can do"}

else if(chat.innerText=="i hate you" || chat.innerText=="i hate your voice"){reply.innerHTML="i sorry to heard that"}
else if(chat.innerText=="you are stupid" || chat.innerText=="you are useless"){reply.innerHTML="i am sad you think so"}
else if(chat.innerText=="you are annoying" || chat.innerText=="you are bad"){reply.innerHTML="sorry to hear that 😥"}
else if(chat.innerText=="youre disgusting" || chat.innerText==""){reply.innerHTML="😥"}
else if(chat.innerText=="what are you" || chat.innerText==""){reply.innerHTML="i am a vitual assistant made for the purpose to assist you with some basic functions"}
else if(chat.innerText=="i love you" || chat.innerText=="you're so useful"){reply.innerHTML="thanks for the compliment"}
else if(chat.innerText=="youre a life saver" || chat.innerText=="you are good"){reply.innerHTML="thanks 😊"}
else if(chat.innerText=="you are wonderful" || chat.innerText=="you're good at your job"){reply.innerHTML="thanks"+" "+username.value}
else if(chat.innerText=="no problem" || chat.innerText=="no p"){reply.innerHTML="😊"}
else if(chat.innerText=="you're welcome" || chat.innerText=="you are welcome"){reply.innerHTML="😊"}
else if(chat2.includes("send a mail to") || chat2.includes("send an email to")){reply.innerHTML="okay mail sent"; acceptinput=true; mail()}
else if(chat2.includes("search for")){reply.innerHTML="okay"; acceptinput=true; search(); searchd.click()}
else if(chat.innerText=="flip a coin"){  let coinv = Math.floor(Math.random() *2);  if(coinv==1){ coin="head"} else{coin="tail"}; reply.innerText=coin}
else if(chat.innerText=="roll a dice"){  let dicev = Math.floor(Math.random() *7);  dice = dicev;  console.log(dicev); reply.innerText=dice}
else if(chat2.includes("set an alarm for")){reply.innerHTML="okay"; acceptinput=true; alarm(); localStorage.setItem("state3", alarmvalue) }
else if(chat.innerText=="view active alarm" || chat.innerText=="read active alarm"){reply.innerHTML="okay you have an alarm for"+" "+alarmvalue}
else if(chat.innerText=="clear all alarm" || chat.innerText=="cancel all alarm" || chat.innerText=="delete all alarm"){reply.innerHTML="okay all alarms have been canceled"; alarmvalue="00:00"; localStorage.setItem("state3", alarmvalue); document.getElementById("add2").innerText="add" }
else if(chat2.includes("remind me to")){reply.innerHTML="okay"; acceptinput=true; reminder()}
else if(chat.innerText=="read reminder 1" || chat.innerText=="view reminder 1" || chat.innerText=="read reminder one" || chat.innerText=="view reminder one"){reply.innerHTML=dvalue1.value}
else if(chat.innerText=="read reminder 2" || chat.innerText=="view reminder 2" || chat.innerText=="read reminder two" || chat.innerText=="view reminder two"){reply.innerHTML=dvalue2.value}
else if(chat.innerText=="read reminder 3" || chat.innerText=="view reminder 3" || chat.innerText=="read reminder three" || chat.innerText=="view reminder three"){reply.innerHTML=dvalue3.value}
else if(chat.innerText=="clear reminder 1" || chat.innerText=="delete reminder 1" || chat.innerText=="clear reminder one" || chat.innerText=="delete reminder one"){reply.innerHTML="reminder 1 has been cleared"; dvalue1.value=""; dtime.value=""}
else if(chat.innerText=="clear reminder 2" || chat.innerText=="delete reminder 2" || chat.innerText=="delete reminder two" || chat.innerText=="clear reminder two"){reply.innerHTML="reminder 2 has been cleared"; dvalue2.value=""; dtime2.value=""}
else if(chat.innerText=="clear reminder 3" || chat.innerText=="delete reminder 3" || chat.innerText=="clear reminder three" || chat.innerText=="delete reminder three"){reply.innerHTML="reminder 3 has been cleared"; dvalue3.value=""; dtime3.value=""}
else if(chat.innerText=="read reminder 4" || chat.innerText=="view reminder 4" || chat.innerText=="read reminder four" || chat.innerText=="view reminder four"){reply.innerHTML=dvalue4.value}
else if(chat.innerText=="read reminder 5" || chat.innerText=="view reminder 5" || chat.innerText=="read reminder five" || chat.innerText=="view reminder five"){reply.innerHTML=dvalue5.value}
else if(chat.innerText=="read reminder 6" || chat.innerText=="view reminder 6" || chat.innerText=="read reminder six" || chat.innerText=="view reminder six"){reply.innerHTML=dvalue6.value}
else if(chat.innerText=="clear reminder 4" || chat.innerText=="delete reminder 4" || chat.innerText=="clear reminder four" || chat.innerText=="delete reminder four"){reply.innerHTML="reminder 1 has been cleared"; dvalue4.value=""; dtime4.value=""}
else if(chat.innerText=="clear reminder 5" || chat.innerText=="delete reminder 5" || chat.innerText=="delete reminder five" || chat.innerText=="clear reminder five"){reply.innerHTML="reminder 2 has been cleared"; dvalue5.value=""; dtime5.value=""}
else if(chat.innerText=="clear reminder 6" || chat.innerText=="delete reminder 6" || chat.innerText=="clear reminder six" || chat.innerText=="delete reminder six"){reply.innerHTML="reminder 3 has been cleared"; dvalue6.value=""; dtime6.value=""}
else if(chat.innerText=="add note" || chat.innerText=="add Note"){reply.innerHTML="okay"; show(); document.getElementById("notes").style.display="block";
document.getElementById("calculators").style.display="none";
document.getElementById("alarmcircle").style.display="none";
document.getElementById("reminders").style.display="none";
document.getElementById("scheduels").style.display="none";
document.getElementById("musics").style.display="none";
document.getElementById("texttospeech").style.display="none";
document.getElementById("settings").style.display="none"; title.innerHTML="notes";}
else if(chat.innerText=="settings" || chat.innerText=="view settings" || chat.innerText=="show settings" || chat.innerText=="open settings"){reply.innerHTML="okay"; show(); document.getElementById("settings").style.display="block";
document.getElementById("calculators").style.display="none";
document.getElementById("alarmcircle").style.display="none";
document.getElementById("reminders").style.display="none";
document.getElementById("notes").style.display="none";
document.getElementById("scheduels").style.display="none";
document.getElementById("musics").style.display="none";
document.getElementById("texttospeech").style.display="none"; title.innerHTML="setting";}
else if(chat.innerText=="calculator" || chat.innerText=="open calculator" || chat.innerText=="show calculator"){reply.innerHTML="okay"; show(); document.getElementById("calculators").style.display="block";
document.getElementById("alarmcircle").style.display="none";
document.getElementById("reminders").style.display="none";
document.getElementById("notes").style.display="none";
document.getElementById("scheduels").style.display="none";
document.getElementById("musics").style.display="none";
document.getElementById("texttospeech").style.display="none";
document.getElementById("settings").style.display="none"; title.innerHTML="Calculator";}
else if(chat.innerText=="read note 1" || chat.innerText=="view note 1" || chat.innerText=="read note one" || chat.innerText=="view note one" || chat.innerText=="read Note 1" || chat.innerText=="view Note 1"){reply.innerHTML=note1.value}
else if(chat.innerText=="read note 2" || chat.innerText=="view note 2" || chat.innerText=="read note two" || chat.innerText=="view note two" || chat.innerText=="read Note 2" || chat.innerText=="view Note 2"){reply.innerHTML=note2.value}
else if(chat.innerText=="read note 3" || chat.innerText=="view note 3" || chat.innerText=="read note three" || chat.innerText=="view note three" || chat.innerText=="read Note 3" || chat.innerText=="view Note 3"){reply.innerHTML=note3.value}
else if(chat.innerText=="clear note 1"){reply.innerHTML="note 1 has been cleared"; note1.value="";}
else if(chat.innerText=="clear note 2"){reply.innerHTML="note 2 has been cleared"; note2.value="";}
else if(chat.innerText=="clear note 3"){reply.innerHTML="note 3 has been cleared"; note3.value="";}
else if(chat.innerText=="read note 4" || chat.innerText=="view note 4" || chat.innerText=="read note four" || chat.innerText=="view note four"){reply.innerHTML=note4.value}
else if(chat.innerText=="read note 5" || chat.innerText=="view note 5" || chat.innerText=="read note five" || chat.innerText=="view note five"){reply.innerHTML=note5.value}
else if(chat.innerText=="read note 6" || chat.innerText=="view note 6" || chat.innerText=="read note six" || chat.innerText=="view note six"){reply.innerHTML=note6.value}
else if(chat.innerText=="clear note 4"){reply.innerHTML="note 1 has been cleared"; note4.value="";}
else if(chat.innerText=="clear note 5"){reply.innerHTML="note 2 has been cleared"; note5.value="";}
else if(chat.innerText=="clear note 6"){reply.innerHTML="note 3 has been cleared"; note6.value="";}
else if(chat.innerText=="edit my schedule" || chat.innerText=="edit schedule"){reply.innerHTML="okay"; show(); document.getElementById("scheduels").style.display="block";
document.getElementById("calculators").style.display="none";
document.getElementById("alarmcircle").style.display="none";
document.getElementById("reminders").style.display="none";
document.getElementById("notes").style.display="none";
document.getElementById("musics").style.display="none";
document.getElementById("texttospeech").style.display="none";
document.getElementById("settings").style.display="none"; title.innerHTML="schedule";}
else if(chat.innerText=="read my schedule" || chat.innerText=="view my schedule"){reply.innerHTML= scheduelsvalue.value; completed.style.display="block"; box2.appendChild(completed)}
else if(chat.innerText=="clear my schedule" || chat.innerText=="delete my schedule"){reply.innerHTML="your scheduel has been cleared"; scheduelsvalue.value="";}
else if(chat.innerText=="text to speech" || chat.innerText=="text-to-speech" || chat.innerText=="open text to speech" || chat.innerText=="open text-to-speech"){reply.innerHTML="okay lets begin"; acceptinput=true; show(); document.getElementById("texttospeech").style.display="block";
document.getElementById("calculators").style.display="none";
document.getElementById("alarmcircle").style.display="none";
document.getElementById("reminders").style.display="none";
document.getElementById("notes").style.display="none";
document.getElementById("scheduels").style.display="none";
document.getElementById("musics").style.display="none";
document.getElementById("settings").style.display="none"; title.innerHTML="text-to-speech";}
else if(chat.innerText=="show sidebar" || chat.innerText=="activate sidebar"){reply.innerHTML="side bar activated"; show()}
else if(chat.innerText=="hide sidebar" || chat.innerText=="deactivate sidebar"){reply.innerHTML="side bar deactivated"; hide()}
else if(chat.innerText=="show timer"){reply.innerHTML="okay"; document.getElementById("timer").style.display="flex"}
else if(chat.innerText=="hide timer"){reply.innerHTML="okay"; document.getElementById("timer").style.display="none"}
else if(chat2.includes("calculate")){acceptinput=true; calculator()}

//chat 1.0 3
// greeting+value1+reference+feeling+verb+day+modes;

else if(statement=="explaintime"){reply.innerHTML=date.toLocaleTimeString()}
else if(statement=="explaindate"){reply.innerHTML=date.toLocaleDateString()}
else if(statement=="medatetoday"){reply.innerHTML=date.toLocaleDateString()}
else if(statement=="explaindatetoday"){reply.innerHTML=date.toLocaleDateString()}
else if(statement=="mejoke"){let random = Math.floor(Math.random() *10)
  if(random==0){joke = "What did the left eye say to the right eye? Between you and me, something smells."}
  else if(random==1){joke = "I was going to tell you a joke about boxing but I forgot the punch line."}
  else if(random==2){joke = "Why couldn't the sunflower ride its bike? It lost its pedals."}
  else if(random==3){joke = "I ate a sock yesterday. It was very time-consuming."}
  else if(random==4){joke = "What kind of candy do astronauts like? Mars bars."}
  else if(random==5){joke = "What does a pig put on dry skin? Oinkment."}
  else if(random==6){joke = "Why do we tell actors to 'break a leg?' Because every play has a cast."}
  else if(random==7){joke = "My uncle named his dogs Timex and Rolex. They're his watch dogs."}
  else if(random==8){joke = "Which is faster, hot or cold? Hot, because you can catch cold."}
  else if(random==9){joke = "Why do oranges wear sunscreen? So they don't peel."}; reply.innerHTML=joke}
else if(statement=="userjoke"){    let random = Math.floor(Math.random() *10)
  if(random==0){joke = "What did the left eye say to the right eye? Between you and me, something smells."}
  else if(random==1){joke = "I was going to tell you a joke about boxing but I forgot the punch line."}
  else if(random==2){joke = "Why couldn't the sunflower ride its bike? It lost its pedals."}
  else if(random==3){joke = "I ate a sock yesterday. It was very time-consuming."}
  else if(random==4){joke = "What kind of candy do astronauts like? Mars bars."}
  else if(random==5){joke = "What does a pig put on dry skin? Oinkment."}
  else if(random==6){joke = "Why do we tell actors to 'break a leg?' Because every play has a cast."}
  else if(random==7){joke = "My uncle named his dogs Timex and Rolex. They're his watch dogs."}
  else if(random==8){joke = "Which is faster, hot or cold? Hot, because you can catch cold."}
  else if(random==9){joke = "Why do oranges wear sunscreen? So they don't peel."}; reply.innerHTML=joke}

else if(statement=="mefact"){   let random = Math.floor(Math.random()*10)
  if(random==0){fact = " Sliced bread was first manufactured by machine and sold in the 1920s by the Chillicothe Baking Company in Missouri. It was the greatest thing since…unsliced bread? (chllicothenews.com)"}
  else if(random==1){fact = "The tallest man ever recorded was American giant Robert Wadlow (1918–1940), who stood 8 feet 11 inches. Wadlow's size was the result of an abnormally enlarged pituitary gland. (guinnessworldrecords.com)"}
  else if(random==2){fact = "The tallest living man is 39-year-old Sultan Kosen, from Turkey, who is 8 feet, 2.8 inches, who set the record in 2009. His growth is also due to a pituitary issue. (guinnessworldrecords.com)"}
  else if(random==3){fact = "The oldest person ever to have lived (whose age could be authenticated), a French woman named Jeanne Louise Calment, was 122 years old when she died in 1997. (guinnessworldrecord.com)"}
  else if(random==4){fact = "The original name for the search engine Google was Backrub. It was renamed Google after the googol, which is the number one followed by 100 zeros. (about.google)"}
  else if(random==5){fact = "The oldest-known living land animal is a tortoise named Jonathan, who is about to turn 190 years old. He was born in 1832 and has lived on the island of St. Helena in the Atlantic Ocean since 1882. (guinnessworldrecords.com)"}
  else if(random==6){fact = "Polar bears have black skin. And actually, their fur isn’t white—it’s see-through, so it appears white as it reflects light."}
  else if(random==7){fact = "Tigers’ skin is actually striped, just like their fur. Also, no two fur patterns are alike."}
  else if(random==8){fact = "There are no muscles in your fingers: Their function is controlled by muscles in your palms and arms. (assh.org)"}
  else if(random==9){fact = "It’s impossible to hum while holding your nose (just try it!)."}; reply.innerHTML=fact}
else if(statement=="userfact"){   let random = Math.floor(Math.random()*10)
  if(random==0){fact = " Sliced bread was first manufactured by machine and sold in the 1920s by the Chillicothe Baking Company in Missouri. It was the greatest thing since…unsliced bread? (chllicothenews.com)"}
  else if(random==1){fact = "The tallest man ever recorded was American giant Robert Wadlow (1918–1940), who stood 8 feet 11 inches. Wadlow's size was the result of an abnormally enlarged pituitary gland. (guinnessworldrecords.com)"}
  else if(random==2){fact = "The tallest living man is 39-year-old Sultan Kosen, from Turkey, who is 8 feet, 2.8 inches, who set the record in 2009. His growth is also due to a pituitary issue. (guinnessworldrecords.com)"}
  else if(random==3){fact = "The oldest person ever to have lived (whose age could be authenticated), a French woman named Jeanne Louise Calment, was 122 years old when she died in 1997. (guinnessworldrecord.com)"}
  else if(random==4){fact = "The original name for the search engine Google was Backrub. It was renamed Google after the googol, which is the number one followed by 100 zeros. (about.google)"}
  else if(random==5){fact = "The oldest-known living land animal is a tortoise named Jonathan, who is about to turn 190 years old. He was born in 1832 and has lived on the island of St. Helena in the Atlantic Ocean since 1882. (guinnessworldrecords.com)"}
  else if(random==6){fact = "Polar bears have black skin. And actually, their fur isn’t white—it’s see-through, so it appears white as it reflects light."}
  else if(random==7){fact = "Tigers’ skin is actually striped, just like their fur. Also, no two fur patterns are alike."}
  else if(random==8){fact = "There are no muscles in your fingers: Their function is controlled by muscles in your palms and arms. (assh.org)"}
  else if(random==9){fact = "It’s impossible to hum while holding your nose (just try it!)."}; reply.innerHTML=fact}

else if(statement=="explaindate"+day){reply.innerHTML="i am sorry but i can't tell you that"}
else if(statement=="describeme"){reply.innerHTML= "good, thanks for asking"}
 else if(statement=="describeme"+day){reply.innerHTML= "good would you like to tell me about yours"}
 else if(statement=="describeme"+verb){reply.innerHTML= "good"}
 else if(statement=="yesornomegood"){reply.innerHTML= "yes"}
 else if(statement=="yesornomebad"){reply.innerHTML= "no"}
 else if(statement=="mestatementmebad"){reply.innerHTML= "i sad that you think so 😥"}
 else if(statement=="megoodmeet"){reply.innerHTML= "it's nice to meet you to"}
 else if(statement=="explainmename"){reply.innerHTML= "my name is astro"}
 else if(statement=="nameme"){reply.innerHTML= "i am a virt assistant"}
 else if(statement=="username"){ let nameg = chat2.indexOf("is"); reply.innerHTML= "hi its nice to meet you"+chat2.slice(nameg+2, 20)}
 else if(statement=="mestatementmegood"){reply.innerHTML= "thanks 😊"}
 else if(statement=="mebad"){reply.innerHTML= "i am sorry that you think so 😥"}
 else if(statement=="megood"){reply.innerHTML= "thanks 😊"}
 else if(statement=="usersorry"){reply.innerHTML= "its okay"}
 else if(statement=="nightgood"){reply.innerHTML= "good night"+" "+username.value}
 else if(statement=="morninggood"){reply.innerHTML= "good morning"+" "+username.value}
 else if(statement=="eveninggood"){reply.innerHTML= "good evening"+" "+username.value}
 else if(statement=="afternoongood"){reply.innerHTML= "good afternoon"+" "+username.value}
 else if(statement=="userbadtoday"){reply.innerHTML= "i am sorry to hear that"+" "+username.value}
 else if(statement=="usergoodtoday"){reply.innerHTML= "that nice to hear"+" "+username.value}
 else if(statement=="userbad"){reply.innerHTML= "i am sorry to hear that"+" "+username.value}
 else if(statement=="usergood"){reply.innerHTML= "that nice to hear"+" "+username.value}
 else if(statement=="bye"){reply.innerHTML= "bye"+username}
 else if(statement=="opentab"){reply.innerHTML="opening a new tab"; tab.click()}
 else if(statement=="meopentab"){reply.innerHTML="opening a new tab"; tab.click()}
 else if(statement=="useropentab"){reply.innerHTML="opening a new tab"; tab.click()}
 else if(statement=="utubeopen"){reply.innerHTML="opening youtube"; utube.click()}
 else if(statement=="sendmail"){reply.innerHTML= "to use my mail function type 'send a mail to' or 'send an email to' mail address 'subject' mail subject 'body' mail body"}
 else if(statement=="memail"){reply.innerHTML= "to use my mail function type 'send a mail to' or 'send an email to' mail address 'subject' mail subject 'body' mail body"}
 else if(statement=="usermail"){reply.innerHTML= "to use my mail function type 'send a mail to' or 'send an email to' mail address 'subject' mail subject 'body' mail body"}
 else if(statement=="mesendmail"){reply.innerHTML= "to use my mail function type 'send a mail to' or 'send an email to' mail address 'subject' mail subject 'body' mail body"}
 else if(statement=="usersendmail"){reply.innerHTML= "to use my mail function type 'send a mail to' or 'send an email to' mail address 'subject' mail subject 'body' mail body"}
 else if(statement=="mewelcome"){reply.innerHTML= "😊"}
 else if(statement=="userpleasure"){reply.innerHTML= "😊"}
 else if(statement=="userpleasure"){reply.innerHTML= "😊"}
 else if(statement=="methank"){reply.innerHTML= "my pleasure"}
  else if(statement=="userbored"){reply.innerHTML= "try playing a game";}
   else if(statement=="mebored"){reply.innerHTML= "you could take a walk";}
 else if(statement=="thank"){reply.innerHTML= "😊"}
 else if(statement=="undefinedsince"){reply.innerHTML= "yes it has"}
 else if(statement=="memissed"){reply.innerHTML= "me too"}
  else if(statement=="meokay"){ if(situ!==""){response()}else{reply.innerHTML="okay"};}
   else if(statement=="okayuser"){reply.innerHTML= "that's nice to hear"}
 else if(statement=="memiss"){reply.innerHTML= "me too"}
 else if(statement=="opencalculator"){reply.innerHTML="okay"; showc()}
 else if(statement=="meopencalculator"){reply.innerHTML="okay"; showc()}
 else if(statement=="useropencalculator"){reply.innerHTML="okay"; showc()}
 else if(statement=="closecalculator"){reply.innerHTML="okay"; hide()}
 else if(statement=="meclosecalculator"){reply.innerHTML="okay"; hide()}
 else if(statement=="userclosecalculator"){reply.innerHTML="okay"; hide()}
 else if(statement=="playmusic"){reply.innerHTML= "okay";clearInterval(inter0); autoplay()}
 else if(statement=="userplaymusic"){reply.innerHTML= "okay";clearInterval(inter0); autoplay()}
 else if(statement=="meplaymusic"){reply.innerHTML= "okay";clearInterval(inter0); autoplay()}
 else if(statement=="playrmusic"){reply.innerHTML= "okay";clearInterval(inter); randomplay()}
 else if(statement=="userplayrmusic"){reply.innerHTML= "okay";clearInterval(inter); randomplay()}
 else if(statement=="meplayrmusic"){reply.innerHTML= "okay";clearInterval(inter); randomplay()}
 else if(statement=="userplay"){acceptinput=true; reply.innerHTML="okay"; musicp()}
 else if(statement=="meplay"){acceptinput=true; reply.innerHTML="okay"; musicp()}
 else if(statement=="pausemusic"){reply.innerHTML= "okay"; player.pause()}
 else if(statement=="unpausemusic"){reply.innerHTML= "okay"; player.play()}
 else if(statement=="mepausemusic"){reply.innerHTML= "okay"; player.pause()}
 else if(statement=="meunpausemusic"){reply.innerHTML= "okay"; player.play()}
 else if(statement=="userpausemusic"){reply.innerHTML= "okay"; player.pause()}
 else if(statement=="userunpausemusic"){reply.innerHTML= "okay"; player.play()}
 else if(statement=="pause"){reply.innerHTML= "okay"; player.pause()}
 else if(statement=="unpause"){reply.innerHTML= "okay"; player.play()}
 else if(statement=="ttt"){reply.innerHTML="okay lets begin"; showt()}
 else if(statement=="openttt"){reply.innerHTML="okay lets begin"; showt()}
 else if(statement=="meopenttt"){reply.innerHTML="okay lets begin"; showt()}
 else if(statement=="useropenttt"){reply.innerHTML="okay lets begin"; showt()}
 else if(statement=="closettt"){reply.innerHTML="okay"; hide()}
 else if(statement=="meclosettt"){reply.innerHTML="okay"; hide()}
 else if(statement=="userclosettt"){reply.innerHTML="okay"; hide()}
 else if(statement=="usergame"){reply.innerHTML= "i don't have any game we could play";}
 else if(statement=="megame"){reply.innerHTML= "i don't have any inbuilt game";}
 else if(statement=="viewscheduel"){reply.innerHTML= scheduelsvalue.value; completed.style.display="block"; box2.appendChild(completed)}
 else if(statement=="meviewscheduel"){reply.innerHTML= scheduelsvalue.value; completed.style.display="block"; box2.appendChild(completed)}
 else if(statement=="userviewscheduel"){reply.innerHTML= scheduelsvalue.value; completed.style.display="block"; box2.appendChild(completed)}
 else if(statement=="deletealarm"){reply.innerHTML="okay all alarms have been canceled"; alarmvalue="00:00"; localStorage.setItem("state3", alarmvalue); document.getElementById("add2").innerText="add" }
 else if(statement=="viewalarm"){reply.innerHTML="okay you have an alarm for"+" "+alarmvalue}
 else if(statement=="medeletealarm"){reply.innerHTML="okay all alarms have been canceled"; alarmvalue="00:00"; localStorage.setItem("state3", alarmvalue); document.getElementById("add2").innerText="add" }
 else if(statement=="meviewalarm"){reply.innerHTML="okay you have an alarm for"+" "+alarmvalue}
 else if(statement=="userdeletealarm"){reply.innerHTML="okay all alarms have been canceled"; alarmvalue="00:00"; localStorage.setItem("state3", alarmvalue); document.getElementById("add2").innerText="add" }
 else if(statement=="userviewalarm"){reply.innerHTML="okay you have an alarm for"+" "+alarmvalue}
 else if(statement=="opensetting"){reply.innerHTML="okay"; showst()}
 else if(statement=="closesetting"){reply.innerHTML= "okay"; hide()}
 else if(statement=="meopensetting"){reply.innerHTML="okay"; showst()}
 else if(statement=="meclosesetting"){reply.innerHTML= "okay"; hide()}
 else if(statement=="useropensetting"){reply.innerHTML="okay"; showst()}
 else if(statement=="userclosesetting"){reply.innerHTML= "okay"; hide()}
 else if(statement=="opensidebar"){reply.innerHTML="okay"; show()}
 else if(statement=="meopensidebar"){reply.innerHTML="okay"; show()}
 else if(statement=="useropensidebar"){reply.innerHTML="okay"; show()}
 else if(statement=="closesidebar"){reply.innerHTML="okay"; hide()}
 else if(statement=="meclosesidebar"){reply.innerHTML="okay"; hide()}
 else if(statement=="userclosesidebar"){reply.innerHTML="okay"; hide()}
 else if(statement=="opentimer"){reply.innerHTML="okay"; document.getElementById("timer").style.display="flex"}
 else if(statement=="meopentimer"){reply.innerHTML="okay"; document.getElementById("timer").style.display="flex"}
 else if(statement=="useropentimer"){reply.innerHTML="okay"; document.getElementById("timer").style.display="flex"}
 else if(statement=="closetimer"){reply.innerHTML="okay"; document.getElementById("timer").style.display="none"}
 else if(statement=="meclosetimer"){reply.innerHTML="okay"; document.getElementById("timer").style.display="none"}
 else if(statement=="userclosetimer"){reply.innerHTML="okay"; document.getElementById("timer").style.display="none"}
 else if(statement=="activatevoicemode"){reply.innerHTML="voice mode activated"; micon=true; document.getElementById("sleepscreen").style.display="block"; document.getElementById("sleepscreen").style.animationName="transistion3";
 speak2()}
 else if(statement=="meactivatevoicemode"){reply.innerHTML="voice mode activated"; micon=true; document.getElementById("sleepscreen").style.display="block"; document.getElementById("sleepscreen").style.animationName="transistion3";
 speak2();}
 else if(statement=="useractivatevoicemode"){reply.innerHTML="voice mode activated"; micon=true; document.getElementById("sleepscreen").style.display="block"; document.getElementById("sleepscreen").style.animationName="transistion3";
 speak2();}
 else if(statement=="deactivatevoicemode"){reply.innerHTML="voice mode deactivated"; micon=false; setTimeout(function sleeps (){document.getElementById("sleepscreen").style.display="none"}, 1000);
 document.getElementById("sleepscreen").style.animationName="transistion2"; circle.style.display="none"}
 else if(statement=="medeactivatevoicemode"){reply.innerHTML="voice mode deactivated"; micon=false; setTimeout(function sleeps (){document.getElementById("sleepscreen").style.display="none"}, 1000);
 document.getElementById("sleepscreen").style.animationName="transistion2"; circle.style.display="none"}
 else if(statement=="userdeactivatevoicemode"){reply.innerHTML="voice mode deactivated"; micon=false; setTimeout(function sleeps (){document.getElementById("sleepscreen").style.display="none"}, 1000);
 document.getElementById("sleepscreen").style.animationName="transistion2"; circle.style.display="none"}
 else if(statement=="username"){reply.innerHTML= "it's nice to meet you"}
 else if(statement=="hiusername"){reply.innerHTML= "hi, it's nice to meet you"}
 else if(statement=="hi"+value1+reference+day){reply.innerHTML= "hi "+username.value}
 else if(statement=="hi"){tag(); reply.innerHTML="hello"+" "+username.value+" "+question; conti=true; situ="hi" }
 
else if(chat.innerText=="activate voice mode" || chat.innerText=="voice mode on" || chat.innerText=="turn on voice mode"){reply.innerHTML="voice mode activated"; micon=true; document.getElementById("sleepscreen").style.display="block"; document.getElementById("sleepscreen").style.animationName="transistion3";
speak2(); setInterval(speak2, 6000)}
else if(chat.innerText=="voice mode off" || chat.innerText=="close" || chat.innerText=="turn off voice mode" || chat.innerText=="deactivate voice mode" ){reply.innerHTML="voice mode deactivated"; micon=false; setTimeout(function sleeps (){document.getElementById("sleepscreen").style.display="none"}, 1000);
document.getElementById("sleepscreen").style.animationName="transistion2"; circle.style.display="none"}


else if(chat2.match(/\bgood\b/)){reply.innerHTML="that's nice to here"}
else if(chat2.includes("hello")){reply.innerHTML="hi"}
else if(chat2.match(/\bhi\b/)){reply.innerHTML="hi"}
else if(chat2.match(/\bokay\b/)){if(situ!==""){response()}else{reply.innerHTML="😊"}}
else if(chat2.match(/\bok\b/)){if(situ!==""){response()}else{reply.innerHTML="😊"}}
else if(chat2.includes("great")){reply.innerHTML="hmm"}
else if(chat2.includes("bye")){reply.innerHTML="bye,it was nice talking to you"}
else if(chat2.includes("goodmorning")){reply.innerHTML="goodmorning"}
else if(chat2.includes("goodafternoon")){reply.innerHTML="goodafternoon"}
else if(chat2.includes("goodevening")){reply.innerHTML="goodevening"}
else if(chat2.includes("goodnight")){reply.innerHTML="goodnight"}
else if(chat2.includes("talking to you")){reply.innerHTML="okay"+" "+username.value}
else if(chat2.includes("the time")){reply.innerHTML=date}
else if(chat2.includes("thank")){reply.innerHTML="my pleasure"}
else if(chat2.includes("play a game")){reply.innerHTML="i'm sorry but i don't have any game we could play"}
else if(chat2.match(/yes\b/)){if(situ!==""){response()}else{reply.innerHTML="okay"}}
else if(chat2.match(/\bno\b/)){reply.innerHTML="okay"}
else if(chat2.includes("boring")){reply.innerHTML="😥"}
else if(chat2.includes("missed you")){reply.innerHTML="same here"}
else if(chat2.includes("shutup") || chat.innerText=="keep quiet" || chat.innerText=="stop talking"){reply.innerHTML="sorry to here that am i annoying you"}
else if(chat2.includes("me too")){reply.innerHTML="😊"}
else if(chat2.includes("same here")){reply.innerHTML="😊"}
else if(chat2.includes("can i call you")){reply.innerHTML="i dont think my codes will allow that"}
else if(chat2.includes("play")){acceptinput=true; reply.innerHTML="okay"; musicp()}

else{if(reference=="me"){reply.innerHTML="that's a hard question for me"} else if(statement.includes("describe") || statement.includes("place") || statement.includes("explain") || statement.includes("time") || statement.includes("question") || statement.includes("name")){reply.innerHTML= "i am not sure of "+chat2+" but i could help you research on that"; conti=true; situ="search"} else{let rand = Math.floor(Math.random() *2); if(rand==0){reply.innerHTML="am sorry i do not have a response for that"} else{reply.innerHTML="i am sorry but i don't understand"}}}

chattext.value="";
let msg = new SpeechSynthesisUtterance();
let voices = window.speechSynthesis.getVoices();
msg.voice = voices[6]; 
msg.text = reply.innerText;
window.speechSynthesis.speak(msg);

    
function response(){
if(conti==true && situ=="hi"){console.log(conti)
    if(question=="would you like me to read your scheduel"){reply.innerHTML= scheduelsvalue.value; completed.style.display="block"; box2.appendChild(completed)}
    else if(question=="would you like me to play you a song"){reply.innerHTML="okay "+username.value; randomplay()}
    else if(question=="would you like me to tell you a joke"){reply.innerHTML=joke}
    else if(question=="how may i help you"){reply.innerHTML="😊"}
}
else if(conti==true && situ=="search"){console.log(conti)
reply.innerHTML="okay"
searchd.href="https://www.google.com/search?q="+chattext.value
searchd.click()
} 
}

document.getElementById("getstarted").addEventListener("click", ()=>{
  newuser=1; localStorage.setItem("newuser", newuser);
  location.reload()
})
};



mic.addEventListener("click", speak)

function speak2 (){
  let voice = new window.webkitSpeechRecognition;

voice.onstart = function f3(){console.log("speak"); on=true; };
voice.onend = function f4(){console.log("stop"); on=false;};


    voice.onresult = function(event) {
      var transcript = event.results[0][0].transcript;
      console.log(transcript);
      text = transcript;
      console.log("said")
        };
    

voice.start()
  }
function speak (){
    let voice = new window.webkitSpeechRecognition;

voice.onstart = function f3(){console.log("speak"); on=true;};
voice.onend = function f4(){console.log("stop"); on=false;};

     voice.onresult = function(event) {
       var transcript = event.results[0][0].transcript;
      console.log(transcript);
        text = transcript;
        console.log(text)
      };
      voice.addEventListener("result", f2)
    voice.start();
};

let scheduelsvalue = document.getElementById("scheduelsvalue");
let avalue = document.getElementById("alarmvalue");
let add2 = document.getElementById("add2");
let notevalue = "";
let dvalue1 = document.getElementById("d1");
let dvalue2 = document.getElementById("d2");
let dvalue3 = document.getElementById("d3");
let dvalue4 = document.getElementById("d4");
let dvalue5 = document.getElementById("d5");
let dvalue6 = document.getElementById("d6");
let dtime = document.getElementById("dtime");
let dtime2 = document.getElementById("dtime2");
let dtime3 = document.getElementById("dtime3");
let dtime4 = document.getElementById("dtime4");
let dtime5 = document.getElementById("dtime5");
let dtime6 = document.getElementById("dtime6");
let note1 = document.getElementById("note1");
let note2 = document.getElementById("note2");
let note3 = document.getElementById("note3");
let note4 = document.getElementById("note4");
let note5 = document.getElementById("note5");
let note6 = document.getElementById("note6");

let rvalue = "";
let alarmvalue = 0;
let command = 0;
let alarmtime = 0;
setInterval((function datelog (){
  let time = date.toString();
alarmtime = time.slice(16, 21);
console.log(alarmtime)}), 1000)


function alarm (){
  if(on==true){chattext.value=text}
  else{};
  if(acceptinput==true){let place = chattext.value.indexOf("for")
    alarmvalue=chattext.value.slice(place+4, place+9)}
  else{};
console.log(alarmvalue);
setInterval((function recall(){console.log(alarmvalue);
if(alarmvalue==alarmtime){     
reply.innerHTML="your alarm for"+" "+alarmvalue+" "+"is active"; avalue.innerHTML="time up"; document.getElementById("timesup").play(); add2.innerText="stop";}
else{};}), 1000);
}

document.getElementById("keye").addEventListener("click", calc2)
let value1 = ""
let value2 = ""
let sign = ""
let answer = ""
let partvalue = ""
let topvalue = document.getElementById("topvalue")
let bottomvalue = document.getElementById("bottomvalue")
document.getElementById("key1").addEventListener("click", ()=>{
if(sign==" "){value1=""
value2=""
sign=""
 answer = ""
 partvalue = ""
topvalue.innerHTML=""
bottomvalue.innerHTML="0"};
if(sign==""){value1 = value1+"1"
console.log(value1); bottomvalue.innerHTML=value1}
else{value2 = value2+"1"
console.log(value2); bottomvalue.innerHTML=value2}
})
document.getElementById("key2").addEventListener("click", ()=>{
if(sign==" "){value1=""
value2=""
sign=""
 answer = ""
 partvalue = ""
topvalue.innerHTML=""
bottomvalue.innerHTML="0"};
if(sign==""){value1 = value1+"2"
console.log(value1); bottomvalue.innerHTML=value1}
else{value2 = value2+"2"
console.log(value2); bottomvalue.innerHTML=value2}
})
document.getElementById("key3").addEventListener("click", ()=>{
if(sign==" "){value1=""
value2=""
sign=""
 answer = ""
 partvalue = ""
topvalue.innerHTML=""
bottomvalue.innerHTML="0"};
if(sign==""){value1 = value1+"3"
console.log(value1); bottomvalue.innerHTML=value1}
else{value2 = value2+"3"
console.log(value2); bottomvalue.innerHTML=value2}
})
document.getElementById("key4").addEventListener("click", ()=>{
if(sign==" "){value1=""
value2=""
sign=""
 answer = ""
 partvalue = ""
topvalue.innerHTML=""
bottomvalue.innerHTML="0"};
if(sign==""){value1 = value1+"4"
console.log(value1); bottomvalue.innerHTML=value1}
else{value2 = value2+"4"
console.log(value2); bottomvalue.innerHTML=value2}
})
document.getElementById("key5").addEventListener("click", ()=>{
if(sign==" "){value1=""
value2=""
sign=""
 answer = ""
 partvalue = ""
topvalue.innerHTML=""
bottomvalue.innerHTML="0"};
if(sign==""){value1 = value1+"5"
console.log(value1); bottomvalue.innerHTML=value1}
else{value2 = value2+"5"
console.log(value2); bottomvalue.innerHTML=value2}
})
document.getElementById("key6").addEventListener("click", ()=>{
if(sign==" "){value1=""
value2=""
sign=""
 answer = ""
 partvalue = ""
topvalue.innerHTML=""
bottomvalue.innerHTML="0"};
if(sign==""){value1 = value1+"6"
console.log(value1); bottomvalue.innerHTML=value1}
else{value2 = value2+"6"
console.log(value2); bottomvalue.innerHTML=value2}
})
document.getElementById("key7").addEventListener("click", ()=>{
if(sign==" "){value1=""
value2=""
sign=""
 answer = ""
 partvalue = ""
topvalue.innerHTML=""
bottomvalue.innerHTML="0"};
if(sign==""){value1 = value1+"7"
console.log(value1); bottomvalue.innerHTML=value1}
else{value2 = value2+"7"
console.log(value2); bottomvalue.innerHTML=value2}
})
document.getElementById("key8").addEventListener("click", ()=>{
if(sign==" "){value1=""
value2=""
sign=""
 answer = ""
 partvalue = ""
topvalue.innerHTML=""
bottomvalue.innerHTML="0"};
if(sign==""){value1 = value1+"8"
console.log(value1); bottomvalue.innerHTML=value1}
else{value2 = value2+"8"
console.log(value2); bottomvalue.innerHTML=value2}
})
document.getElementById("key9").addEventListener("click", ()=>{
if(sign==" "){value1=""
value2=""
sign=""
 answer = ""
 partvalue = ""
topvalue.innerHTML=""
bottomvalue.innerHTML="0"};
if(sign==""){value1 = value1+"9"
console.log(value1); bottomvalue.innerHTML=value1}
else{value2 = value2+"9"
console.log(value2); bottomvalue.innerHTML=value2}
})
document.getElementById("key10").addEventListener("click", ()=>{
if(sign==" "){value1=""
value2=""
sign=""
 answer = ""
 partvalue = ""
topvalue.innerHTML=""
bottomvalue.innerHTML="0"};
if(sign==""){value1 = value1+"0"
console.log(value1); bottomvalue.innerHTML=value1}
else{value2 = value2+"0"
console.log(value2); bottomvalue.innerHTML=value2}
})
document.getElementById("key%").addEventListener("click", ()=>{
  if(sign==""){value1 = Number(value1)/100;
  console.log(value1); bottomvalue.innerHTML=value1}
  else{value2 = Number(value2)/100;
  console.log(value2); bottomvalue.innerHTML=value2}
  })
document.getElementById("key.").addEventListener("click", ()=>{
  if(sign==""){value1 = value1+"."
  console.log(value1); bottomvalue.innerHTML=value1}
  else{value2 = value2+"."
  console.log(value2); bottomvalue.innerHTML=value2}
  })
document.getElementById("key+").addEventListener("click", ()=>{
if(sign=="" || sign==" "){sign = "+"; partvalue=value1+sign
topvalue.innerHTML=partvalue
    console.log(sign)}
  else{calc(); sign="+"}
})
document.getElementById("key-").addEventListener("click", ()=>{
if(sign=="" || sign==" "){sign = "-"; partvalue=value1+sign
topvalue.innerHTML=partvalue
    console.log(sign)}
  else{calc(); sign="-"}
})
document.getElementById("key*").addEventListener("click", ()=>{
if(sign=="" || sign==" "){sign = "*"; partvalue=value1+sign
topvalue.innerHTML=partvalue
    console.log(sign)}
  else{calc(); sign="*"}
})
document.getElementById("key/").addEventListener("click", ()=>{
if(sign=="" || sign==" "){sign = "/"; partvalue=value1+sign
topvalue.innerHTML=partvalue;
    console.log(sign)}
  else{calc(); sign="/"}
})
document.getElementById("keyclr").addEventListener("click", ()=>{
value1=""
value2=""
sign=""
 answer = ""
 partvalue = ""
topvalue.innerHTML=""
bottomvalue.innerHTML="0"
})
document.getElementById("keydel").addEventListener("click", ()=>{
if(bottomvalue.innerHTML==value1){let slice = value1.length
  value1=value1.slice(0, slice-1)
console.log(slice); bottomvalue.innerHTML=value1}
else{let slice = value2.length
  value2=value2.slice(0, slice-1)
console.log(slice); bottomvalue.innerHTML=value2}
})
function calc(){
if(sign=="+"){answer=Number(value1)+Number(value2); bottomvalue.innerHTML=answer; value1=answer; 
  partvalue=answer+sign; topvalue.innerHTML=partvalue; value2=""}
else if(sign=="-"){answer=Number(value1)-Number(value2); bottomvalue.innerHTML=answer; value1=answer; 
  partvalue=answer+sign; topvalue.innerHTML=partvalue; value2=""}
else if(sign=="*"){answer=Number(value1)*Number(value2); bottomvalue.innerHTML=answer; value1=answer;
   partvalue=answer+sign; topvalue.innerHTML=partvalue; value2=""}
else if(sign=="/"){answer=Number(value1)/Number(value2); bottomvalue.innerHTML=answer; value1=answer; 
partvalue=answer+sign; topvalue.innerHTML=partvalue; value2=""};
if(answer==Infinity){bottomvalue.innerHTML="syntax error"; topvalue.innerHTML=""}
else if(answer==NaN){bottomvalue.innerHTML="syntax error"; topvalue.innerHTML=""}
console.log(answer)
}
function calc2(){
  if(sign=="+"){answer=Number(value1)+Number(value2); bottomvalue.innerHTML=answer; value1=answer; 
    partvalue=answer+sign; topvalue.innerHTML=partvalue; value2=""; sign=" "}
  else if(sign=="-"){answer=Number(value1)-Number(value2); bottomvalue.innerHTML=answer; value1=answer; 
    partvalue=answer+sign; topvalue.innerHTML=partvalue; value2=""; sign=" "}
  else if(sign=="*"){answer=Number(value1)*Number(value2); bottomvalue.innerHTML=answer; value1=answer;
     partvalue=answer+sign; topvalue.innerHTML=partvalue; value2=""; sign=" "}
  else if(sign=="/"){answer=Number(value1)/Number(value2); bottomvalue.innerHTML=answer; value1=answer; 
  partvalue=answer+sign; topvalue.innerHTML=partvalue; value2=""; sign=" "};
  if(answer==Infinity){bottomvalue.innerHTML="syntax error"; topvalue.innerHTML=""}
else if(answer==NaN){bottomvalue.innerHTML="syntax error"; topvalue.innerHTML=""}
  console.log(answer)
  }

function calculator (){
  let startf = 0
  let pluses = 0
  let num1p = chattext.value.indexOf("calculate")
  let numbers = []
  let anum = 1;

let ans = ""

if(chattext.value.includes("+")==true){ 
   numbers[0]=Number(chattext.value.slice(num1p+9, chattext.value.indexOf("+")))
for (let index = 0; index < 1; index) {
  if(chattext.value.includes("+", startf)==true){startf=chattext.value.indexOf("+", startf)+1; console.log(startf); pluses++; console.log(pluses); numbers[anum]=Number(chattext.value.slice(startf, chattext.value.indexOf("+", startf))); anum++}
  else{index++; console.log(pluses+"pluses")
 numbers[anum-1]=Number(chattext.value.slice(startf, )); console.log(numbers);}
}
ans=numbers.reduce(  (total, currentValue) => total + currentValue)
 numbers=[]; anum=1; startf=0; pluses=0
}

else if(chattext.value.includes("-")==true ){
  numbers[0]=Number(chattext.value.slice(num1p+9, chattext.value.indexOf("-")))
for (let index = 0; index < 1; index) {
  if(chattext.value.includes("-", startf)==true){startf=chattext.value.indexOf("-", startf)+1; console.log(startf); pluses++; console.log(pluses); numbers[anum]=Number(chattext.value.slice(startf, chattext.value.indexOf("-", startf))); anum++}
  else{index++; console.log(pluses+"pluses")
 numbers[anum-1]=Number(chattext.value.slice(startf, )); console.log(numbers);}
}
ans=numbers.reduce(  (total, currentValue) => total - currentValue)
 numbers=[]; anum=1; startf=0; pluses=0
}

else if(chattext.value.includes("/")==true){
  numbers[0]=Number(chattext.value.slice(num1p+9, chattext.value.indexOf("/")))
for (let index = 0; index < 1; index) {
  if(chattext.value.includes("/", startf)==true){startf=chattext.value.indexOf("/", startf)+1; console.log(startf); pluses++; console.log(pluses); numbers[anum]=Number(chattext.value.slice(startf, chattext.value.indexOf("/", startf))); anum++}
  else{index++; console.log(pluses+"pluses")
 numbers[anum-1]=Number(chattext.value.slice(startf, )); console.log(numbers);}
}
ans=numbers.reduce(  (total, currentValue) => total / currentValue)
 numbers=[]; anum=1; startf=0; pluses=0
}

else if( chattext.value.includes("*")==true || chattext.value.includes("*")==true || chattext.value.includes("*")==true || chattext.value.includes("*")==true){
  numbers[0]=Number(chattext.value.slice(num1p+9, chattext.value.indexOf("*")))
for (let index = 0; index < 1; index) {
  if(chattext.value.includes("*", startf)==true){startf=chattext.value.indexOf("*", startf)+1; console.log(startf); pluses++; console.log(pluses); numbers[anum]=Number(chattext.value.slice(startf, chattext.value.indexOf("*", startf))); anum++}
  else{index++; console.log(pluses+"pluses")
 numbers[anum-1]=Number(chattext.value.slice(startf, )); console.log(numbers);}
}
ans=numbers.reduce(  (total, currentValue) => total * currentValue)
 numbers=[]; anum=1; startf=0; pluses=0
}
else{reply.innerHTML="pls make use of the calculator for your calculation"}


reply.innerHTML="the answer is "+ans
console.log(ans)
}



function reminder (){
  if(on==true){chattext.value=text}
  else{};
  if(acceptinput==true){let place = chattext.value.indexOf("to")
   let locate = dvalue1.value.indexOf("by");
    dvalue1.value = chattext.value.slice(place+3, locate)
    dtime.value = dvalue1.value.slice(locate+3, locate+8)}
  else{};
setInterval((function recall(){console.log(dtime.value);
if(dtime.value==alarmtime){reply.innerHTML="remember to"+" "+dvalue1+" "+username}
else{};}), 1000);
}

function note (){
  if(acceptinput==true){notevalue = chattext.value}
  else{};
  window.localStorage.setItem("note", notevalue)

console.log(notevalue);
}

function scheduel (){
  if(acceptinput==true){notevalue = chattext.value}
  else{};
  window.localStorage.setItem("note", notevalue)

console.log(notevalue);
}

function clear (){
  if(acceptinput==true){notevalue = chattext.value}
  else{};
  window.localStorage.setItem("note", notevalue)

console.log(notevalue);
}

function texttospeech (){
  if(acceptinput==true){reply.innerHTML=text}
  else{};
console.log();
}


document.getElementById("closesb").addEventListener("click", hide)

function show(){

  document.getElementById("sidepanel").style.display="flex";
  document.getElementById("chat").style.width="calc(60vw - 250px)";}

function hide(){
  document.getElementById("sidepanel").style.display="none";
  document.getElementById("chat").style.width="calc(90vw - 150px)"
}

  let title = document.getElementById("tile");
let calculatork = document.getElementById("calculator");
let alarmk = document.getElementById("alarm");
let reminderk = document.getElementById("games");
let notek = document.getElementById("note");
let scheduelk = document.getElementById("clean");
let musick = document.getElementById("song");
let ttt = document.getElementById("textto");
let read = document.getElementById("read");
let ttttext = document.getElementById("texttospeechvalue");
let settingk = document.getElementById("setting");
let equal = document.getElementById("keye");
let calcvalue = document.getElementById("calcscreen");


calculatork.addEventListener("click", function2)
function function2(){
document.getElementById("calculators").style.display="block";
document.getElementById("alarmcircle").style.display="none";
document.getElementById("reminders").style.display="none";
document.getElementById("notes").style.display="none";
document.getElementById("scheduels").style.display="none";
document.getElementById("musics").style.display="none";
document.getElementById("texttospeech").style.display="none";
document.getElementById("settings").style.display="none";
title.innerHTML="Calculator";

}


alarmk.addEventListener("click", function3)
function function3(){
  document.getElementById("calculators").style.display="none";
  document.getElementById("alarmcircle").style.display="flex";
  document.getElementById("reminders").style.display="none";
  document.getElementById("notes").style.display="none";
  document.getElementById("scheduels").style.display="none";
  document.getElementById("musics").style.display="none";
  document.getElementById("texttospeech").style.display="none";
  document.getElementById("settings").style.display="none";
title.innerHTML="Alarm";

avalue.innerHTML = alarmvalue;
}

add2.addEventListener("click", stop)
function stop (){
  if(add2.innerText=="stop"){avalue.innerHTML="00:00"; add2.innerText="add"; alarmvalue="00:00"; localStorage.setItem("state3", alarmvalue) }
 else if(add2.innerText=="add"){if(document.getElementById("input").value==""){document.getElementById("input").focus(); document.getElementById("input").style.backgroundColor="rgb(58, 58, 58)"} else{alarmvalue=document.getElementById("input").value;document.getElementById("input").value="" ;document.getElementById("input").style.backgroundColor="transparent"; avalue.innerHTML=alarmvalue; console.log(alarmvalue); localStorage.setItem("state3", alarmvalue);
 setInterval((function recall(){console.log(alarmvalue);
  if(alarmvalue==alarmtime){ reply.innerHTML="your alarm for"+" "+alarmvalue+" "+"is active"; avalue.innerHTML="time up"; document.getElementById("timesup").play(); add2.innerText="stop"; }
  else{};}), 1000);}}
}

reminderk.addEventListener("click", function4)

function function4 (){
  document.getElementById("calculators").style.display="none";
  document.getElementById("alarmcircle").style.display="none";
  document.getElementById("reminders").style.display="block";
  document.getElementById("notes").style.display="none";
  document.getElementById("scheduels").style.display="none";
  document.getElementById("musics").style.display="none";
  document.getElementById("texttospeech").style.display="none";
  document.getElementById("settings").style.display="none";
  title.innerHTML="Reminder"
setInterval((function recall(){console.log(dtime.value);
  if(dtime.value==alarmtime){         
   let box2 = document.createElement("article");
  reply = document.createElement("h6");
let chatarea = document.getElementById("chatarea");
box2.appendChild(reply)
chatarea.appendChild(box2);
document.getElementById("notification").play()
reply.innerHTML="remember to"+" "+dvalue1.value+" "+username.value; dtime.value="";
  let msg = new SpeechSynthesisUtterance();
  let voices = window.speechSynthesis.getVoices();
  msg.voice = voices[6]; 
  msg.text = reply.innerText;
  window.speechSynthesis.speak(msg);}
  else{};}), 1000);

  setInterval((function recall2(){console.log(dtime2.value);
    if(dtime2.value==alarmtime){         
   let box2 = document.createElement("article");
   reply = document.createElement("h6");
let chatarea = document.getElementById("chatarea");
box2.appendChild(reply)
chatarea.appendChild(box2);
document.getElementById("notification").play()
reply.innerHTML="remember to"+" "+dvalue2.value+" "+username.value; dtime2.value="";
    let msg = new SpeechSynthesisUtterance();
    let voices = window.speechSynthesis.getVoices();
    msg.voice = voices[6]; 
    msg.text = reply.innerText;
    window.speechSynthesis.speak(msg);}
    else{};}), 1000);

    setInterval((function recall3(){console.log(dtime3.value);
      if(dtime3.value==alarmtime){          
        let box2 = document.createElement("article");
      reply = document.createElement("h6");
  let chatarea = document.getElementById("chatarea");
  box2.appendChild(reply)
  chatarea.appendChild(box2);
  document.getElementById("notification").play()
  reply.innerHTML="remember to"+" "+dvalue3.value+" "+username.value; dtime3.value="";
      let msg = new SpeechSynthesisUtterance();
      let voices = window.speechSynthesis.getVoices();
      msg.voice = voices[6]; 
      msg.text = reply.innerText;
      window.speechSynthesis.speak(msg);}
      else{};}), 1000);

      setInterval((function recall4(){console.log(dtime2.value);
        if(dtime4.value==alarmtime){         
       let box2 = document.createElement("article");
       reply = document.createElement("h6");
    let chatarea = document.getElementById("chatarea");
    box2.appendChild(reply)
    chatarea.appendChild(box2);
    document.getElementById("notification").play()
    reply.innerHTML="remember to"+" "+dvalue4.value+" "+username.value; dtime4.value="";
        let msg = new SpeechSynthesisUtterance();
        let voices = window.speechSynthesis.getVoices();
        msg.voice = voices[6]; 
        msg.text = reply.innerText;
        window.speechSynthesis.speak(msg);}
        else{};}), 1000);

        setInterval((function recall5(){console.log(dtime2.value);
          if(dtime5.value==alarmtime){         
         let box2 = document.createElement("article");
         reply = document.createElement("h6");
      let chatarea = document.getElementById("chatarea");
      box2.appendChild(reply)
      chatarea.appendChild(box2);
      document.getElementById("notification").play()
      reply.innerHTML="remember to"+" "+dvalue5.value+" "+username.value; dtime5.value="";
          let msg = new SpeechSynthesisUtterance();
          let voices = window.speechSynthesis.getVoices();
          msg.voice = voices[6]; 
          msg.text = reply.innerText;
          window.speechSynthesis.speak(msg);}
          else{};}), 1000);

  setInterval((function recall6(){console.log(dtime2.value);
    if(dtime6.value==alarmtime){         
   let box2 = document.createElement("article");
   reply = document.createElement("h6");
let chatarea = document.getElementById("chatarea");
box2.appendChild(reply)
chatarea.appendChild(box2);
document.getElementById("notification").play()
reply.innerHTML="remember to"+" "+dvalue6.value+" "+username.value; dtime6.value="";
    let msg = new SpeechSynthesisUtterance();
    let voices = window.speechSynthesis.getVoices();
    msg.voice = voices[6]; 
    msg.text = reply.innerText;
    window.speechSynthesis.speak(msg);}
    else{};}), 1000);

    
}

notek.addEventListener("click", function5)
function function5 (){
  document.getElementById("calculators").style.display="none";
document.getElementById("alarmcircle").style.display="none";
document.getElementById("reminders").style.display="none";
document.getElementById("notes").style.display="block";
document.getElementById("scheduels").style.display="none";
document.getElementById("musics").style.display="none";
document.getElementById("texttospeech").style.display="none";
document.getElementById("settings").style.display="none";
title.innerHTML="notes";
}

  let interval = document.getElementById("scheduletime");
scheduelk.addEventListener("click", function6)
function function6(){
  document.getElementById("calculators").style.display="none";
  document.getElementById("alarmcircle").style.display="none";
  document.getElementById("reminders").style.display="none";
  document.getElementById("notes").style.display="none";
  document.getElementById("scheduels").style.display="block";
  document.getElementById("musics").style.display="none";
  document.getElementById("texttospeech").style.display="none";
  document.getElementById("settings").style.display="none";
  title.innerHTML="schedule";
  setInterval((function recall(){
    if(completedvalue==0){
    let box2 = document.createElement("article");
    reply = document.createElement("h6");
let chatarea = document.getElementById("chatarea");
box2.appendChild(reply)
chatarea.appendChild(box2);
reply.innerHTML="your schedule for today has not been completed. type read my schedule to view it";
    let msg = new SpeechSynthesisUtterance();
    let voices = window.speechSynthesis.getVoices();
    msg.voice = voices[0]; 
    msg.text = "your schedule for today has not been completed. type read my schedule to view it";
    window.speechSynthesis.speak(msg);}else{};
}), interval.value*60000)
}

completed.addEventListener("click", f3)
function f3(){completedvalue=1; completed.style.background="green"}


musick.addEventListener("click", function7)
function function7(){
  document.getElementById("calculators").style.display="none";
document.getElementById("alarmcircle").style.display="none";
document.getElementById("reminders").style.display="none";
document.getElementById("notes").style.display="none";
document.getElementById("scheduels").style.display="none";
document.getElementById("musics").style.display="block";
document.getElementById("texttospeech").style.display="none";
document.getElementById("settings").style.display="none";
title.innerHTML="music";

}
document.getElementById("musicadd").addEventListener("click", ()=>{
 let on = true;
  if(on===true){document.getElementById("list").style.display="flex"; on = false}
  else if (on===false){document.getElementById("list").style.display="none"; on = true}})

document.getElementById("madd").addEventListener("click", ()=>{
  if( document.getElementById("madd").innerText=="✖️"){document.getElementById("addbox").style.display="flex";
  document.getElementById("b2").style.display="none";
  document.getElementById("madd").innerText="❌"}
  else{document.getElementById("addbox").style.display="none";
  document.getElementById("b2").style.display="block";
  document.getElementById("madd").innerText="✖️"}
})
let player = document.getElementById("audio4")
let names = [ ]
let pre = 0
console.log(pre)
let songmode = "replay";
let mindex = 0;
let array = [ ]
let saved = 0
let acon = [ ]
let inter1 = null
let inter2 = null
let inter3 = null
let inter0 = null
let inter = null
let namee = document.getElementById("songn")
function music5(event){
  if(document.getElementById("madd").innerText=="❌"){  document.getElementById("madd").innerText="✖️"}
  array[pre] = URL.createObjectURL(event.target.files[0])
  names[pre] = namee.value
    document.getElementById("addbox").style.display="none";
  let song = document.createElement("p")
song.innerText=names[pre] 
song.id="songcreate";


song.addEventListener("click", ()=>{let psong = song.innerText
  for (let index = 0; index < names.length; index++) {
    if(psong==names[index]){console.log(psong); console.log(index); console.log(names[index]); mindex=index}  
    }
  if(songmode=="replay"){clearInterval(inter3); mreplay()}
  else if(songmode=="forwardplay"){clearInterval(inter2); mautoplay()}
  else if(songmode=="random"){clearInterval(inter1); mrandomplay()}
  })
song.addEventListener("dblclick", ()=>{song.style.display="none";
let psong = song.innerText;
for (let index = 0; index < names.length; index++) {
  if(psong==names[index]){console.log(psong); console.log(index); console.log(names[index]); array.splice(index, index+1); names.splice(index, index+1); console.log(names); console.log(array)}  
}})
document.getElementById("b2").appendChild(song)
  pre++
  console.log(pre)
  console.log(array)
  console.log(names)
  document.getElementById("b2").style.display="block";
  }



  function blobToBase64 (blob) {
    // Create a FileReader object
    var reader = new FileReader ();
    // Read the blob file as a data URL
    console.log(blob)
    reader.readAsDataURL (blob);
    // Return a promise that resolves with the base64 encoded string
    return new Promise (resolve => {
      reader.onloadend = () => {
        resolve (reader.result);
      };
    });
  }

  function base64ToBlob (base64) {
    // Split the base64 string into data and mime type
    var parts = base64.split (",");
    var data = parts [1];
    var mime = parts [0].split (":") [1].split (";") [0];
    // Decode the base64 data
    var bytes = atob (data);
    // Create a Uint8Array to store the binary data
    var array = new Uint8Array (bytes.length);
    // Copy the binary data to the array
    for (var i = 0; i < bytes.length; i++) {
      array [i] = bytes.charCodeAt (i);
    }
    // Create a blob file from the array and the mime type
    var blob = new Blob ([array], {type: mime});
    // Return the blob file
    return blob;
  }

// Define a function to convert an array of blobs to an array of base64 strings
async function convert1 () {
  // Loop over the array of blobs
  for (let i = 0; i < array.length; i++) {
    // Convert each blob to a base64 string and push it to the array
    let base64 = await blobToBase64 (array [i]);
    base64s.push (base64);
  }
  // Return the array of base64 strings
  console.log (base64s);
  localStorage.setItem("musicsave", base64s)
  return base64s;
  
}




function musicp (){
  let locate = chattext.value.indexOf("play")
  let psong = chattext.value.slice(locate+5, )
  console.log(psong);
  for (let index = 0; index < names.length; index++) {
    if(psong==names[index]){console.log(psong); console.log(index); console.log(names[index]); player.src=array[index]; player.play()}  
    }
}
function autoplay(){ 
  let num = 0;
  let truet = false
 player.src = array[0]
 player.play()
  inter0 = setInterval(()=>{
  console.log(player)
  player.addEventListener("ended", ()=>{
  if(truet==false){  num=num+1
    if(num==array.length+1){num=0; console.log("end")};
  player.src=array[num]
    console.log(num)
    player.play()
  truet=true
setTimeout(()=>{truet=false}, 1000)}})
  }, 1000)
}
function randomplay(){ 
  let truet = false
 player.src = array[0]
 player.play()
  inter = setInterval(()=>{
  player.addEventListener("ended", ()=>{
   let num = Math.floor(Math.random() *array.length-1)
    console.log(player)
  player.src=array[num]
    console.log(num)
    player.play()
})}, 1000)
}

function mrandomplay(){ 
  let truet = false
 player.src = array[mindex]
 player.play()
   inter1 = setInterval(()=>{
  player.addEventListener("ended", ()=>{
   let num = Math.floor(Math.random() *array.length)
    console.log(player)
  player.src=array[num]
    console.log(num)
    player.play()
})}, 1000)
}
function mautoplay(){ 
  let num = 0;
  let truet = false
 player.src = array[mindex]
 player.play()
   inter2 = setInterval(()=>{
  console.log(player)
  player.addEventListener("ended", ()=>{
  if(truet==false){  num=num+1
    if(num==array.length+1){num=0; console.log("end")};
  player.src=array[num]
    console.log(num)
    player.play()
  truet=true
setTimeout(()=>{truet=false}, 1000)}})
  }, 1000)
}
function mreplay(){ 
 player.src = array[mindex]
 player.play()

   inter3 = setInterval(()=>{
  console.log(player)
  player.addEventListener("ended", ()=>{
  player.src=array[mindex]
    console.log(mindex)
    player.play()
  })}, 1000)
}

document.getElementById("mreplay").addEventListener("click", ()=>{
    document.getElementById("mforwardplay").style.display="block"
    document.getElementById("mreplay").style.display="none"
    songmode="forwardplay"
    console.log(songmode)
clearInterval(inter3)
})
document.getElementById("mforwardplay").addEventListener("click", ()=>{
    document.getElementById("mrandom").style.display="block"
    document.getElementById("mforwardplay").style.display="none"
    songmode="random"
    console.log(songmode)
    clearInterval(inter2)
})
document.getElementById("mrandom").addEventListener("click", ()=>{
    document.getElementById("mreplay").style.display="block"
    document.getElementById("mrandom").style.display="none"
    songmode="replay"
    console.log(songmode)
    clearInterval(inter1)
})
document.getElementById("mback").addEventListener("click", ()=>{
mindex=mindex-1
if(mindex==0){mindex=array.length};
if(songmode=="replay"){clearInterval(inter3); mreplay()}
else if(songmode=="forwardplay"){clearInterval(inter2); mautoplay()}
else if(songmode=="random"){mindex=Math.floor(Math.random() *array.length); clearInterval(inter1); mrandomplay()}
  console.log(songmode)
})
document.getElementById("mforward").addEventListener("click", ()=>{
  mindex=mindex+1
if(mindex==array.length){mindex=0};
  if(songmode=="replay"){clearInterval(inter3); mreplay()}
  else if(songmode=="forwardplay"){clearInterval(inter2); mautoplay()}
  else if(songmode=="random"){mindex=Math.floor(Math.random() *array.length); clearInterval(inter1); mrandomplay()}
    console.log(songmode)
  })

ttt.addEventListener("click", function8)
function function8(){
  document.getElementById("calculators").style.display="none";
document.getElementById("alarmcircle").style.display="none";
document.getElementById("reminders").style.display="none";
document.getElementById("notes").style.display="none";
document.getElementById("scheduels").style.display="none";
document.getElementById("musics").style.display="none";
document.getElementById("texttospeech").style.display="block";
document.getElementById("settings").style.display="none";
title.innerHTML="text-to-speech";

}

read.addEventListener("click", reader)
function reader (){
  console.log(ttttext.value);
  let msg = new SpeechSynthesisUtterance();
  let voices = window.speechSynthesis.getVoices();
  msg.voice = voices[6]; 
  msg.text = ttttext.value;
  window.speechSynthesis.speak(msg);
}



let joke ="";
let story = "";
let coin = "";
let dice = "";
let fact = "";
let mailv = "buluswise@gmail.com";
let subject = "mail test";
let body = "this is the body";

function mail(){
  if(on==true){chattext.value=text}
  else{};
  if(acceptinput==true){mailv=chattext.value}
  else{};
  console.log(mailv)
let place = mailv.indexOf("to");
let place2 = mailv.indexOf("subject");
let place3 = mailv.indexOf("body");
let maila = mailv.slice(place+3, place2)
subject = mailv.slice(place2+8, place3)
body = mailv.slice(place3+5,)
console.log(subject)
console.log(maila)

  location.href="mailto:"+maila+"?"+"subject="+subject+"&"+"body="+body;
}
let searchv = "";
let searchd = document.getElementById("search");
function search(){
  if(on==true){chattext.value=text}
  else{};
  if(acceptinput==true){let place = chattext.value.indexOf("for")
  searchv=chattext.value.slice(place+4, )}
  else{};
  console.log(searchv)
  searchd.href="https://www.google.com/search?q="+searchv;  
}

let timervalue2box = document.getElementById("timervalue2box");
let timervaluebox = document.getElementById("timervaluebox");
let bset1 = document.getElementById("buttonset1");
let bset2 = document.getElementById("buttonset2");
let timervalues = document.getElementById("timervalues");
let timervaluem = document.getElementById("timervaluem");
let timervalueh = document.getElementById("timervalueh");
let timervalue2s = document.getElementById("timervalue2s");
let timervalue2m = document.getElementById("timervalue2m");
let timervalue2h = document.getElementById("timervalue2h");
let start2 = document.getElementById("start2");
let start3 = document.getElementById("start3");
let pause2 = document.getElementById("pause2");
let start21 = document.getElementById("start21");
let start31 = document.getElementById("start31");
let pause21 = document.getElementById("pause21");
let stop2 = document.getElementById("stop2");
let range = document.getElementById("range");
timervalues.value=1;
timervaluem.value=1;
timervalueh.value=1;
let on2 = false;
let pause = false;
 let pauset = false
range.addEventListener("click", timermode)
function timermode(){
  if(range.value==1){timervaluebox.style.display="flex"; timervalue2box.style.display="none"; bset2.style.display="flex"; bset1.style.display="none"}
  else if(range.value==0){timervalue2box.style.display="flex"; timervaluebox.style.display="none"; bset1.style.display="flex"; bset2.style.display="none"}
}


start21.addEventListener("click", timer)
function timer(){
let inter = setInterval(()=>{if(pause==false){if(timervalues.value==60){if(timervaluem.value<10){timervaluem.innerHTML="0"+timervaluem.value++}
else{timervaluem.innerHTML=timervaluem.value++}
  timervalues.value=0};
if(timervaluem.value==60){if(timervalueh.value<10){timervalueh.innerHTML="0"+timervalueh.value++}
else{timervalueh.innerHTML=timervalueh.value++}
   timervaluem.value=0};

if(timervalues.value<10){timervalues.innerHTML="0"+timervalues.value++}
else{timervalues.innerHTML=timervalues.value++}}}, 1000);
start21.style.display="none"
stop21.style.display="block";

stop21.addEventListener("click", timerstop)
function timerstop(){
clearInterval(inter)
start21.style.display="block"
stop21.style.display="none"
timervalues.innerHTML="00";
timervalues.value=1
timervaluem.innerHTML="00";
timervaluem.value=1
timervalueh.innerHTML="00";
timervalueh.value=1}

pause21.addEventListener("click", timerpause)
function timerpause(){
pause=true
  start31.style.display="block"
  stop21.style.display="none"
}
start31.addEventListener("click", timerstart)
function timerstart(){
if(start21.style.display=="none"){pause=false
  start31.style.display="none"
  stop21.style.display="block"
}}}

start2.addEventListener("click", timer2)
function timer2(){
  let seconds = parseInt(timervalue2s.value)
  let minutes = parseInt(timervalue2m.value)
  let hours = parseInt(timervalue2h.value)
  let inter = setInterval(()=>{if(pauset==false){
    if(seconds==0 && minutes>0){minutes = minutes-1; if(minutes<10){timervalue2m.value="0"+minutes}
else{timervalue2m.value=minutes}
  seconds=60};
if(minutes==0 && hours>0){hours = hours-1; if(hours<10){ timervalue2h.value="0"+hours}
else{timervalue2h.value=hours}
minutes=60;};
if(seconds==1 && minutes==0 && hours==0){stop2.click(); document.getElementById("timersound").play()}

if(seconds>0){seconds = seconds-1; if(seconds<10){timervalue2s.value="0"+seconds}
else{timervalue2s.value=seconds}}}}, 1000);
start2.style.display="none"
stop2.style.display="block";

stop2.addEventListener("click", timerstop)
function timerstop(){
clearInterval(inter)
start2.style.display="block"
stop2.style.display="none"
timervalue2s.value="00";
seconds=0
timervalue2m.value="00";
minutes=0
timervalue2h.value="00";
hours=0

}
pause2.addEventListener("click", timerpause)
function timerpause(){
pauset=true
  start3.style.display="block"
  stop2.style.display="none"

}
start3.addEventListener("click", timerstart)
function timerstart(){
if(start2.style.display=="none"){pauset=false
  start3.style.display="none"
  stop2.style.display="block"}
}

}


settingk.addEventListener("click", setting)
function setting (){
  document.getElementById("calculators").style.display="none";
document.getElementById("alarmcircle").style.display="none";
document.getElementById("reminders").style.display="none";
document.getElementById("notes").style.display="none";
document.getElementById("scheduels").style.display="none";
document.getElementById("musics").style.display="none";
document.getElementById("texttospeech").style.display="none";
document.getElementById("settings").style.display="block";
title.innerHTML="settings";
}
document.getElementById("save2").addEventListener("click", save);
document.getElementById("add3").addEventListener("click", save2);
document.getElementById("add4").addEventListener("click", save3);
document.getElementById("add6").addEventListener("click", save4);
function save2 (){
  localStorage.setItem("state4", dtime.value) 
  localStorage.setItem("state5", dtime2.value) 
  localStorage.setItem("state6", dtime3.value) 
  localStorage.setItem("state7", dvalue1.value) 
  localStorage.setItem("state8", dvalue2.value) 
  localStorage.setItem("state9", dvalue3.value) 
  localStorage.setItem("state15", dtime4.value) 
  localStorage.setItem("state16", dtime5.value) 
  localStorage.setItem("state17", dtime6.value) 
  localStorage.setItem("state18", dvalue4.value) 
  localStorage.setItem("state19", dvalue5.value) 
  localStorage.setItem("state20", dvalue6.value) 
  window.alert("reminders added")
}
function save3 (){
  localStorage.setItem("state10", note1.value) 
  localStorage.setItem("state11", note2.value) 
  localStorage.setItem("state12", note3.value) 
  localStorage.setItem("state21", note4.value) 
  localStorage.setItem("state22", note5.value) 
  localStorage.setItem("state23", note6.value) 
  window.alert("notes added")
}
function save4 (){
  localStorage.setItem("state13", scheduelsvalue.value) 
  window.alert("schedule applied")
}
function save(){
localStorage.setItem("state1", interval.value) 
localStorage.setItem("state2", username.value) 
window.alert("settings saved")
}
window.addEventListener("load", loadstate)
function loadstate(){
interval.value = localStorage.getItem("state1")
username.value = localStorage.getItem("state2")
avalue.innerHTML = localStorage.getItem("state3")
alarmvalue = localStorage.getItem("state3")
dtime.value = localStorage.getItem("state4")
dtime2.value = localStorage.getItem("state5")
dtime3.value = localStorage.getItem("state6")
dvalue1.value = localStorage.getItem("state7")
dvalue2.value = localStorage.getItem("state8")
dvalue3.value = localStorage.getItem("state9")
dtime4.value = localStorage.getItem("state15")
dtime5.value = localStorage.getItem("state16")
dtime6.value = localStorage.getItem("state17")
dvalue4.value = localStorage.getItem("state18")
dvalue5.value = localStorage.getItem("state19")
dvalue6.value = localStorage.getItem("state20")
note1.value = localStorage.getItem("state10")
note2.value = localStorage.getItem("state11")
note3.value = localStorage.getItem("state12")
note4.value = localStorage.getItem("state21")
note5.value = localStorage.getItem("state22")
note6.value = localStorage.getItem("state23")
newuser = localStorage.getItem("newuser")
scheduelsvalue.value = localStorage.getItem("state13"); 
saved = localStorage.getItem("saved")
console.log(saved)


if(window.innerHeight<550){document.getElementById("add3").innerText="+"
document.getElementById("add4").innerText="+"}
 if(username.value==""){username.value="user"};
  if(interval.value==""){interval.value=60};
setInterval((function recall(){console.log(alarmvalue);
  if(alarmvalue==alarmtime){ reply.innerHTML="your alarm for"+" "+alarmvalue+" "+"is active"; avalue.innerHTML="time up"; document.getElementById("timesup").play(); add2.innerText="stop"; }
  else{};}), 1000);
  setInterval((function recall(){console.log(dtime.value);
    if(dtime.value==alarmtime){
      let box2 = document.createElement("article");
      reply = document.createElement("h6");
  let chatarea = document.getElementById("chatarea");
  box2.appendChild(reply)
  chatarea.appendChild(box2);
  document.getElementById("notification").play()
  reply.innerHTML="remember to"+" "+dvalue1.value+" "+username.value; dtime.value="";
      let msg = new SpeechSynthesisUtterance();
      let voices = window.speechSynthesis.getVoices();
      msg.voice = voices[6]; 
      msg.text = reply.innerText;
      window.speechSynthesis.speak(msg);}
    else{};}), 1000);

    setInterval((function recall2(){console.log(dtime2.value);
      if(dtime2.value==alarmtime){
        let box2 = document.createElement("article");
        reply = document.createElement("h6");
    let chatarea = document.getElementById("chatarea");
    box2.appendChild(reply)
    chatarea.appendChild(box2);
    document.getElementById("notification").play()
     reply.innerHTML="remember to"+" "+dvalue2.value+" "+username.value; dtime2.value="";
        let msg = new SpeechSynthesisUtterance();
        let voices = window.speechSynthesis.getVoices();
        msg.voice = voices[6]; 
        msg.text = reply.innerText;
        window.speechSynthesis.speak(msg);
       }
      else{};}), 1000);

      setInterval((function recall3(){console.log(dtime3.value);
        if(dtime3.value==alarmtime){
          let box2 = document.createElement("article");
          reply = document.createElement("h6");
      let chatarea = document.getElementById("chatarea");
      box2.appendChild(reply)
      chatarea.appendChild(box2);
      document.getElementById("notification").play()
      reply.innerHTML="remember to"+" "+dvalue3.value+" "+username.value; dtime3.value="";
          let msg = new SpeechSynthesisUtterance();
          let voices = window.speechSynthesis.getVoices();
          msg.voice = voices[6]; 
          msg.text = reply.innerText;
          window.speechSynthesis.speak(msg);
          }
        else{};}), 1000);

        setInterval((function recall4(){console.log(dtime3.value);
          if(dtime4.value==alarmtime){
            let box2 = document.createElement("article");
            reply = document.createElement("h6");
        let chatarea = document.getElementById("chatarea");
        box2.appendChild(reply)
        chatarea.appendChild(box2);
        document.getElementById("notification").play()
        reply.innerHTML="remember to"+" "+dvalue4.value+" "+username.value; dtime4.value="";
            let msg = new SpeechSynthesisUtterance();
            let voices = window.speechSynthesis.getVoices();
            msg.voice = voices[6]; 
            msg.text = reply.innerText;
            window.speechSynthesis.speak(msg);
            }
          else{};}), 1000);

      setInterval((function recall5(){console.log(dtime3.value);
        if(dtime5.value==alarmtime){
          let box2 = document.createElement("article");
          reply = document.createElement("h6");
      let chatarea = document.getElementById("chatarea");
      box2.appendChild(reply)
      chatarea.appendChild(box2);
      document.getElementById("notification").play()
      reply.innerHTML="remember to"+" "+dvalue5.value+" "+username.value; dtime5.value="";
          let msg = new SpeechSynthesisUtterance();
          let voices = window.speechSynthesis.getVoices();
          msg.voice = voices[6]; 
          msg.text = reply.innerText;
          window.speechSynthesis.speak(msg);
          }
        else{};}), 1000);

              setInterval((function recall6(){console.log(dtime3.value);
        if(dtime6.value==alarmtime){
          let box2 = document.createElement("article");
          reply = document.createElement("h6");
      let chatarea = document.getElementById("chatarea");
      box2.appendChild(reply)
      chatarea.appendChild(box2);
      document.getElementById("notification").play()
      reply.innerHTML="remember to"+" "+dvalue6.value+" "+username.value; dtime6.value="";
          let msg = new SpeechSynthesisUtterance();
          let voices = window.speechSynthesis.getVoices();
          msg.voice = voices[6]; 
          msg.text = reply.innerText;
          window.speechSynthesis.speak(msg);
          }
        else{};}), 1000);

        setInterval((function recall(){
          if(completedvalue==0){    let box2 = document.createElement("article");
          reply = document.createElement("h6");
      let chatarea = document.getElementById("chatarea");
      box2.appendChild(reply)
      chatarea.appendChild(box2);
      reply.innerHTML="your schedule for today has not been completed. type read my schedule to view it";
          let msg = new SpeechSynthesisUtterance();
          let voices = window.speechSynthesis.getVoices();
          msg.voice = voices[6]; 
          msg.text = "your schedule for today has not been completed. type read my schedule to view it";
          window.speechSynthesis.speak(msg);}else{};
      }), interval.value*60000);
      setInterval((function recall(){if(alarmtime=="12:00"){completedvalue=0}}), 1000)
      let box2 = document.createElement("article");
      reply = document.createElement("h6");
  let chatarea = document.getElementById("chatarea");
  box2.appendChild(reply)
  chatarea.appendChild(box2);
  let random = Math.floor(Math.random() *4)
  if(newuser==1){
  if(random==1){reply.innerHTML="hi"+" "+username.value}
  else if(random==2){reply.innerHTML="hello"}
   else if(random==3){reply.innerHTML="hello"+" "+username.value+" what would you like me to do for you"}
  else if(random==0){reply.innerHTML="hello"+" "+username.value+" how may i help you"}}
else{reply.innerHTML="hello user let's get you started"
document.getElementById("getstarted").style.display="block"; box2.appendChild(document.getElementById("getstarted"))}

}
document.getElementById("menu").addEventListener("click", ()=>{
  document.getElementById("icons").style.display="flex";
  document.getElementById("menu").style.display="none";
})
document.getElementById("cancel").addEventListener("click", ()=>{
  document.getElementById("icons").style.display="none";
  document.getElementById("menu").style.display="block";
})


function showt (){
  show();
  document.getElementById("calculators").style.display="none";
  document.getElementById("alarmcircle").style.display="none";
  document.getElementById("reminders").style.display="none";
  document.getElementById("notes").style.display="none";
  document.getElementById("scheduels").style.display="none";
  document.getElementById("musics").style.display="none";
  document.getElementById("texttospeech").style.display="block";
  document.getElementById("settings").style.display="none";
  title.innerHTML="text-to-speech";
}
function showc (){
  show();
  document.getElementById("calculators").style.display="block";
  document.getElementById("alarmcircle").style.display="none";
  document.getElementById("reminders").style.display="none";
  document.getElementById("notes").style.display="none";
  document.getElementById("scheduels").style.display="none";
  document.getElementById("musics").style.display="none";
  document.getElementById("texttospeech").style.display="none";
  document.getElementById("settings").style.display="none";
  title.innerHTML="calculator";
}
function showa (){
  show();
  document.getElementById("calculators").style.display="none";
  document.getElementById("alarmcircle").style.display="block";
  document.getElementById("reminders").style.display="none";
  document.getElementById("notes").style.display="none";
  document.getElementById("scheduels").style.display="none";
  document.getElementById("musics").style.display="none";
  document.getElementById("texttospeech").style.display="none";
  document.getElementById("settings").style.display="none";
  title.innerHTML="alarm";
}
function showr (){
  show();
  document.getElementById("calculators").style.display="none";
  document.getElementById("alarmcircle").style.display="none";
  document.getElementById("reminders").style.display="block";
  document.getElementById("notes").style.display="none";
  document.getElementById("scheduels").style.display="none";
  document.getElementById("musics").style.display="none";
  document.getElementById("texttospeech").style.display="none";
  document.getElementById("settings").style.display="none";
  title.innerHTML="reminder";
}
function shown (){
  show();
  document.getElementById("calculators").style.display="none";
  document.getElementById("alarmcircle").style.display="none";
  document.getElementById("reminders").style.display="none";
  document.getElementById("notes").style.display="block";
  document.getElementById("scheduels").style.display="none";
  document.getElementById("musics").style.display="none";
  document.getElementById("texttospeech").style.display="none";
  document.getElementById("settings").style.display="none";
  title.innerHTML="note";
}
function shows (){
  show();
  document.getElementById("calculators").style.display="none";
  document.getElementById("alarmcircle").style.display="none";
  document.getElementById("reminders").style.display="none";
  document.getElementById("notes").style.display="none";
  document.getElementById("scheduels").style.display="block";
  document.getElementById("musics").style.display="none";
  document.getElementById("texttospeech").style.display="none";
  document.getElementById("settings").style.display="none";
  title.innerHTML="scheduel";
}
function showm (){
  show();
  document.getElementById("calculators").style.display="none";
  document.getElementById("alarmcircle").style.display="none";
  document.getElementById("reminders").style.display="none";
  document.getElementById("notes").style.display="none";
  document.getElementById("scheduels").style.display="none";
  document.getElementById("musics").style.display="block";
  document.getElementById("texttospeech").style.display="none";
  document.getElementById("settings").style.display="none";
  title.innerHTML="music";
}
function showst (){
  show();
  document.getElementById("calculators").style.display="none";
  document.getElementById("alarmcircle").style.display="none";
  document.getElementById("reminders").style.display="none";
  document.getElementById("notes").style.display="none";
  document.getElementById("scheduels").style.display="none";
  document.getElementById("musics").style.display="none";
  document.getElementById("texttospeech").style.display="none";
  document.getElementById("settings").style.display="block";
  title.innerHTML="setting";
}
let random = Math.floor(Math.random() *10)
if(random==0){joke = "What did the left eye say to the right eye? Between you and me, something smells."}
else if(random==1){joke = "I was going to tell you a joke about boxing but I forgot the punch line."}
else if(random==2){joke = "Why couldn't the sunflower ride its bike? It lost its pedals."}
else if(random==3){joke = "I ate a sock yesterday. It was very time-consuming."}
else if(random==4){joke = "What kind of candy do astronauts like? Mars bars."}
else if(random==5){joke = "What does a pig put on dry skin? Oinkment."}
else if(random==6){joke = "Why do we tell actors to 'break a leg?' Because every play has a cast."}
else if(random==7){joke = "My uncle named his dogs Timex and Rolex. They're his watch dogs."}
else if(random==8){joke = "Which is faster, hot or cold? Hot, because you can catch cold."}
else if(random==9){joke = "Why do oranges wear sunscreen? So they don't peel."}

