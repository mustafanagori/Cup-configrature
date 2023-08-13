
const app = document.getElementById("app");

    let object = $("#input")
    object.on("input", function () {
    app.contentWindow.postMessage(this.value, "*");
    });
    // let body = $(".takeBody")
    // body.on("click", function() {
    // console.log("Working")
    // console.log(body)
    // app.contentWindow.postMessage(this.id, "*");

    // let color1 = $(".color1")
    // color1.on("click", function() {
    //     console.log("Working")
    //     console.log(color1.css('background-color'))
    //     let bg_color = color1.css('background-color')
    //     app.contentWindow.postMessage(bg_color.replace("rgb", "pallet:"), "*");

// dynmic  color box
const colorContainer = $(".color_container");
for (let i = 0; i < 52; i++) {
  // let hexCode = "#" + Math.floor(Math.random() * 16777215).toString(16);
  let hexCode =
    "#" +
    Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, "0");

  const color = $("<div></div>").attr({
    class: "color",
  });
  color.css("background-color", hexCode);
  colorContainer.prepend(color);
}


// background color
    let bgcolor =  $("#camera")
  
    bgcolor.on("input" ,function() {
      console.log(this.value)
        let bg_color = this.value;
        console.log(bg_color)
            app.contentWindow.postMessage(bg_color.replace("#", "camera:"), "*");
            console.log(bg_color.replace("#", "camera:"))
})

// select the position
    const model = document.querySelectorAll(".select");
    model.forEach((m) => {
    m.addEventListener("click", () => {
    console.log(m.id);
    app.contentWindow.postMessage(m.id, "*");});});

//   cup Color
    const colorPallet = document.querySelectorAll(".color");
    console.log(colorPallet)
    colorPallet.forEach((color) => {
    color.addEventListener("click", () => {
    console.log(color.style.backgroundColor)
    const bg_color = color.style.backgroundColor;
    console.log(bg_color)
    app.contentWindow.postMessage(bg_color.replace("rgb", "pallet:"), "*");
});
});

//reverse
  let rev = $(".rotate_reverse")
    rev.on("click", function() {
    console.log("Working")
    console.log(rev.id)
    app.contentWindow.postMessage(this.id, "*")});

//animated
let ani = $(".rotate_animate")
ani.on("click", function() {
console.log(ani.id)
app.contentWindow.postMessage(this.id, "*")});

//manage the speed
var speed = document.getElementById("speed");
var text = $("#txt");
console.log(speed.value);
let sp = $(".range")
sp.on("input", function() {
console.log(sp.value)
text.text(this.value);
app.contentWindow.postMessage("speed:"+this.value, "*")});
