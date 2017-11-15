/*var myImage = new Image(100, 200);
myImage.src = 'Link_the_faces_of_evil_Intro/2.png';
document.body.appendChild(myImage);




myImage.document.getElementById("myDIV");*/



var output = document.getElementById('output'),
    trs;

var trNew  = document.createElement('tr');

var thNavi = document.createElement('th');
var tdDevs = document.createElement('td');
var tdPart = document.createElement('td');

thNavi.setAttribute('scope', 'row');
thNavi.appendChild(document.createTextNode('Firefox'));
tdDevs.appendChild(document.createTextNode('Mozilla'));
tdPart.appendChild(document.createTextNode('27,8%'));

trNew.appendChild(thNavi);
trNew.appendChild(tdDevs);
trNew.appendChild(tdPart);

if (output) {
    trs = output.getElementsByTagName('tr');

    if (trs[2]) { // Le <tr> de Chrome
        trs[2].parentNode.insertBefore(trNew, trs[2]);
    }
}
