
var names = ["mum","dad","cheese boii","little beutiful fun annoyence"];
var images = ["Kurumi_(Anime).png","Grisha_Jaeger_(Anime)_character_image.png","l.png","chheeeeese.png"]


var i = 0
function update() {
   i++;
   var numberofinarray = 3;
   if (i > numberofinarray)
       {i = 0;}
   var updateName = names[i];
   var updateImage = images[i];  
   document.getElementById("family_member_name").innerHTML = updateName;
   document.getElementById("family_member_image").src = updateImage;  
}
