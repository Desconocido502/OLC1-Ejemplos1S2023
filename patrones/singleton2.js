class Database {
    constructor(data) {
      if (Database.exists) {
        return Database.instance;
      }
      this._data = data; // Guardamos los datos en la instancia
      Database.instance = this; // Guardamos la instancia en la propiedad estática
      Database.exists = true; // Cambiamos el valor de la propiedad estática
      return this; // Devolvemos la instancia
    }
  
    getData() {
      return this._data;
    }
  
    setData(data) {
      this._data = data;
    }
  }
  
  // Creamos la instancia única de la base de datos
  const mongo = new Database('MongoDB');
  console.log(mongo.getData()); // MongoDB
  
  // Intentamos crear otra instancia, pero obtenemos la misma
  const mysql = new Database('MySQL');
  console.log(mysql.getData()); // MongoDB
  
  // Intentamos cambiar los datos de la instancia
  mysql.setData('PostgreSQL');
  console.log(mongo.getData()); // PostgreSQL