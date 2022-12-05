//Part One: create class for vehicle
class Vehicle {
    constructor(make, model, year){
    this.make = make;
    this.model = model;
    this.year = year;
    }
    
    honk() {
      console.log("Beep");
    }
    
    toString() {
      console.log(`The vehicle is a ${this.make} ${this.model} from ${this.year}`);
    }
}


//Part Two: Create a class for a car
class Car extends Vehicle {
    constructor(make, model, year){
        super(make, model, year);
        this.numWheels = 4;
    }
}

//Part Three: create a class for motorcycle
class Motorcycle extends Vehicle {
    constructor(make, model, year){
        super(make, model, year);
        this.numWheels = 2;
    }

    revEngine() {
        return "VROOM!!!"
    }
}

//Part Four: create a class for garage
class Garage {
    constructor(capacity){
        this.capacity = capacity;
        this.vehicles = [];
    }

    add(vehicle) {
        if(! (vehicle instanceof Vehicle)){
            return "Only vehicles are allowed in here!";
        }

        if(this.vehicles.length >= this.capacity){
            return "Sorry, we're full";
        }

        this.vehicles.push(vehicle);
        return "Vehicle added!";
    }
}
