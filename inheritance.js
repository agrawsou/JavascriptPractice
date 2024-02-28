//parent class

class Automobile {
  constructor(chasisNumber) {
    this.chasisNumber = chasisNumber;
  }

  useAero() {
    console.log("Automobile --> Aero "+this.chasisNumber);
  }
}

class Vehicle extends Automobile {
  constructor(make, model, year) {
    super(2000)
    this.make = make;
    this.model = model;
    this.year = year;
  }

  getInfo() {
    return this.make + ", " + this.model + ", " + this.year;
  }

  startEngine() {
    console.log("Starting Engine " + this.make);
  }

  stopEngine() {
    console.log("Stopping Engine " + this.make);
  }
}

class Car extends Vehicle {
  constructor(make, model, year, fuelType) {
    super(make, model, year);
    this.fuelType = fuelType;
  }

  driverCar() {
    console.log("Driving the car " + this.model + " " + this.fuelType);
  }
}

class Truck extends Vehicle {
  constructor(make, model, year, load) {
    super(make, model, year);
    this.load = load;
  }

  driverTruck() {
    console.log("Driving the truck " + this.model + " capacity " + this.load);
  }
}

const car = new Car("Honda", "Civic", 2023, "Petrol");
const truck = new Truck("Tata", "Sumo", 2020, 100);

car.driverCar();
car.startEngine();
car.stopEngine();
console.log(car.getInfo());

truck.startEngine();
console.log(truck.getInfo());
truck.driverTruck();

car.useAero()
