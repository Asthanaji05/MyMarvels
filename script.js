function openCity(evt, character) {
  let tablinks = document.getElementsByClassName("tablink");
      for (const element of tablinks) {
        element.className = element.className.replace("active", "");
      }

    let tabcontent = document.getElementsByClassName("tab_content");
    for (const element of tabcontent) {
      element.style.display = "none";
    }
        // Show the current tab, and add an "active" class to the link that opened the tab
        document.getElementById(character).style.display = "flex";

        let  cnl = character.toString();
        let n = cnl[cnl.length - 1];
        let sid = "side" + n;
        let activeside = document.getElementsByClassName(sid);
        for(const element of activeside){
          element.className += " active";
        }



}
function change(color) {
    // Get the root element
    let root = document.documentElement;

    // Change the value of the --color variable using plain JavaScript
    root.style.setProperty('--color', color);
}

