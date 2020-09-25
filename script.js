var convert_button = document.getElementsByClassName("convert");
convert_button = convert_button[0];

var convert = function () {
  let insert_text = document.getElementById("inserted");
  let convert_text = document.getElementById("converted");
  let style=document.getElementsByClassName("font-select");
  style=style[0];
  convert_text.style.fontFamily = style.value;
  console.log(insert_text.textContent);
  convert_text.textContent = insert_text.value;
}
convert_button.addEventListener('click', convert);