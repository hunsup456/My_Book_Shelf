$(function () {
  $(
    ".sd_book_list li:gt(4),.fm_book_list li:gt(4),.km_book_list li:gt(4)"
  ).hide();
  $("#dialog-link").click(function (event) {
    $("#dialog").dialog("open");
    event.preventDefault();
  });
  $(".sd_book_list li img,.fm_book_list li img,.km_book_list li img").mouseover(
    function () {
      $(this)
        .animate(
          {
            bottom: "10px",
          },
          "fast"
        )
        .css("boxShadow", "5px 5px 5px #888")
        .css("transition", "box-shadow 0.4s ease-in-out")
        .css("backgroundColor",)
    }
    
  );

  $(".sd_book_list li img,.fm_book_list li img,.km_book_list li img").mouseout(
    function () {
      $(this)
        .animate(
          {
            bottom: "0",
          },
          "fast"
        )
        .css("boxShadow", "0 0 0 0");
    }
  );

  $("#dialog").dialog({
    autoOpen: false,
    width: 400,
    buttons: [
      {
        text: "E-Book 구매",
        click: function () {
          $(this).dialog("close");
        },
      },
      {
        text: "취소",
        click: function () {
          $(this).dialog("close");
        },
      },
    ],
  });

  $("#sd_show_more").click(function () {
    $(".sd_book_list li:gt(4)").toggle();

    if ($(this).text() === "Show more") {
      $(this).text("Hide");
    } else {
      $(this).text("Show more");
    }
  });
  $("#fm_show_more").click(function () {
    $(".fm_book_list li:gt(4)").toggle();

    if ($(this).text() === "Show more") {
      $(this).text("Hide");
    } else {
      $(this).text("Show more");
    }
  });
  $("#km_show_more").click(function () {
    $(".km_book_list li:gt(4)").toggle();

    if ($(this).text() === "Show more") {
      $(this).text("Hide");
    } else {
      $(this).text("Show more");
    }
  });

  const stored_Book = [];
  $("i").click(function(){
    
    if($(this).css("color")=="rgb(255, 0, 0)"){
      $(this).css("color","rgb(0, 0, 0)");
    }
    else{
      $(this).css("color","rgb(255, 0, 0)");
    }
    
    console.log($(".book li p").text);
  })
});
