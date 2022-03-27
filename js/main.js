for (i = 0; i < document.images.length; i++) {
  if (document.images[i].draggable === "") {
    // images that have "draggable" Attribute and its Value is Empty
    document.images[i].setAttribute("draggable", "false");
  } else {
    // Images Does not Have "draggable" Attribute
    document.images[i].setAttribute("draggable", "false");
  }
}
