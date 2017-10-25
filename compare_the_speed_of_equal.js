
var comp1 = "Asdadsdf";
var comp2 = "423423423";

var timeStart, timeEnd;
var count = 1000000;


timeStart = new Date().getTime();
for( var i = 1; i < count; i++ ) {
  if( comp1 == comp2) {
    var o = 123;
  }
}
timeEnd = new Date().getTime();

console.log( "for " + count + " == comparison it take " + ( timeEnd - timeStart) );


timeStart = new Date().getTime();
for( var i = 1; i < count; i++ ) {
  if( comp1 === comp2) {
    var o = 123;
  }
}
timeEnd = new Date().getTime();

console.log( "for " + count + " === comparison it take " + ( timeEnd - timeStart) );
