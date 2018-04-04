
function testCircleRadiusDefaultsTo10() {
  var circle = new Circle();
  maybe.isTrue(circle.radius === 10, testCircleRadiusDefaultsTo10.name);
};

testCircleRadiusDefaultsTo10();
