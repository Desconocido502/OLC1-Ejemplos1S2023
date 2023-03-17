let Singleton = (function () {
    let instance;
  
    function createInstance() { //es responsable de crear el objeto único
      let object = new Object("Soy la instancia única");
      return object;
    }
  
    return {
      getInstance: function () { //se encarga de verificar si la instancia ya ha sido creada y devolverla en caso contrario
        if (!instance) {
          instance = createInstance();
        }
        return instance;
      },
    };
  })();
  
  let instance1 = Singleton.getInstance();
  let instance2 = Singleton.getInstance();
  
  console.log(instance1 === instance2); // true