   var blessed = require('blessed')
     , contrib = require('blessed-contrib')
     , screen = blessed.screen()
     , line = contrib.line(
         { style:
           { line: "yellow"
           , text: "green"
           , baseline: "black"}
         , xLabelPadding: 3
         , xPadding: 5
         , label: 'Title'})
     , data = {
         x: ['t1', 't2', 't3', 't4'],
         y: [5, 1, 7, 5]
      }
   screen.append(line); //must append before setting data
   line.setData([data]);

   var map = contrib.map({label: 'World Map'})
   screen.append(map);
   map.addMarker({"lon" : "-79.0000", "lat" : "37.5000", color: "red", char: "X" })

   var lcd = contrib.lcd(
    { segmentWidth: 0.06 // how wide are the segments in % so 50% = 0.5
    , segmentInterval: 0.11 // spacing between the segments in % so 50% = 0.550% = 0.5
    , strokeWidth: 0.11 // spacing between the segments in % so 50% = 0.5
    , elements: 4 // how many elements in the display. or how many characters can be displayed.
    , display: 321 // what should be displayed before first call to setDisplay
    , elementSpacing: 4 // spacing between each element
    , elementPadding: 2 // how far away from the edges to put the elements
    , color: 'white' // color for the segments
    , label: 'Storage Remaining'})
 screen.append(lcd);
 lcd.setDisplay(23 + 'G'); // will display "23G"
 lcd.setOptions({}) // adjust options at runtime

   screen.key(['escape', 'q', 'C-c'], function(ch, key) {
     return process.exit(0);
   });

   screen.key(['space'], function(ch, key) {
    screen.render()
  });

   screen.render()