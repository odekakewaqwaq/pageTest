// var r = 50;

// function setup() {
//   createCanvas(480, 240);
// }

// function draw() {
//   noStroke();
//   background('skyblue');

//   if (mouseIsPressed === true) {
//     fill('pink');
//   } else {
//     fill('white');
//   }

//   // ellipse(mouseX, mouseY, 50, 50);
//   ellipse(mouseX, mouseY, r, r);
// }

// function mousePressed() {
//   r += 10;
//   return false;
// }

//---------------------------------------------

//円のXY座標の変数を用意する
var x,y;
//円の座標とマウス座標の差分（ずれ）の変数
var dx,dy;
//ドラッグ開始終了のフラグを用意
//boolean startDrag;
//円の半径
var r=30;

function setup(){
  createCanvas(600,600);//画面サイズ設定
  stroke(255);//線色を白

  x=width/2;//円を画面中心に配置しておく
  y=height/2;
}

function draw(){
  background('skyblue')
  
  //ドラッグ中の場合
  if(mouseIsPressed == true){
    //マウス座標に差分を加えた値を円の座標に代入
    x=mouseX+dx;
    y=mouseY+dy;
  }

  //円を描画する
  ellipse(x,y,r*2,r*2);
}

function mousePressed(){
  //円中心座標とマウス座標の距離が円半径以内の場合
  if(dist(x,y,mouseX,mouseY)<=r){
    //ドラッグ用フラグをtrue（ドラッグ中）にする
    startDrag=true;
    //円の座標とマウス座標の差分を求めておく
    dx=x-mouseX;
    dy=y-mouseY;
  }
}

function mouseReleased(){
  //ドラッグ用フラグをfalse（ドラッグなし）にする
  startDrag=false;
}