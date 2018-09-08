var productsListLink = document.querySelectorAll(".products-grid .item .product-name a:not(.product-image)");
for (var i = 0; i < productsListLink.length; i++) {
    var a = productsListLink[i];
    var name = a.innerHTML || "";
    var addon = document.querySelector(".products-grid .item .product-name a:not(.product-image)").getAttribute('href');
    var newaddon = addon.replace("http://tomleemusic.ca/","");
    name += newaddon;
    a.innerHTML = name;
    a.setAttribute('title', name);
}
