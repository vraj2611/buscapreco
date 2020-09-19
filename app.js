const express = require('express');
const app = express();
const puppeteer = require('puppeteer');
const port = process.env.PORT || 8080;
const validUrl = require('valid-url');

var parseUrl = function (url) {
    url = decodeURIComponent(url)
    if (!/^(?:f|ht)tps?\:\/\//.test(url)) {
        url = 'http://' + url;
    }

    return url;
};

app.get('/', function (req, res) {
    var url = 'https://superbomemcasa.com.br';

    if (validUrl.isWebUri(url)) {
        (async () => {
            const browser = await puppeteer.launch({
                //headless: false
                args: ['--no-sandbox', '--disable-setuid-sandbox']
            });

            const page = await browser.newPage();
            await page.goto(url);

            let menus = [];
            let itens = await page.$$('.dropdownMenu2Link');
            for (let i of itens) {
                let obj = {
                    nome: await ( await i.getProperty( 'innerText' ) ).jsonValue(),
                    url:  await page.evaluate(el => el.getAttribute("href"), i)
                }
                menus.push(obj);
            }
            await browser.close();
            res.send(menus);

        })();
    } else {
        res.send('Invalid url: ' + url);
    }

});

app.listen(port, function () {
    console.log('App listening on port ' + port)
})