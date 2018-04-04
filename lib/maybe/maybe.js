var result = '';

var maybe = {
  isTrue: function(assertionToCheck, testName) {
    if (!assertionToCheck) {
      result = Error(testName + ' - FAILED - ');
      result = result + result.stack;
    } else {
      result = testName + " - PASSED ";
    }
    document.getElementById('result').innerHTML = result;
  }
};
