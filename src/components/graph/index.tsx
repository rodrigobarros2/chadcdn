import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const optionsKwh = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Energia KWH",
    },
  },
};

export const MyResponsiveBar: React.FC = ({ dataApi }) => {
  const dataKwh = {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        label: "Consumo de Energia Elétrica",
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: "#00FE88",
      },
      {
        label: "Energia Compensada",
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: "#02231C",
      },
    ],
  };

  return (
    <div>
      <Bar options={optionsKwh} data={dataKwh} />
    </div>
  );
};
