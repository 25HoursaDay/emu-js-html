var emu_js_script = document.createElement("script");
emu_js_script.src = "https://cdn.jsdelivr.net/gh/EmulatorJS/EmulatorJS@v4.0.7/data/loader.js";
document.head.append(emu_js_script);

var emu_js = document.getElementsByTagName("emu-js")[0].outerHTML;

function emu_js_check(emu_js_property) {
  var q = emu_js.slice(emu_js.indexOf(emu_js_property.toLowerCase()));
  q = q.slice(q.indexOf('"') + 1, q.indexOf('"', q.indexOf('"') + 1));
  return q
  // will output the value
}
console.log(emu_js_check("ejsCore"));

EJS_player = '#' + emu_js_check("id") + '';
EJS_core = emu_js_check("ejsCore");
EJS_biosUrl = emu_js_check("ejsBios");
EJS_gameUrl = emu_js_check("gameUrl");

EJS_pathtodata = 'https://cdn.jsdelivr.net/gh/EmulatorJS/EmulatorJS@v4.0.7/data/';

document.getElementsByTagName("emu-js")[0].outerHTML = document.getElementsByTagName("emu-js")[0].outerHTML.replaceAll("emu-js", "div");
