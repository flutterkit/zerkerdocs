$(function() {
  function vueRenderReady() {
    setInterval(function() {
      fillIconImg();
    },
    1000 / 16);
  }

  function fillIconImg() {
    if ($("#app .home").find(".features").data("fill") != "1") {
      $("#app .home").find(".features .feature").each(function(index, ele) {
        var icon = $("<img src='./images/icon/0" + (index + 1) + ".png' style='width:100px; float:left; margin-right:13px' />");
        $(ele).find("p").prepend(icon);
      });

      $("#app .home").find(".features").data("fill", "1");
    }
  }

  vueRenderReady();
});