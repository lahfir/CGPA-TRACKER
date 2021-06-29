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
    9: "s-9",
    10: "s-10",
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
