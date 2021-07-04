const formData = new FormData();

$("#gpa-toggle").click(function () {
  $("#gpa-toggle").addClass("selected-toggle");
  $("#cgpa-toggle").removeClass("selected-toggle");
  $(".cgpa-content").css("display", "none");
  $(".gpa-content").css("display", "flex");
});

$("#cgpa-toggle").click(function () {
  $("#cgpa-toggle").addClass("selected-toggle");
  $("#gpa-toggle").removeClass("selected-toggle");
  $(".gpa-content").css("display", "none");
  $(".cgpa-content").css("display", "flex");
  $(".cgpa-content").css("flex-direction", "column");
});

$("#dept-select").click(function () {
  var newOptions = {
    9: "9",
    10: "10",
  };

  if ($("#dept-select").val() >= 17) {
    var $el = $("#sem-select");
    if ($("#sem-select> option").length < 10) {
      $.each(newOptions, function (key, value) {
        $el.append($("<option></option>").attr("value", value).text(key));
      });
    }
  } else {
    $("#sem-select option:gt(7)").remove();
  }
});

$($(".gpa-output-grade-input-table")).scroll(function () {
  var $nav = $("th");
  console.log($nav.prop("scrollHeight"));
  $nav.toggleClass("scrolled", $nav.prop("scrollHeight") > 0);
});

document.getElementById("cgpa").addEventListener("submit", (event) => {
  event.preventDefault();
  $(".cgpa-output").css("display", "flex");
  const formData = new FormData(document.getElementById("cgpa"));
  const s1 = parseInt(formData.get("s-1"));
  const s2 = parseInt(formData.get("s-2"));
  const s3 = parseInt(formData.get("s-3"));
  const s4 = parseInt(formData.get("s-4"));
  const s5 = parseInt(formData.get("s-5"));
  const s6 = parseInt(formData.get("s-6"));
  const s7 = parseInt(formData.get("s-7"));
  const s8 = parseInt(formData.get("s-8"));
  const s9 = parseInt(formData.get("s-9"));
  const s10 = parseInt(formData.get("s-10"));

  var temp = 0,
    total = 0;
  temp = s1 + s2 + s3 + s4 + s5 + s6 + s7 + s8 + s9 + s10;
  if (s1 != 0 || s1 != null || s1 <= 0) total += 1;
  if (s2 != 0 || s2 != null || s2 <= 0) total += 1;
  if (s3 != 0 || s3 != null || s3 <= 0) total += 1;
  if (s4 != 0 || s4 != null || s4 <= 0) total += 1;
  if (s5 != 0 || s5 != null || s5 <= 0) total += 1;
  if (s6 != 0 || s6 != null || s6 <= 0) total += 1;
  if (s7 != 0 || s7 != null || s7 <= 0) total += 1;
  if (s8 != 0 || s8 != null || s8 <= 0) total += 1;
  if (s9 != 0 || s9 != null || s9 <= 0) total += 1;
  if (s10 != 0 || s10 != null || s10 <= 0) total += 1;

  $("#cgpa-display").text(parseFloat(temp / total).toFixed(2));
  window.scrollTo(0, document.body.scrollHeight);
});

async function getSelectValue() {
  var Val = $("#dept-select option:selected")
    .text()
    .replace(/\s+/g, " ")
    .trim();

  const result = await fetch("http://localhost:3000/api/selectDept", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      Val,
    }),
  }).then((res) => res.json());
}

async function getSemValue()
{
  var Sem = document.getElementById("sem-select").value;
  formData.append('sem',Sem);
  console.log(Sem)
  const result = await fetch("http://localhost:3000/api/selectSem",{
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      Sem
    }),
  }).then((res) => res.json());
}