var casper = require('casper').create();
casper.start('http://www.ioffer.com/');
var srchbtn = "test";

casper.on("remote.message", function(msg){
    this.echo("remote.msg: " + msg);
});

casper.on("page.error", function(pageErr){
    this.echo("page.err: " + JSON.stringify(pageErr));
});

function searchbtn(){
casper.sendKeys("#search_query","phone")
casper.echo(document.querySelector(".submit-button"))
return ".submit-button > input"
}

casper.then(function() {
    casper.echo('Page title: ' + this.getTitle());
    casper.sendKeys("#search_query","phone");
    //srchbtn = this.evaluate(searchbtn)
    this.evaluate(function(){
        this.echo(document.querySelector("input[type='submit']").getAttribute("onclick"))
    })
    
    //casper.capture("test.png")
});

//casper.thenClick(srchbtn)

// casper.thenOpen('http://phantomjs.org', function() {
//     this.echo('Second Page: ' + this.getTitle());
// });

casper.run();
