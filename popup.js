var thisForm = document.getElementById("form");
thisForm.addEventListener("submit", async function (e) {
  e.preventDefault();
  var formData = new FormData(thisForm);
  var url = formData.get("url");
  var chars = formData.get("chars");
  if (chars != null) {
    chars = "true";
  } else {
    chars = "false";
  }
  var caps = formData.get("caps");
  if (caps != null) {
    caps = "true";
  } else {
    caps = "false";
  }
  var length = formData.get("length");
  const response = await fetch(
    "https://photocryptapi.herokuapp.com/?url=" +
      url +
      "&caps=" +
      caps +
      "&chars=" +
      chars +
      "&length=" +
      length,
    {
      mode: "no-cors",
      method: "GET",
    }
  );

  console.log(response);

  var x = document.getElementById("optional");
  x.style.display = "none";
  document.getElementById("demo").style.display = "block";
  try {
    const result = await response.json();
    console.log(result.code);
    document.getElementById("demo").innerHTML = "Code: " + result.code;
    document.getElementById("demo").style.color = "#313131";
  } catch (err) {
    document.getElementById("demo").innerHTML = "Invalid URL";
    document.getElementById("demo").style.color = "red";
  }

  thisForm.reset();
});

var toggle = document.getElementById("toggle");
toggle.addEventListener("click", async function (e) {
  e.preventDefault();
  var x = document.getElementById("optional");
  if (x.style.display === "none") {
    x.style.display = "block";
    document.getElementById("demo").style.display = "none";
  } else {
    x.style.display = "none";
  }
});
