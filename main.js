var imagens = [
    "https://i.postimg.cc/MGn9GJXw/family.jpg",
    "https://i.postimg.cc/qqyYvVbq/grandpa.jpg",
    "https://i.postimg.cc/wjMnFtMX/father.jpg",
    "https://i.postimg.cc/5ymDKL83/bro.jpg",
    "https://i.postimg.cc/JnL6wtrd/sister.jpg",
    "https://i.postimg.cc/bw5W5zSK/mother.jpg",
];

var names = [
    "album da familia do Nico",
    "Luiz",
    "Marcela",
    "Nicolas",
    "Jane",
    "Modestino",
];

var i = 0;
function update()
{
    i++;
    var numbersOfFamilyMemberInArray =5
    if(i > numbersOfFamilyMemberInArray )
{
i=0;
}
var updatedImage = images[i];
var updatedNames = names[i];
document.getElementById("family_member_name").src = updatedImage;
document.getElementById("family_member_name").innerHTML = updatedImage;







