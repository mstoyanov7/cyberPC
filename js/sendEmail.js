const form = Array.from(document.querySelector("#form-email"));
const btn = document.querySelector("#submit-btn");
btn.addEventListener("click", (e) => {
  e.preventDefault();
  let data = form.map((e) => {
    return e.value;
  });
  let tempParams = {
    name: data[0],
    subject: data[2],
    message: data[3],
  };
  sendEmail(tempParams);
});

function sendEmail(tempParams) {
  emailjs
    .send("template_ta257fc", tempParams)
    .then((res) => {
      console.log("success", res.status);
    })
    .catch((e) => {
      console.log(e);
    });
}
