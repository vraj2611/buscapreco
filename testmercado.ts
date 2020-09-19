// await driver.get('https://superbomemcasa.com.br');
    

// // let menus = await driver.wait(until.elementsLocated(By.className('dropdownMenu2Link')))
// // for (const menu of menus) {
// //     let area = {
// //         nome: await menu.getText(),
// //         url: await menu.getAttribute('href')
// //     }
// //     console.log(area)
// // }
// }

// async function getProducts(driver, url){
// url = 'https://superbomemcasa.com.br/cesta-basica.2438c'
// await driver.get(url);
// let cards = await driver.wait(until.elementsLocated(By.css('[class*="ProductCard_productCardBody"]')))
// let produtos = []
// for (const card of cards) {
    
//     let nome_div = await card.findElement(By.css('[class*="ProductCard_productNameLink_"]'))
//     let preco_div = await card.findElement(By.css('[class*="ProductCard_price_"]'));
//     let img_div = await card.findElement(By.css('[class*="ProductCard_productImage_"]'));
    
//     let produto = {
//         nome: await nome_div.getText(),
//         url: await nome_div.getAttribute('href'),
//         preco: (await preco_div.getText()).split(" ")[0],
//         imagem: await img_div.getAttribute('data-src')
//     }
//     console.log(produto);
// }

// }