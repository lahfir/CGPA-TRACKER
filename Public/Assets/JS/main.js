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
  $nav.toggleClass("scrolled", $nav.prop("scrollHeight") > 0);
});

document.getElementById("cgpa").addEventListener("submit", (event) => {
  event.preventDefault();
  $(".cgpa-output").css("display", "flex");
  const formData = new FormData(document.getElementById("cgpa"));

  var s1 = parseFloat(formData.get("s-1"));
  var s2 = parseFloat(formData.get("s-2"));
  var s3 = parseFloat(formData.get("s-3"));
  var s4 = parseFloat(formData.get("s-4"));
  var s5 = parseFloat(formData.get("s-5"));
  var s6 = parseFloat(formData.get("s-6"));
  var s7 = parseFloat(formData.get("s-7"));
  var s8 = parseFloat(formData.get("s-8"));
  var s9 = parseFloat(formData.get("s-9"));
  var s10 = parseFloat(formData.get("s-10"));
  if (isNaN(s1)) s1 = 0;
  if (isNaN(s2)) s2 = 0;
  if (isNaN(s3)) s3 = 0;
  if (isNaN(s4)) s4 = 0;
  if (isNaN(s5)) s5 = 0;
  if (isNaN(s6)) s6 = 0;
  if (isNaN(s7)) s7 = 0;
  if (isNaN(s8)) s8 = 0;
  if (isNaN(s9)) s9 = 0;
  if (isNaN(s10)) s10 = 0;
  var temp = 0;
  var total = 0;
  temp = s1 + s2 + s3 + s4 + s5 + s6 + s7 + s8 + s9 + s10;
  if (s1 != 0) total += 1;
  if (s2 != 0) total += 1;
  if (s3 != 0) total += 1;
  if (s4 != 0) total += 1;
  if (s5 != 0) total += 1;
  if (s6 != 0) total += 1;
  if (s7 != 0) total += 1;
  if (s8 != 0) total += 1;
  if (s9 != 0) total += 1;
  if (s10 != 0) total += 1;
  console.log(temp / total);
  $("#cgpa-display").text(parseFloat(temp / total).toFixed(2));
  window.scrollTo(0, document.body.scrollHeight);
});

