class Person {
    constructor(name, age, email, phone) {
        this.name = name;
        this.age = age;
        this.email = email;
        this.phone = phone;
    }

    toString() {
        return `Name: ${this.name}, Age: ${this.age}, Email: ${this.email}, Phone: ${this.phone}`;
    }
}

// Example usage
const person = new Person("John Doe", 30, "john.doe@example.com", "123-456-7890");
console.log(person.toString());


//calculate uber price
const baseFare = 2.50; // Base fare in dollars
const costPerKm = 1.20; // Cost per kilometer in dollars
const costPerMinute = 0.25; // Cost per minute in dollars

class UberPriceCalculator {
    constructor(baseFare, costPerKm, costPerMinute) {
      this.baseFare = baseFare;
      this.costPerKm = costPerKm;
      this.costPerMinute = costPerMinute;
    }
  
    calculatePrice(distance, time) {
      const totalCost = this.baseFare + (this.costPerKm * distance) + (this.costPerMinute * time);
      return totalCost;
    }
  }
  
  const uberCalculator = new UberPriceCalculator(baseFare, costPerKm, costPerMinute);
  
  const distance = 10; // Distance in kilometers
  const time = 15; // Time in minutes
  
  const price = uberCalculator.calculatePrice(distance, time);
  
  console.log(`The total Uber price is: ${price.toFixed(2)}`); // Use template literal
  

  
  console.log("The total Uber price is: $" + price.toFixed(2));