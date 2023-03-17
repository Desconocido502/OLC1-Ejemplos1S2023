// Clase base que define el prototipo
class Shape {
    constructor() {
      this.type = null;
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
  }
  
  // Clase derivada que hereda del prototipo
  class Circle extends Shape {
    constructor() {
      super(); // Llamamos al constructor de la clase base
      this.radius = null;
      this.type = 'Círculo';
    }
  /*
    copia todas las propiedades del objeto actual.
     De esta manera, podemos clonar un objeto existente en lugar 
     de crear uno nuevo desde cero.
    */
    clone() {
      return Object.create(this);
    }
    
    getRadius() {
      return this.radius;
    }
  
    setRadius(radius) {
      this.radius = radius;
    }
  }
  
  // Creamos un objeto círculo y lo clonamos
  const circle1 = new Circle();
  circle1.setRadius(5);
  const circle2 = circle1.clone();
  
  console.log(circle1.getType()); // Círculo
  console.log(circle2.getType()); // Círculo
  console.log(circle1.getRadius()); // 5
  console.log(circle2.getRadius()); // 5