document.getElementById("form-1").addEventListener("submit", (event) => {
  event.preventDefault();
  $("#empty").text("Fetching Data...").show(300);
  const formData = new FormData(document.getElementById("form-1"));
  var Val = $("#dept-select option:selected")
    .text()
    .replace(/\s+/g, " ")
    .trim();
  var Sem = parseInt($("#sem-select option:selected").text());

  const result = fetch("/api/selectDept", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      Val,
      Sem,
    }),
  });
  result
    .then((res) => res.json())
    .then((subjects) => {
      let array = [];
      Object.entries(subjects).forEach((sub) => {
        array = sub[1];
      });
      if (array.length <= 0) {
        $("#table > tbody").html("");
        $("#empty").text("No Data").show(300);
      } else {
        $("#table > tbody").html("");
        $("#empty").hide(300);
        $(".total").css("display", "none");
        for (let i = 0; i < array.length; i++) {
          let tr = document.createElement("TR");
          let tdS = document.createElement("TD");
          let tdC = document.createElement("TD");
          let tdG = document.createElement("TD");
          let select = document.createElement("SELECT");
          select.className = "grade-select";
          tdC.className = "credit-field";
          let option = document.createElement("OPTION");
          option.setAttribute("value", "10");
          option.append(document.createTextNode("10 O"));
          select.appendChild(option);
          let option1 = document.createElement("OPTION");
          option1.setAttribute("value", "9");
          option1.append(document.createTextNode("9 A+"));
          select.appendChild(option1);
          let option2 = document.createElement("OPTION");
          option2.setAttribute("value", "8");
          option2.append(document.createTextNode("8 A"));
          select.appendChild(option2);
          let option3 = document.createElement("OPTION");
          option3.setAttribute("value", "7");
          option3.append(document.createTextNode("7 B+"));
          select.appendChild(option3);

          select.setAttribute("name", "grade-select-dd");
          select.id = "grade-select-dd";
          select.className = "grade-select";

          tdS.appendChild(document.createTextNode(array[i].Subject));
          tdC.appendChild(document.createTextNode(array[i].Credit));
          tdG.appendChild(select);
          tr.appendChild(tdS);
          tr.appendChild(tdC);
          tr.appendChild(tdG);
          document.getElementById("tbody").appendChild(tr);

          if (i == array.length - 1) {
            let tr = document.createElement("TR");
            let tdS = document.createElement("TD");
            let tdC = document.createElement("TD");
            let tdG = document.createElement("TD");
            let select = document.createElement("SELECT");
            let option = document.createElement("OPTION");
            option.setAttribute("value", "10");
            option.append(document.createTextNode("10 O"));
            select.appendChild(option);
            let option1 = document.createElement("OPTION");
            option1.setAttribute("value", "9");
            option1.append(document.createTextNode("9 A+"));
            select.appendChild(option1);
            let option2 = document.createElement("OPTION");
            option2.setAttribute("value", "8");
            option2.append(document.createTextNode("8 A"));
            select.appendChild(option2);
            let option3 = document.createElement("OPTION");
            option3.setAttribute("value", "7");
            option3.append(document.createTextNode("7 B+"));
            select.appendChild(option3);

            select.setAttribute("name", "grade-select-dd");
            select.id = "grade-select-dd";
            select.className = "grade-select";

            tdS.appendChild(document.createTextNode("Elective 1 (Optional)"));
            let inputC = document.createElement("INPUT");
            inputC.id = "el1";
            inputC.setAttribute("type", "number");
            tdC.appendChild(inputC);
            tdG.appendChild(select);
            tr.appendChild(tdS);
            tr.appendChild(tdC);
            tr.appendChild(tdG);
            document.getElementById("tbody").appendChild(tr);

            select = document.createElement("SELECT");
            option = document.createElement("OPTION");
            option.setAttribute("value", "10");
            option.append(document.createTextNode("10 O"));
            select.appendChild(option);
            option1 = document.createElement("OPTION");
            option1.setAttribute("value", "9");
            option1.append(document.createTextNode("9 A+"));
            select.appendChild(option1);
            option2 = document.createElement("OPTION");
            option2.setAttribute("value", "8");
            option2.append(document.createTextNode("8 A"));
            select.appendChild(option2);
            option3 = document.createElement("OPTION");
            option3.setAttribute("value", "7");
            option3.append(document.createTextNode("7 B+"));
            select.appendChild(option3);

            select.setAttribute("name", "grade-select-dd");
            select.id = "grade-select-dd";
            select.className = "grade-select";

            tr = document.createElement("TR");
            tdS = document.createElement("TD");
            tdC = document.createElement("TD");
            tdG = document.createElement("TD");
            tdS.appendChild(document.createTextNode("Elective 2 (Optional)"));
            inputC = document.createElement("INPUT");
            inputC.id = "el2";
            inputC.setAttribute("type", "number");
            tdC.appendChild(inputC);
            tdG.appendChild(select);
            tr.appendChild(tdS);
            tr.appendChild(tdC);
            tr.appendChild(tdG);
            document.getElementById("tbody").appendChild(tr);

            select = document.createElement("SELECT");
            option = document.createElement("OPTION");
            option.setAttribute("value", "10");
            option.append(document.createTextNode("10 O"));
            select.appendChild(option);
            option1 = document.createElement("OPTION");
            option1.setAttribute("value", "9");
            option1.append(document.createTextNode("9 A+"));
            select.appendChild(option1);
            option2 = document.createElement("OPTION");
            option2.setAttribute("value", "8");
            option2.append(document.createTextNode("8 A"));
            select.appendChild(option2);
            option3 = document.createElement("OPTION");
            option3.setAttribute("value", "7");
            option3.append(document.createTextNode("7 B+"));
            select.appendChild(option3);

            select.setAttribute("name", "grade-select-dd");
            select.id = "grade-select-dd";
            select.className = "grade-select";

            tr = document.createElement("TR");
            tdS = document.createElement("TD");
            tdC = document.createElement("TD");
            tdG = document.createElement("TD");
            tdS.appendChild(document.createTextNode("Elective 3 (Optional)"));
            inputC = document.createElement("INPUT");
            inputC.id = "el3";
            inputC.setAttribute("type", "number");
            tdC.appendChild(inputC);
            tdG.appendChild(select);
            tr.appendChild(tdS);
            tr.appendChild(tdC);
            tr.appendChild(tdG);
            document.getElementById("tbody").appendChild(tr);
          }
        }
        $(".calculate").css("display", "flex").show(200);
      }
    })
    .catch((err) => {
      console.log(err);
    });
});

$("#calculate-btn").on("click", function () {
  // $(".calculate").css("display", "none");

  var total = 0;
  var totalCredit = 0;
  var grades = document.getElementsByClassName("grade-select");
  var credit = document.getElementsByClassName("credit-field");

  console.log(grades);

  for (var i = 0; i < grades.length - 3; i++) {
    // console.log(credit[i].textContent);
    // console.log(grades[i].value);
    total = total + parseInt(credit[i].textContent) * grades[i].value;
    totalCredit = totalCredit + parseInt(credit[i].textContent);
  }
  let el1 = document.getElementById("el1").value,
    el2 = document.getElementById("el2").value,
    el3 = document.getElementById("el3").value;

  if (el1) {
    total = total + parseInt(el1) * grades[grades.length - 3].value;
    totalCredit = totalCredit + parseInt(el1);
  }
  if (el2) {
    total = total + parseInt(el2) * grades[grades.length - 2].value;
    totalCredit = totalCredit + parseInt(el2);
  }
  if (el3) {
    total = total + parseInt(el3) * grades[grades.length - 1].value;
    totalCredit = totalCredit + parseInt(el3);
  }

  $("#total-gpa").text(parseFloat(total / totalCredit).toFixed(2));
  $(".total").css("display", "flex").delay(200).show(200);
});
