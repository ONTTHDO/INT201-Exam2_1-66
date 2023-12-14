class Order {
  constructor(orderId, customerName) {
    this.orderId = orderId;
    this.customerName = customerName;
    this.items = [];
  }

  addItem(item) {
    if (this.isItem(item)) {
      this.items.push(item);
      return item;
    } else {
      return -1;
    }
  }

  removeItem(itemName) {
    const index = this.items.findIndex(item => item.name.toLowerCase() === itemName.toLowerCase());
    if (index !== -1) {
      this.items.splice(index, 1);
    }
  }

  calculateTotal() {
    return this.items.reduce((total, item) => total + item.price * item.quantity, 0);
  }

  getDiscountedTotal(discountPercentage) {
    if (discountPercentage < 0 || discountPercentage > 100) {
      return "invalid discount percentage";
    }

    const total = this.calculateTotal();
    return total - (total * discountPercentage) / 100;
  }

  findItemByName(itemName) {
    return this.items.find(item => item.name.toLowerCase() === itemName.toLowerCase()) || null;
  }

  sortItemsByPrice(sortingOrder) {
    if (sortingOrder !== "ascending" && sortingOrder !== "descending") {
      return [];
    }

    if (this.items.length === 0) {
      return [];
    }

    const sortedItems = [...this.items];
    sortedItems.sort((a, b) => (sortingOrder === "ascending" ? a.price - b.price : b.price - a.price));
    return sortedItems;
  }

  isItem(item) {
    return (
      item &&
      item.name !== undefined &&
      item.name !== null &&
      item.name !== "" &&
      item.price !== undefined &&
      item.price !== null &&
      item.price > 0 &&
      item.quantity !== undefined &&
      item.quantity !== null &&
      item.quantity > 0
    );
  }
}

// Example usage:
const myOrder = new Order(1001, "Jonathan Wick");

myOrder.addItem({ name: "Laptop", price: 1000, quantity: 1 });
myOrder.addItem({ name: "Keyboard", price: 100, quantity: 2 });
myOrder.addItem({ name: "Mouse", price: 25, quantity: 3 });
myOrder.addItem({ name: "", price: 100, quantity: 1 }); // Returns -1
myOrder.addItem({ name: "Headphones", price: -50, quantity: 1 }); // Returns -1

myOrder.removeItem("Laptop");
myOrder.removeItem("Keyboard");
myOrder.removeItem("NonExistentItem");
myOrder.removeItem(""); // Tries to remove an item with an empty name
myOrder.removeItem("Mouse");

console.log(myOrder.calculateTotal()); // Calculates total price
console.log(myOrder.getDiscountedTotal(10)); // Applies 10% discount
console.log(myOrder.getDiscountedTotal(0)); // No discount applied
console.log(myOrder.getDiscountedTotal(100)); // Applies 100% discount
console.log(myOrder.getDiscountedTotal(-10)); // Negative discount percentage
console.log(myOrder.getDiscountedTotal(150)); // Discount more than 100%

console.log(myOrder.findItemByName("Laptop"));
console.log(myOrder.findItemByName("Keyboard"));
console.log(myOrder.findItemByName("NonExistentItem"));
console.log(myOrder.findItemByName(""));
console.log(myOrder.sortItemsByPrice("ascending"));
console.log(myOrder.sortItemsByPrice("descending"));
console.log(myOrder.sortItemsByPrice("nonexistentOrder"));
console.log(myOrder.sortItemsByPrice("ascending"));
console.log(myOrder.isItem({ name: "Pen", price: 3, quantity: 10 }));
console.log(myOrder.isItem({ name: "Paper", price: 5, quantity: 20 }));
console.log(myOrder.isItem({ price: 20, quantity: 1 }));
console.log(myOrder.isItem({ name: "Notebook", price: -10, quantity: 5 }));
console.log(myOrder.isItem({ name: "Notebook", price: 10, quantity: -5 }));
console.log(myOrder.isItem({ name: "", price: 15, quantity: 5 }));
                 
