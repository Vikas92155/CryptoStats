var x;
var price;
$.get('https://api.coindesk.com/v1/bpi/currentprice.json', function(data) {
    x = JSON.parse(data);
    price = x.bpi.USD.rate;
    $("#data").text(price);
    $("#data1").text(x.bpi.GBP.rate);
    $("#data2").text(x.bpi.EUR.rate);
});
var y;
$.get('https://coinmarketcap-nexuist.rhcloud.com/api/eth', function(data) {
    y = data;
    $("#dat").text(y.price.usd);
    $("#dat1").text(y.price.eur);
    $("#dat2").text(y.price.btc);
});
var z;
var profit2;
var before;
var time;
var pricevalue;
var usd,usd1;
function profit(event) {
    event.preventDefault();
    time = document.getElementById("demo1").value;
    usd = parseFloat(document.getElementById("bitcoin").value);

    var url = 'https://api.coindesk.com/v1/bpi/historical/close.json?start=' + time + '&end=' + time;
    $.get(url, function(profit1) {
        z = JSON.parse(profit1);
        before = z.bpi[Object.keys(z.bpi)[0]];
        usd1 = usd/before;
        pricevalue = x.bpi.USD[Object.keys(x.bpi.USD)[4]];
        profit2 = usd1*pricevalue;
        $('#profit1').text(profit2-usd+"$");
    });
};