$("#ps1").click(function () {
  $(".ps1-content").css("display", "block")
  $(".ps2-content").css("display", "none")
  $(".ps3-content").css("display", "none")
  $(".ps4-content").css("display", "none")
  $(".ps5-content").css("display", "none")
})

$("#ps2").click(function () {
  $(".ps1-content").css("display", "none")
  $(".ps2-content").css("display", "block")
  $(".ps3-content").css("display", "none")
  $(".ps4-content").css("display", "none")
  $(".ps5-content").css("display", "none")
})

$("#ps3").click(function () {
  $(".ps1-content").css("display", "none")
  $(".ps2-content").css("display", "none")
  $(".ps3-content").css("display", "block")
  $(".ps4-content").css("display", "none")
  $(".ps5-content").css("display", "none")
})

$("#ps4").click(function () {
  $(".ps1-content").css("display", "none")
  $(".ps2-content").css("display", "none")
  $(".ps3-content").css("display", "none")
  $(".ps4-content").css("display", "block")
  $(".ps5-content").css("display", "none")
})

$("#ps5").click(function () {
  $(".ps1-content").css("display", "none")
  $(".ps2-content").css("display", "none")
  $(".ps3-content").css("display", "none")
  $(".ps4-content").css("display", "none")
  $(".ps5-content").css("display", "block")
})

var aud = document.getElementById("myaudio")

aud.volume = 0.5

$(".sound-on").click(function () {
  aud.play()
})
