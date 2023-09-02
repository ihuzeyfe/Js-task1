var imgClick = 0;
function telephoneClick() {
  imgClick += 1;
  document.getElementById("changeContent").innerHTML = imgClick + " Kez Dokundun Yazıklar Olsun!!!";
}

function refresh(){
    document.getElementById("changeContent").innerHTML = " hiç bakmadın!";
    imgClick=0;
}
