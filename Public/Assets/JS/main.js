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
  if (s1 != 0 || s1 != null || s1 >= 6) total += 1;
  if (s2 != 0 || s2 != null || s2 >= 6) total += 1;
  if (s3 != 0 || s3 != null || s3 >= 6) total += 1;
  if (s4 != 0 || s4 != null || s4 >= 6) total += 1;
  if (s5 != 0 || s5 != null || s5 >= 6) total += 1;
  if (s6 != 0 || s6 != null || s6 >= 6) total += 1;
  if (s7 != 0 || s7 != null || s7 >= 6) total += 1;
  if (s8 != 0 || s8 != null || s8 >= 6) total += 1;
  if (s9 != 0 || s9 != null || s9 >= 6) total += 1;
  if (s10 != 0 || s10 != null || s10 >= 6) total += 1;

  $("#cgpa-display").text(parseFloat(temp / total).toFixed(2));
  window.scrollTo(0, document.body.scrollHeight);
});

document.getElementById("form-1").addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(document.getElementById("form-1"));
  var Val = $("#dept-select option:selected")
    .text()
    .replace(/\s+/g, " ")
    .trim();
  var Sem = parseInt($("#sem-select option:selected").text());

  const result = fetch("http://localhost:3000/api/selectDept", {
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
        for (let i = 0; i < array.length; i++) {
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
      }
    })
    .catch((err) => {
      console.log(err);
    });
});

$("#calculate-btn").on("click", function () {
  $(this).css("display", "none");
  $("#table > tbody > tr").each(function (index, value) {
    console.log($("td:eq(2)", this));
  });

  $(".total").css("display", "flex").delay(200).show(200);
});
