import React, { useEffect, useState } from "react";

import Navbar from "../Navbar/Navbar";
import "/src/styles/Index.css";
import Footer from "../Index/Footer";
import { Bar } from "react-chartjs-2";
import "chart.js/auto";

interface VentaMensual {
  mes: string;
  cantidad: number;
}

interface DatosVentas {
  ventas: VentaMensual[];
  totalVentas: number;
  promedioMensual: number;
  mejorMes: VentaMensual;
}

const PanelEstadisticoVentasAnuales: React.FC = () => {
  const [datos, setDatos] = useState<DatosVentas | null>(null);
  const [anioSeleccionado, setAnioSeleccionado] = useState<number>(2024);
  const [anioInput, setAnioInput] = useState<number>(anioSeleccionado);

  // Función simulada para obtener datos por año
  const fetchDatosPorAnio = (anio: number): DatosVentas => {
    const datosPorAnios: { [key: number]: DatosVentas } = {
      2023: {
        ventas: [
          { mes: "Enero", cantidad: 100 },
          { mes: "Febrero", cantidad: 120 },
          { mes: "Marzo", cantidad: 140 },
          { mes: "Abril", cantidad: 130 },
          { mes: "Mayo", cantidad: 150 },
          { mes: "Junio", cantidad: 160 },
          { mes: "Julio", cantidad: 200 },
          { mes: "Agosto", cantidad: 210 },
          { mes: "Septiembre", cantidad: 180 },
          { mes: "Octubre", cantidad: 230 },
          { mes: "Noviembre", cantidad: 190 },
          { mes: "Diciembre", cantidad: 240 },
        ],
        totalVentas: 2200,
        promedioMensual: 183.33,
        mejorMes: { mes: "Diciembre", cantidad: 240 },
      },
      2024: {
        ventas: [
          { mes: "Enero", cantidad: 120 },
          { mes: "Febrero", cantidad: 95 },
          { mes: "Marzo", cantidad: 130 },
          { mes: "Abril", cantidad: 150 },
          { mes: "Mayo", cantidad: 110 },
          { mes: "Junio", cantidad: 170 },
          { mes: "Julio", cantidad: 200 },
          { mes: "Agosto", cantidad: 210 },
          { mes: "Septiembre", cantidad: 190 },
          { mes: "Octubre", cantidad: 220 },
          { mes: "Noviembre", cantidad: 180 },
          { mes: "Diciembre", cantidad: 230 },
        ],
        totalVentas: 2000,
        promedioMensual: 166.67,
        mejorMes: { mes: "Diciembre", cantidad: 230 },
      },
    };

    return datosPorAnios[anio] || datosPorAnios[2024];
  };

  useEffect(() => {
    // Simulación de fetch al cambiar el año
    const datos = fetchDatosPorAnio(anioSeleccionado);
    setDatos(datos);
  }, [anioSeleccionado]);

  if (!datos) return <p>Cargando datos...</p>;

  // Preparar datos para el gráfico
  const chartData = {
    labels: datos.ventas.map((venta) => venta.mes),
    datasets: [
      {
        label: `Ventas del Año ${anioSeleccionado}`,
        data: datos.ventas.map((venta) => venta.cantidad),
        backgroundColor: "rgba(0, 123, 255, 0.6)", // Azul Bootstrap
        borderColor: "rgba(0, 123, 255, 1)",
        borderWidth: 1,
      },
    ],
  };

  return (
    <div>
        <Navbar />
        <div className="container">
       <div className="typing-container titulo-main">
        <h1 className="typing-text text-center">Balance Anual de Ventas</h1>
      </div>

      {/* Selector de Año */}
      <div className="text-center mb-4 bg-light p-3 rounded w-100">
        <label htmlFor="anioSeleccionado" className="form-label">
          Seleccionar Año:
        </label>
        <div className="d-inline-flex align-items-center">
          <input
            id="anioSeleccionado"
            type="number"
            className="form-control form-control-sm w-auto text-center"
            value={anioInput}
            onChange={(e) => setAnioInput(Number(e.target.value))}
            style={{ marginRight: "10px" }}
          />
          <button
            className="btn btn-primary btn-sm"
            onClick={() => setAnioSeleccionado(anioInput)}
          >
            Confirmar
          </button>
        </div>
      </div>

      <div className="row">
        {/* Gráfico de barras */}
        <div
          className="col-md-8 bg-light rounded shadow-sm p-3   pt-4 mb-3"
          style={{ maxHeight: "400px" }}
        >
          <Bar data={chartData} />
        </div>

        {/* Información estadística */}
        <div className="col-md-4">
          <div className="card mb-3 bg-light">
            <div className="card-body">
              <h5 className="card-title">Total Ventas</h5>
              <p className="card-text">
                <strong>{datos.totalVentas}</strong>
              </p>
            </div>
          </div>
          <div className="card mb-3 bg-light">
            <div className="card-body">
              <h5 className="card-title">Promedio Mensual</h5>
              <p className="card-text">
                <strong>{datos.promedioMensual.toFixed(2)}</strong>
              </p>
            </div>
          </div>
          <div className="card bg-light">
            <div className="card-body">
              <h5 className="card-title">Mejor Mes</h5>
              <p className="card-text">
                {datos.mejorMes.mes} ({datos.mejorMes.cantidad})
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <Footer />
    </div>
  );
};

export default PanelEstadisticoVentasAnuales;
