    import React, { useEffect, useState } from "react";
    import { Bar } from "react-chartjs-2";
    import Navbar from "../Navbar/Navbar";
    import Footer from "../Index/Footer";
    import "chart.js/auto";
    import "/src/styles/Index.css";

    interface Trimestre {
    trimestre: string;
    meses: string[];
    cantidad: number[];
    }

    interface DatosTrimestrales {
    trimestres: Trimestre[];
    totalVentas: number;
    promedioTrimestral: number;
    }

    const PanelBalancesTrimestrales: React.FC = () => {
    const [datos, setDatos] = useState<DatosTrimestrales | null>(null);
    const [anioSeleccionado, setAnioSeleccionado] = useState<number>(2024);
    const [anioInput, setAnioInput] = useState<number>(anioSeleccionado);

    // Simular datos de ventas trimestrales por año
    const fetchDatosTrimestrales = (anio: number): DatosTrimestrales => {
        const datosPorAnio: { [key: number]: DatosTrimestrales } = {
        2023: {
            trimestres: [
            { trimestre: "Q1", meses: ["Enero", "Febrero", "Marzo"], cantidad: [100, 120, 140] },
            { trimestre: "Q2", meses: ["Abril", "Mayo", "Junio"], cantidad: [130, 150, 160] },
            { trimestre: "Q3", meses: ["Julio", "Agosto", "Septiembre"], cantidad: [200, 210, 180] },
            { trimestre: "Q4", meses: ["Octubre", "Noviembre", "Diciembre"], cantidad: [230, 190, 240] },
            ],
            totalVentas: 2200,
            promedioTrimestral: 550,
        },
        2024: {
            trimestres: [
            { trimestre: "Q1", meses: ["Enero", "Febrero", "Marzo"], cantidad: [120, 95, 130] },
            { trimestre: "Q2", meses: ["Abril", "Mayo", "Junio"], cantidad: [150, 110, 170] },
            { trimestre: "Q3", meses: ["Julio", "Agosto", "Septiembre"], cantidad: [200, 210, 190] },
            { trimestre: "Q4", meses: ["Octubre", "Noviembre", "Diciembre"], cantidad: [220, 180, 230] },
            ],
            totalVentas: 2000,
            promedioTrimestral: 500,
        },
        };

        return datosPorAnio[anio] || datosPorAnio[2024];
    };

    useEffect(() => {
        const datos = fetchDatosTrimestrales(anioSeleccionado);
        setDatos(datos);
    }, [anioSeleccionado]);

    if (!datos) return <p>Cargando datos...</p>;

    return (
        <div>
        <Navbar />
        <div className="container">
            <div className="typing-container titulo-main">
            <h1 className="typing-text text-center">Balance Trimestral de Ventas</h1>
            </div>

            {/* Selector de Año */}
            <div className="text-center mb-4 bg-light p-3 rounded">
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






            {/* Gráficos trimestrales */}
            <div className="row">
            {datos.trimestres.map((trimestre, index) => (
                <div key={index} className="col-md-6 col-lg-3 mb-4">
                <div className="card bg-light rounded shadow-sm">
                    <div className="card-header text-center">
                    <strong>{trimestre.trimestre}</strong>
                    </div>
                    <div className="card-body p-3">
                    <Bar
                        data={{
                        labels: trimestre.meses,
                        datasets: [
                            {
                            label: `Ventas ${trimestre.trimestre}`,
                            data: trimestre.cantidad,
                            backgroundColor: "rgba(0, 123, 255, 0.6)",
                            borderColor: "rgba(0, 123, 255, 1)",
                            borderWidth: 1,
                            },
                        ],
                        }}
                        options={{
                        plugins: {
                            legend: { display: false },
                        },
                        scales: {
                            x: { ticks: { color: "#555" } },
                            y: { ticks: { color: "#555" } },
                        },
                        maintainAspectRatio: false,
                        responsive: true,
                        }}
                    />
                    </div>
                </div>
                </div>
            ))}
            </div>
            <div className="row">
  {datos.trimestres.map((trimestre, index) => (
    <div key={index} className="col-md-6 col-lg-3 mb-4">
      <div className="card bg-light rounded shadow-sm">
        <div className="card-header text-center">
          <strong>{trimestre.trimestre}</strong>
        </div>
        <div className="card-body p-3">
          <h6>Datos Trimestrales:</h6>
          {trimestre.meses.map((mes, i) => (
            <p key={i}>
              <strong>{mes}:</strong> {trimestre.cantidad[i]} ventas
            </p>
          ))}
        </div>
      </div>
    </div>
  ))}
</div>

            {/* Resumen */}
            <div className="row d-flex justify-content-center">
            <div className="col-md-4 ">
                <div className="card bg-light">
                <div className="card-body text-center">
                    <h5>Total Ventas</h5>
                    <p>
                    <strong>{datos.totalVentas}</strong>
                    </p>
                </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className="card bg-light">
                <div className="card-body text-center">
                    <h5>Promedio Trimestral</h5>
                    <p>
                    <strong>{datos.promedioTrimestral}</strong>
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

    export default PanelBalancesTrimestrales;
