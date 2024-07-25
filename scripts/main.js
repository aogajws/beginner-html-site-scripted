const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/firefox-icon.png") {
    myImage.setAttribute("src", "images/firefox2.jpg");
  } else {
    myImage.setAttribute("src", "images/firefox-icon.png");
  }
};
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");
function setUserName() {
  const myName = prompt("あなたの名前を入力してください。");
  if (!myName) {
    myHeading.textContent = `Mozilla is cool`;
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `${myName} さん、Mozilla はかっこいいよ。`;
  }
}
myButton.onclick = () => {
  setUserName();
};
