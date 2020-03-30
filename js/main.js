var offsetX = 0;
var offsetY = 0;
var memoCurrentId = 1;
var memoArray = new Array();

//メモクラス
function Memo(id, text, color, x, y) {

    this.id = "memo" + id;
    this.text = text;
    this.color = color;
    this.x = x;
    this.y = y;

    this.create = function () {
        var memoElement = documet.createElement("a");

        memoElement.href = "#";
        memoElement.id = this.id;
        memoElement.className = "memo " + this.color;
        memoElement.draggable = true;
        memoElement.ondragstart = dragMemo;
        memoElement.innerHTML = this.text;

        var memoArea = document.getElementById("memoArea");
        memoArea.appendChild(memoElement);
    };
}

Memo.prototype.move = function (x, y) {

    this.x = x;
    this.y = y;

    var memoElement = document.getElementById(this.id);
    memoElement.style.left = x + "px";
    memoElement.style.top = y + "px";
};


function dragMemo(event) {
    event.dataTransfer.setData("text", event.target.id);

    var memoElement = document.getElementById(event.target.id);

    offsetX = event.clientX - memoElement.offsetLeft;
    offsetY = event.clientY - memoElement.offsetTop;
}

function dropMemo(event) {

    var id = event.dataTransfer.getData("text");
    //
    var memoElement = document.getElementById(id);
    memoElement.style.left = event.clientX - offsetX + "px";
    memoElement.style.top = event.clientY - offsetY + "px";
    //
    // var memo = memoArray[id];

    // memo.move(event.clientX - offsetX, event.clientY - offsetY);

}

function dragOverMemo(event) {
    event.preventDefault();
}


function addMemo() {
    var memoText = document.getElementById("memoText").value;

    var memoColr = "yellow";

    if (document.getElementById("memoY").checked) memoColor = "yellow";
    if (document.getElementById("memoR").checked) memoColor = "red";
    if (document.getElementById("memoG").checked) memoColor = "green";

    //
    var memoElement = document.createElement("a");

    memoElement.href = "#";
    memoElement.id = "memo" + memoCurrentId;
    memoElement.className = "memo " + memoColor;
    memoElement.draggable = true;

    memoElement.ondragstart = dragMemo;
    memoElement.innerHTML = memoText;

    var memoArea = document.getElementById("memoArea");
    memoArea.appendChild(memoElement);
    //

    // var memo = new Memo(memoCurrentId, memoText, memoColr, 50, 80);
    // memo.create();
    // memoArray[memo.id] = memo;

    memoCurrentId++;
}
