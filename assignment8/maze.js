$(document).ready(function () {
  let mistake = false;
  let isPlaying = false;

  $("#start").click(function () {
    $(".boundary").removeClass("youlose");
    mistake = false;
    isPlaying = true;
    $("#status").text('Click the "S" to begin.');
  });

  $(".boundary").mouseover(function () {
    if (isPlaying) {
      $(".boundary").addClass("youlose");
      mistake = true;
    }
  });

  $("#end").mouseover(function () {
    if (isPlaying) {
      $("#status").text(mistake ? "You lose" : "You win!");
      isPlaying = false;
    }
  });

  $("#maze").mouseleave(function () {
    if (isPlaying) {
      $(".boundary").addClass("youlose");
    }
  });
});