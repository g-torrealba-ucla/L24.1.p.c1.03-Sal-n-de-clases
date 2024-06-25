/**
 * SALÓN DE CLASES
 * Sea un salón de clases en el DCyT, donde se procesan los datos de cada estudiante
 * (nombre, edad y sexo). El dato sexo es una letra F o M (femenino - masculino).
 * Se desean procesar estos registros de estudiantes para determinar: a. la edad
 * promedio, b. el nombre del estudiante con mayor edad, c. el porcentaje de chicas
 * que son mayor de edad.
 * El profesor informa que si asisten Luis (16), Ana (19), José (20) y Carmen (18), la salida requerida presenta el siguiente formato:
 * Edad promedio: 18.25
 * Estudiante con mayor edad: José
 * Porcentaje de chicas mayor de edad: 100%
 */

import Cl_salon from "./Cl_salon.js";
import Cl_estudiante from "./Cl_estudiante.js";

let estud1 = new Cl_estudiante("Luis", 16, "M");
let estud2 = new Cl_estudiante("Ana", 19, "F");
let estud3 = new Cl_estudiante("José", 20, "M");
let estud4 = new Cl_estudiante("Carmen", 18, "F");

let salon = new Cl_salon();

salon.procesarEstudiante(estud1);
salon.procesarEstudiante(estud2);
salon.procesarEstudiante(estud3);
salon.procesarEstudiante(estud4);

let salida = document.getElementById("salida");

salida.innerHTML = `
<br>Edad promedio: ${salon.edadPromedio()}
<br>Estudiante con mayor edad: ${salon.nombreMayorEdad()}
<br>Porcentaje de chicas mayor de edad: ${salon.porcChicasMayEdad()}%
`;
