$("#gpa-toggle").click(function () {
  $("#gpa-toggle").addClass("selected-toggle");
  $("#cgpa-toggle").removeClass("selected-toggle");
  $(".cgpa-content").fadeOut(400);
  $(".gpa-content").fadeIn(400);
});

$("#cgpa-toggle").click(function () {
  $("#cgpa-toggle").addClass("selected-toggle");
  $("#gpa-toggle").removeClass("selected-toggle");
  $(".cgpa-content").fadeIn(400);
  $(".gpa-content").fadeOut(400);
});

$("#dept-select").click(function () {
  var newOptions = {
    9: "s-9",
    10: "s-10",
  };

  if ($("#dept-select").val() >= 25) {
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
