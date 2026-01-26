//  CÂU 1
function Product(id, name, price, quantity, category, isAvailable) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.quantity = quantity;
    this.category = category;
    this.isAvailable = isAvailable;
}

//  CÂU 2
let products = [
    new Product(1, "Chuột Logitech G102", 400000, 50, "Accessories", true),
    new Product(2, "Bàn phím cơ Keychron", 1800000, 10, "Accessories", true),
    new Product(3, "Laptop Dell XPS", 35000000, 2, "Laptop", true),
    new Product(4, "MacBook Pro M1", 42000000, 0, "Laptop", false), // Hết hàng
    new Product(5, "Tai nghe Sony WH-1000XM5", 8000000, 5, "Accessories", true),
    new Product(6, "Laptop Asus Gaming", 25000000, 0, "Laptop", true) // Còn bán nhưng hết kho
];

console.log("=== DANH SÁCH SẢN PHẨM GỐC ===");
console.log(products);

//  CÂU 3
let nameAndPrice = products.map(sp => {
    return { name: sp.name, price: sp.price };
});
console.log("\n=== CÂU 3: Mảng chỉ lấy Name và Price ===");
console.log(nameAndPrice);

//  CÂU 4
let availableProducts = products.filter(sp => sp.quantity > 0);
console.log("\n=== CÂU 4: Các sản phẩm còn hàng trong kho ===");
console.log(availableProducts);

//  CÂU 5
let isHighPriceExist = products.some(sp => sp.price > 30000000);
console.log("\n=== CÂU 5: Có sản phẩm giá > 30 triệu không? ===");
console.log(isHighPriceExist ? "Có" : "Không");

//  CÂU 6
let accessoryList = products.filter(sp => sp.category === "Accessories");
let allAccessoriesActive = accessoryList.every(sp => sp.isAvailable === true);
console.log("\n=== CÂU 6: Tất cả phụ kiện đều đang mở bán (isAvailable=true)? ===");
console.log(allAccessoriesActive ? "Đúng, tất cả đang bán" : "Sai, có cái đã ngừng bán");

//  CÂU 7

let totalValue = products.reduce((total, sp) => {
    return total + (sp.price * sp.quantity);
}, 0);
let moneyFormat = totalValue.toLocaleString('vi-VN', {style: 'currency', currency: 'VND'});
console.log("\n=== CÂU 7: Tổng giá trị kho hàng ===");
console.log(moneyFormat);

//  CÂU 8
console.log("\n=== CÂU 8: Duyệt mảng bằng for...of ===");
for (const sp of products) {
    let trangThai = sp.isAvailable ? "Đang bán" : "Ngừng bán";
    console.log(`Tên: ${sp.name} - Danh mục: ${sp.category} - Trạng thái: ${trangThai}`);
}

//  CÂU 9
console.log("\n=== CÂU 9: Duyệt thuộc tính SP đầu tiên bằng for...in ===");
let firstProduct = products[0]; 
for (const key in firstProduct) {
    console.log(`Thuộc tính '${key}' có giá trị là: ${firstProduct[key]}`);
}

//  CÂU 10

let idealProducts = products
    .filter(sp => sp.isAvailable === true && sp.quantity > 0)
    .map(sp => sp.name); 

console.log("\n=== CÂU 10: Tên các SP đang bán và còn hàng ===");
console.log(idealProducts);