mouseEvent = "empty";
canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
color = document.getElementById("color").value;
width_of_line = document.getElementById("width_of_line").value;
radius = document.getElementById("radius").value;
canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e){
  color=document.getElementById("color").value;
  width_of_line=document.getElementById("width_of_line").value;
  radius=document.getElementById("radius").value;  
  mouseEvent = "mousedown";
}
canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e){
    color=document.getElementById("color").value;
    console.log(color);
    mouse_x= e.clientX-canvas.offsetLeft;
    mouse_y=e.clientY-canvas.offsetTop;
    if(mouseEvent == "mousedown"){
        console.log("X = " + mouse_x + " ,Y = " + mouse_y);
        ctx.beginPath();
ctx.strokeStyle= color;
ctx.lineWidth= width_of_line ;
ctx.arc(mouse_x,mouse_y,radius,0,2*Math.PI);
ctx.stroke();
    }
   }
 canvas.addEventListener("mouseleave",my_mouseleave);
 function my_mouseleave(e){
mouseEvent = "mouseleave"
 }
 canvas.addEventListener("mouseup",my_mouseup);
 function my_mouseup(e){
mouseEvent = "mouseup"
 }
 function cleararea(){
 ctx.clearRect(0,0,canvas.width,canvas.height);
}