let pass = document.getElementById("password");
let msg = document.getElementById("message");
let strength = document.getElementById("strength");

pass.addEventListener("input", () => {
  pass.value.length > 0
    ? `${(msg.style.display = "block")} `
    : `${(msg.style.display = "none")}`;

  if (pass.value.length < 4) {
    strength.innerHTML = "weak";
    pass.style.borderColor = "#ff5925";
    msg.style.color = "#ff5925";
  } else if (pass.value.length >= 4 && pass.value.length < 8) {
    strength.innerHTML = "medium";
    pass.style.borderColor = "#fcdb03";
    msg.style.color = "#fcdb03";
  } else if (pass.value.length >= 8) {
    strength.innerHTML = "strong";
    pass.style.borderColor = "#26d730";
    msg.style.color = "#26d730";
  }
});
