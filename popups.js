var productsListLink = document.querySelectorAll(".products-grid .item .product-name a:not(.product-image)");
for (var i = 0; i < productsListLink.length; i++) {
    var a = productsListLink[i];
    var name = a.innerHTML || "";
    var addon = a.getAttribute('href');
    var newaddon = " SKU: " + addon.replace("http://tomleemusic.ca/","");
    name += newaddon;
    a.innerHTML = name;
    a.setAttribute('title', name);
}
