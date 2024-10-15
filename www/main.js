$(document).ready(function () {
    $('.text').textillate({
        loop: true,
        sync: true,
        in: {
            effect: "bounceIn",
        },
        out: {
            effect: "bounceOut",
        },
    });
    // SiriWave configuration
    //var siriWave = new SiriWave({
       // container: document.getElementById("siri-container"),
      //  width: 800,
      //  height: 200,
      //  style: "ios9",
     //   amplitude: 1,
       // speed: 0.30,
         //autostart: true
    //});

    // Corrected mic button click event
    //$("#micBtn").click(function (e) { 
     //   eel.playAssistantSound();  // Play the assistant sound
      //  $("#Oval").attr("hidden", true);
      //  $("#SiriWave").attr("hidden", false);  // Show SiriWave
   // });
});
