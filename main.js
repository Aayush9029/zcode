var input = document.getElementById("selectTheme");
let themeName = "dracula";
for (var i = 0; i < STYLES.length; i++) {
  var opt = STYLES[i];
  var el = document.createElement("option");
  el.textContent = opt;
  el.value = opt;
  input.appendChild(el);
}

function changeCSS(cssFile, cssLinkIndex) {
  var oldlink = document.getElementsByTagName("link").item(cssLinkIndex);

  var newlink = document.createElement("link");
  newlink.setAttribute("rel", "stylesheet");
  newlink.setAttribute("type", "text/css");
  newlink.setAttribute("href", "codemirror/theme/" + cssFile);

  document.getElementsByTagName("head").item(0).replaceChild(newlink, oldlink);
}

function changeTheme() {
  let themeName = input.value.split(".")[0];
  editor.display.wrapper.className = "CodeMirror custom cm-s-" + themeName;

  changeCSS(input.value, 0);
}
