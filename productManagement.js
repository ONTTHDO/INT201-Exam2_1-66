const products = [
    { id: 1, name: "Laptop", category: "Electronics", price: 1000 },
    { id: 2, name: "Phone", category: "Electronics", price: 500 }
];

class Product {
    constructor(id, name, category, price) {
        this.id = id
        this.name = name
        this.category = category
        this.price = price
    }
}

function ProductManagement() {

    function addProduct(products, product) {
        products.push(product)
        // เพิ่ม product ลงใน products (array) โดยใช้ push()
        return products
        // return products หลังจากเพิ่ม product ไปเรียบร้อยแล้ว
    }

    function findProductsByCategory(products, category) {
        return products.filter((product) => product.category === category)
        // filter product ใน products เฉพาะตัวที่ category ตรงกับที่รับเข้ามา
    }

    function sortByCategory(products) {
        return products.sort((a, b) => a.category.toLowerCase().localeCompare(b.category.toLowerCase()))
        // sort ตามตัวอักษรของ category (property) ใน product (element) โดยใช้ localeCompare
        // และทำให้ string เป็นพิมพ์เล็ก toLowerCase() สำหรับ case-insensitive
    }

    function applyDiscount(products, discountFunction) {
        // ใช้ forEach ส่ง product แต่ละตัวใน products array ไปทำงานกับ discountFunction ซึ่งเป็น callBack ที่รับเข้ามาผ่าน parameter
        products.forEach((product) => {
            discountFunction(product);
        });
    }

    return {
        addProduct,
        findProductsByCategory,
        sortByCategory,
        applyDiscount
    }

}

module.exports = ProductManagement