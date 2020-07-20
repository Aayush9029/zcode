var input = document.getElementById("selectTheme");

for (var i = 0; i < STYLES.length; i++) {
  var opt = STYLES[i];
  var el = document.createElement("option");
  el.textContent = opt;
  el.value = opt;
  input.appendChild(el);
}
