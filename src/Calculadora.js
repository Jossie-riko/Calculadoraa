import { useState } from "react";
import Button from "./Button";

const Calculadora = () => {
  // Estado que muestra el número en pantalla
  const [contador, setContador] = useState("");
  // Guardamos el primer número antes de seleccionar operación
  const [primerNumero, setPrimerNumero] = useState("");
  // Guardamos qué operación se eligió (+, -, x, /)
  const [operador, setOperador] = useState("");

  // Para añadir un número al display
  const ImputNumber = (num) => {
    setContador((prev) => prev + num);
  };

  // Guardamos el primer número y la operación elegida
  function guardaNum(op) {
    setPrimerNumero(contador); // guardamos el valor actual
    setOperador(op); // guardamos el operador
    setContador(""); // limpiamos pantalla para ingresar del segundo número
  }

  // Cuando se presiona "=" resolvemos la operación
  function calcular() {
    let resultado;
    const num1 = parseFloat(primerNumero);
    const num2 = parseFloat(contador);

    if (isNaN(num1) || isNaN(num2)) return; // Evitar errores si falta número

    switch (operador) {
      case "+":
        resultado = num1 + num2;
        break;
      case "-":
        resultado = num1 - num2;
        break;
      case "x":
        resultado = num1 * num2;
        break;
      case "/":
        // Evitamos dividir por 0
        resultado = num2 !== 0 ? num1 / num2 : "Error";
        break;
      default:
        return;
    }

    // Mostramos resultado en pantalla
    setContador(resultado.toString());
    // Reiniciamos operador
    setOperador("");
    setPrimerNumero("");
  }

  // Limpiar todo
  function limpiar() {
    setContador("");
    setPrimerNumero("");
    setOperador("");
  }

  return (
    <div>
      {/* Display que muestra el número o resultado */}
      <label>Contador: {contador}</label>
      <br />

      {/* Botones numéricos */}
      <div>
        <Button onClick={() => ImputNumber("0")}>0</Button>
        <Button onClick={() => ImputNumber("1")}>1</Button>
        <Button onClick={() => ImputNumber("2")}>2</Button>
        <Button onClick={() => ImputNumber("3")}>3</Button>
        <Button onClick={() => ImputNumber("4")}>4</Button>
        <br />
        <Button onClick={() => ImputNumber("5")}>5</Button>
        <Button onClick={() => ImputNumber("6")}>6</Button>
        <Button onClick={() => ImputNumber("7")}>7</Button>
        <Button onClick={() => ImputNumber("8")}>8</Button>
        <Button onClick={() => ImputNumber("9")}>9</Button>
      </div>

      {/* Botones de operaciones */}
      <div>
        <button onClick={() => guardaNum("+")}>+</button>
        <button onClick={() => guardaNum("-")}>-</button>
        <button onClick={() => guardaNum("x")}>x</button>
        <button onClick={() => guardaNum("/")}>/</button>
        <button onClick={calcular}>=</button>
        <button onClick={limpiar}>Limpiar</button>
      </div>
    </div>
  );
};

export default Calculadora;
