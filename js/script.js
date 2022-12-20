let EmailInput = document.getElementById("email"),
  EmailSpans = document.querySelectorAll("#emailLeb span"),
  PassInput = document.getElementById("password"),
  PassSpans = document.querySelectorAll("#passLeb span");

EmailInput.addEventListener("focus", () => {
  EmAndPassTrans(EmailSpans);
});
PassInput.addEventListener("focus", () => {
  EmAndPassTrans(PassSpans);
});
function EmAndPassTrans(EmOrPass) {
  let secns = 25;
  EmOrPass.forEach((span) => {
    span.style = `top:-10px;   transition-delay: ${secns}ms;color: rgb(110, 196, 253);`;
    secns = secns + 25;
  });
}
function FocOut(EmOrPass) {
  let secns = 25;
  EmOrPass.forEach((span) => {
    span.style = `top:35px;   transition-delay: ${secns}ms;`;
    secns = secns + 25;
  });
}
EmailInput.addEventListener("focusout", () => {
  FocOut(EmailSpans);
});
PassInput.addEventListener("focusout", () => {
  FocOut(PassSpans);
});
