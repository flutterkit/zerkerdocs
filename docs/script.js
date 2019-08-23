var mv = require("mv");
var path = require("path");

mv(
  path.join(__dirname, "../dist"),
  path.join(__dirname, "../"),
  { mkdirp: true },
  function(err) {}
);
