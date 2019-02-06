//gifyArr for rAWWW
const gifyArrAww = [
  "https://giphy.com/embed/JIX9t2j0ZTN9S",
  "https://giphy.com/embed/mlvseq9yvZhba",
  "https://giphy.com/embed/MuztdWJQ4PR7i",
  "https://giphy.com/embed/CWVDzMy8zDj0Y",
  "https://giphy.com/embed/11gRr4Mp1EktY4",
  "https://giphy.com/embed/rlkpAmX3gaLWE",
  "https://giphy.com/embed/ZroXw2W3SzUA0"
];

const gifyArrWTF = [
  "https://giphy.com/embed/3o85xsGXVuYh8lM3EQ",
  "https://giphy.com/embed/12nN7fyzTaawdG",
  "https://giphy.com/embed/1zfYxi8vHxEiicNQ13",
  "https://giphy.com/embed/c1c1M1a2yZDd9aVReu",
  "https://giphy.com/embed/G3773sSDJHHy0",
  "https://giphy.com/embed/3b9Q4OqueSDXEf8R0C",
  "https://giphy.com/embed/ujTfbd9cLhZ6iwoKrI"
];

//Helper function for requests
const request = (url, callback) => {
  const xhr = new XMLHttpRequest();
  xhr.addEventListener("load", function(data) {
    const resData = JSON.parse(this.responseText);
    callback(resData);
  });
  xhr.open("GET", url);
  xhr.send();
};

//Helper Function to create elements with IDs
const createNewEL = (type, id_name) => {
  let newEL = document.createElement(type);
  newEL.id = id_name;
  return newEL;
};

//Helper Function to create Elements with ids
const getEL = id_name => {
  let getEle = document.getElementById(id_name);
  return getEle;
};

//const for getting outerbox div
const getOuterBox = getEL("outerBox");

function showAWW() {
  if (getOuterBox.hasChildNodes() === true) {
    getOuterBox.removeChild(getOuterBox.firstChild);
  }
  //rAWW subreddit data pull and creation
  const rAww = request("https://www.reddit.com/r/aww/.json", function(data) {
    const rAwwData = data.data.children;
    const postBox1 = createNewEL("div", "postBox1");
    postBox1.className = "postBox";
    getOuterBox.appendChild(postBox1);
    rAwwData.forEach(x => {
      const newTitle = createNewEL("div", x.data.title);
      newTitle.innerHTML = "Title :" + x.data.title;
      newTitle.className = "awwBlock";
      const newAuthor = createNewEL("div", x.data.author);
      newAuthor.innerHTML = "Posted by: " + x.data.author;
      newTitle.appendChild(newAuthor);
      postBox1.appendChild(newTitle);
      if (x.data.url.charAt(8) === "i") {
        const postImgSrc = x.data.url;
        const postImgBox = createNewEL("img", "img " + x.data.author);
        postImgBox.src = postImgSrc;
        postImgBox.className = "post1Img";
        newTitle.appendChild(postImgBox);
      } else {
        const postVidSrc =
          gifyArrAww[Math.floor(Math.random() * Math.floor(7))];
        const postVid1 = createNewEL("embed", "vid" + x.data.author);
        postVid1.src = postVidSrc;
        postVid1.className = "post1Vid";
        newTitle.appendChild(postVid1);
      }
    });
  });
}

function showWTF() {
  if (getOuterBox.hasChildNodes() === true) {
    getOuterBox.removeChild(getOuterBox.firstChild);
  }
  const rWTF = request("https://www.reddit.com/r/WTF/.json", function(data) {
    const rWTFdata = data.data.children;
    const getPostBox2 = createNewEL("div", "postBox2");
    getPostBox2.className = "postBox";
    getOuterBox.appendChild(getPostBox2);

    rWTFdata.forEach(x => {
      const newTitle = createNewEL("div", x.data.title);
      newTitle.innerHTML = "Title :" + x.data.title;
      newTitle.className = "wtfBlock";
      const newAuthor = createNewEL("div", x.data.author);
      newAuthor.innerHTML = "Posted by: " + x.data.author;
      newTitle.appendChild(newAuthor);
      getPostBox2.appendChild(newTitle);
      const newImg = x.data.url;
      if (newImg.charAt(8) === "i") {
        console.log(newImg.charAt(8));
        const postImgBox = createNewEL("img", "img " + x.data.author);
        postImgBox.src = newImg;
        postImgBox.className = "post2Img";
        newTitle.appendChild(postImgBox);
      } else {
        const postVidSrc =
          gifyArrWTF[Math.floor(Math.random() * Math.floor(7))];
        const postVid2 = createNewEL("embed", "vid" + x.data.author);
        postVid2.src = postVidSrc;
        postVid2.className = "post2Vid";
        newTitle.appendChild(postVid2);
      }
    });
  });
}

function showTIL() {
  if (getOuterBox.hasChildNodes() === true) {
    getOuterBox.removeChild(getOuterBox.firstChild);
  }
  const rTIL = request("https://www.reddit.com/r/todayilearned/.json", function(
    data
  ) {
    const rTILdata = data.data.children;
    const postBox3 = createNewEL("div", "postBox3");
    getOuterBox.appendChild(postBox3);
    rTILdata.forEach(x => {
      const newTitle = createNewEL("button", x.data.title);
      newTitle.className = "drop";
      newTitle.innerHTML = x.data.title;
      postBox3.appendChild(newTitle);
    });
  });
}

//Making the Navigation Bar.
const navList = getEL("navList");

const buttonWTF = createNewEL("button", "WTF");
buttonWTF.className = "subreddit";
buttonWTF.innerHTML = "r/WTF";
buttonWTF.addEventListener("click", showWTF);
buttonWTF.addEventListener("mouseover", fadeIn);
buttonWTF.addEventListener("mouseout", fadeOut);
navList.appendChild(buttonWTF);

const buttonTIL = createNewEL("button", "TIL");
buttonTIL.className = "subreddit";
buttonTIL.innerHTML = "r/TIL";
buttonTIL.addEventListener("click", showTIL);
buttonTIL.addEventListener("mouseover", fadeIn);
buttonTIL.addEventListener("mouseout", fadeOut);
navList.appendChild(buttonTIL);

const buttonAWW = createNewEL("button", "AWW");
buttonAWW.className = "subreddit";
buttonAWW.innerHTML = "r/AWW";
buttonAWW.addEventListener("click", showAWW);
buttonAWW.addEventListener("mouseover", fadeIn);
buttonAWW.addEventListener("mouseout", fadeOut);
navList.appendChild(buttonAWW);

function fadeIn() {
  this.style.opacity = 1;
}
function fadeOut() {
  this.style.opacity = 0.6;
}
