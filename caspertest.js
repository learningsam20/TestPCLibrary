var casper = require('casper').create();
casper.start('http://www.ioffer.com/');

casper.on("remote.message", function(msg){
    this.echo("remote.msg: " + msg);
});

casper.on("page.error", function(pageErr){
    this.echo("page err: " + JSON.stringify(pageErr));
});

casper.on("error", function(pageErr){
    this.echo("casper err: " + pageErr);
});

casper.then(function() {
    casper.echo('Page title: ' + this.getTitle());
    casper.sendKeys("#search_query","phone");
});

casper.thenClick("input[type='submit']")

casper.then(function(){
    casper.capture("test.png")
})

casper.run();
