var page = require('webpage').create();
page.open("protectedForm.html", function (status) {
    if (status !== 'success') {
        console.log('Unable to load the address!');
    } else {
        var code = page.evaluate(function() {
                $('#submit').click();
                return $('#output .code').html();
        });
        console.log(code);
        phantom.exit();
    }
});
