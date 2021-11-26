$(start);

function start() {
    //display current time
    $("#currentDay").text(moment().format("dddd, MMMM Do"));

    //color time blocks
    colorTimeBlocks();
    setInterval(colorTimeBlocks, 60000);

 $(".time-block").each(function() {
    var blockId = $(this).attr("id");
    $("#" + blockId + " textarea").text(localStorage.getItem(moment().format("DDDYYYY") + blockId));
  });

    $(".saveBtn").on("click", handleSave);
}

function colorTimeBlocks() {
    $(".time-block").each(function() {
      var blockHour = parseInt($(this).attr("id").replace("hour-", ""));
      var currentHour = parseInt(moment().format("H"));
      //clear class if exists 
      $(this).removeClass("past present future");
      // color the blocks based on time
      if (blockHour < currentHour) {
        $(this).addClass("past");
      } else if (blockHour > currentHour) {
        $(this).addClass("future");
      } else {
        $(this).addClass("present");
      }
    });
  }
  
  function handleSave(event) {
    // get the id of our parent
    var hourId = $(this).parent().attr("id");
    // save data in textarea in local storage
    localStorage.setItem(moment().format("DDDYYYY") + hourId, $("#" + hourId + " textarea").val());
  }
