const { body } = document;

function changeBackground(number) {
  //Check if background already showing
  let previousBackground;
  if (body.className) {
    previousBackground = body.className;
  }
  // Remove background
  body.className = "";
  // If background already on, turn of backgroud , else turn on.
  switch (number) {
    case "1":
      return previousBackground === "background-1"
        ? false
        : (body.className = "background-1");
    case "2":
      return previousBackground === "background-2"
        ? false
        : (body.className = "background-2");
    case "3":
      return previousBackground === "background-3"
        ? false
        : (body.className = "background-3");
    default:
      break;
  }
}
