export default class Cl_salon {
  constructor() {
    this.acEdad = 0;
    this.cntEstud = 0;
    this.edadMay = 0;
    this.nombreMayor = 0;
    this.cntChicas = 0;
    this.cntChicasmay18 = 0;
  }
  procesarEstudiante(e) {
    this.acEdad += e.edad;
    this.cntEstud++;
    if (e.edad > this.edadMay) {
      this.edadMay = e.edad;
      this.nombreMayor = e.nombre;
    }
    if (e.sexo == "F") {
      this.cntChicas++;
      if (e.edad >= 18) {
        this.cntChicasmay18++;
      }
    }
  }
  edadPromedio() {
    return this.acEdad / this.cntEstud;
  }
  porcChicasMayEdad() {
    return (this.cntChicasmay18 / this.cntChicas) * 100;
  }
  nombreMayorEdad() {
    return this.nombreMayor;
  }
}
