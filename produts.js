var product = [
    {
        id: "SP1",
        name: "Áo dài thêu họa tiết",
        img: "https://images2.thanhnien.vn/528068263637045248/2023/12/6/madelen-3-17018328238711157572745.jpg",
        price: 1122000,
        
    },
    {
        id: "SP2",
        name: "Váy xanh",
        img: "https://deam.com.vn/wp-content/uploads/2020/04/DSC_7783.jpg",
        price: 1345000,

    },
    {
        id: "SP3",
        name: "Váy màu cam",
        img: "https://product.hstatic.net/1000136076/product/img_1612_2948acf7363446b79a52e1622afa5145.jpg",
        price: 1258000,
    },
];


function Add() {
    var id = document.getElementById("id").value;
    var name = document.getElementById("name").value;
    var image = document.getElementById("image").value;
    var price = document.getElementById("price").value;
    //save
    
    sanpham.push({ id: id, name: name, image: image, price: price });
    localStorage.setItem('listProduct', JSON.stringify(sanpham));
    window.location.reload();
    Reset();
    Show();

}

function Show() {
    var tableBody = document.getElementById("sanpham");
    tableBody.innerHTML = "";
  
    for (var i = 0; i < sanpham.length; i++) {
      var row =
        "<tr><td>" +
        sanpham[i].id +
        "</td><td>" +
        sanpham[i].name +
        "</td><td><img src='" +
        sanpham[i].image +
        "' alt='Product Image' style='width:100px;height:auto;'></td><td>" +
        sanpham[i].price +
        "</td><td><button onclick='ViewDetail(" +
        i + 
        ")' class='btn btn-info'>View Detail</button></td><td><button onclick='Edit(" +
        i +
        ")' class='btn btn-primary'>Edit</button> <button onclick='Delete(" +
        i +
        ")' class='btn btn-danger'>Delete</button></td></tr>";
      tableBody.innerHTML += row;
    }
  }

  function ViewDetail(index) {
    window.location.href = "product_detail.html?index=" + index;
  }

function Reset() {
    document.getElementById("id").value = "";
    document.getElementById("name").value = "";
    document.getElementById("image").value = "";
    document.getElementById("price").value = "";
    localStorage.setItem('listProduct', JSON.stringify(sanpham));
    window.location.reload();
}

function Edit(index) {
    var product = sanpham[index];
    document.getElementById("id").value = product.id;
    document.getElementById("name").value = product.name;
    document.getElementById("image").value = product.image;
    document.getElementById("price").value = product.price;

    sanpham.splice(index, 1);
    localStorage.setItem('listProduct', JSON.stringify(sanpham));
    window.location.reload();
    Show();
}

function Delete(index) {
    sanpham.splice(index, 1);
    localStorage.setItem('listProduct', JSON.stringify(sanpham));
    window.location.reload();
    Show();
}
{
    function searchProduct() {
        var searchValue = document.getElementById("searchName").value.toLowerCase();
        var filteredProducts = sanpham.filter(function(product) {
            return product.name.toLowerCase().includes(searchValue);
        });
        displayProducts(filteredProducts);
    }
    
    function displayProducts(products) {
        var tableBody = document.getElementById("sanpham");
        tableBody.innerHTML = "";
    
        for (var i = 0; i < products.length; i++) {
            var row = "<tr><td>" + products[i].id + "</td><td>" + products[i].name + "</td><td><img src='" + products[i].image + "' alt='Product Image' style='width:100px;height:auto;'></td><td>" + products[i].price + "</td><td><button onclick='Edit(" + i + ")' class='btn btn-primary'>Edit</button> <button onclick='Delete(" + i + ")' class='btn btn-danger'>Delete</button></td></tr>";
            tableBody.innerHTML += row;
        }
    
    }
    
    function Reset() {
        document.getElementById("id").value = "";
        document.getElementById("name").value = "";
        document.getElementById("image").value = "";
        document.getElementById("price").value = "";
        
    }
    
}

listLocal();
