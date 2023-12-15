var nameInput = document.getElementById("productName")
var priceInput = document.getElementById("productPrice")
var productCatInput = document.getElementById("productCategory")
var saleInput = document.getElementById("productSale")
var descInput = document.getElementById("productDescription")
var productList = [];
var searchInput = document.getElementById("SearchInput")

if (localStorage.getItem("datalist") != null) {
    productList = JSON.parse(localStorage.getItem("datalist"))
    datashow()
}
function addProduct() {
    var product = {
        name: nameInput.value,
        price: priceInput.value,
        category: productCatInput.value,
        chek: saleInput.checked,
        description: descInput.value
    }
    productList.push(product)
    datashow()
    localStorage.setItem("datalist", JSON.stringify(productList))
}
function datashow() {
    var temp = ""
    for (var i = 0; i < productList.length; i++) {
        temp += `<tr>
        <td> `+ i + `</td>
        <td>`+ productList[i].name + `</td>
        <td>`+ productList[i].price + `</td>
        <td>`+ productList[i].category + `</td>
        <td>`+ productList[i].chek + `</td>
        <td>`+ productList[i].description + `</td>
        <td><button class="btn btn-warning">Update</button></td>
        <td><button class="btn btn-danger">delete</button></td>
    </tr> `
    }
    document.getElementById("tableData").innerHTML = temp
}

function search()
{
    var SearchVal = searchInput.value.toLowerCase();
    var temp = "";
    for (var i = 0; i < productList.length; i++){
        if (productList[i].name.toLowerCase().includes(SearchVal) ||
        productList[i].category.toLowerCase().includes(SearchVal))
        {temp += `<tr>
        <td> `+ i + `</td>
        <td>`+ productList[i].name.toLowerCase().replace(SearchVal,"<span class='bg-info'>"+SearchVal+"</span>") +`</td>
        <td>`+ productList[i].price + `</td>
        <td>`+ productList[i].category.toLowerCase().replace(SearchVal,"<span class='bg-info'>"+SearchVal+"</span>") +`</td>
        <td>`+ productList[i].chek + `</td>
        <td>`+ productList[i].description + `</td>
        <td><button class="btn btn-warning">Update</button></td>
        <td><button class="btn btn-danger">delete</button></td>
    </tr> `

        }
        
    }
    document.getElementById("tableData").innerHTML = temp
 }