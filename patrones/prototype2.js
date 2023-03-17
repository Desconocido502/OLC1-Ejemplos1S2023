// Clase base que define el prototipo
class Vehicle {
    constructor() {
      this.type = null;
      this.make = null;
      this.model = null;
      this.color = null;
    }
  
    clone() {
      throw new Error("Método 'clone()' no implementado.");
    }
  
    getType() {
      return this.type;
    }
  
    setType(type) {
      this.type = type;
    }
  
    getMake() {
      return this.make;
    }
  
    setMake(make) {
      this.make = make;
    }
  
    getModel() {
      return this.model;
    }
  
    setModel(model) {
      this.model = model;
    }
  
    getColor() {
      return this.color;
    }
  
    setColor(color) {
      this.color = color;
    }
  }
  
  // Clase derivada que hereda del prototipo
  class Car extends Vehicle {
    constructor() {
      super();  // Llamamos al constructor de la clase base
      this.type = 'Carro';
    }
  
    clone() {
      const car = new Car();
      car.setType(this.type);
      car.setMake(this.make);
      car.setModel(this.model);
      car.setColor(this.color);
      return car;
    }
  }
  
  // Creamos un objeto coche y lo clonamos
  const car1 = new Car();
  car1.setMake('Toyota');
  car1.setModel('Corolla');
  car1.setColor('Rojo');
  const car2 = car1.clone();
  
  console.log(car1.getType()); // Carro
  console.log(car2.getType()); // Carro
  console.log(car1.getMake()); // Toyota
  console.log(car2.getMake()); // Toyota
  console.log(car1.getModel()); // Corolla
  console.log(car2.getModel()); // Corolla
  console.log(car1.getColor()); // Rojo
  console.log(car2.getColor()); // Rojo