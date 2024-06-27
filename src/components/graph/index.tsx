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
import { useTheme } from "../theme-provider";
import { Card, CardContent } from "../ui/card";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const MyResponsiveBar: React.FC = () => {
  const { theme } = useTheme();

  const colorLight = "#09090B";
  const colorDark = "#F6F6F6";

  const optionsKwh = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        labels: {
          color: theme === "dark" ? colorDark : colorLight,
        },
      },
      title: {
        display: true,
        text: "Energia KWH",
        color: theme === "dark" ? colorDark : colorLight,
      },
    },
    scales: {
      x: {
        ticks: {
          color: theme === "dark" ? colorDark : colorLight,
        },
        grid: {
          color: theme === "dark" ? colorDark : colorLight,
        },
      },
      y: {
        ticks: {
          color: theme === "dark" ? colorDark : colorLight,
        },
        grid: {
          color: theme === "dark" ? colorDark : colorLight,
        },
      },
    },
  };

  const dataKwh = {
    labels: [
      "Janeiro",
      "Fevereiro",
      "Março",
      "Abril",
      "Maio",
      "Junho",
      "Julho",
      "Agosto",
      "Setembro",
      "Outubro",
      "Novembro",
      "Dezembro",
    ],
    datasets: [
      {
        label: "Valor Total sem GD",
        data: [60.5, 59, 80, 81, 56, 55, 40, 60, 70, 80, 90, 100],
        backgroundColor: theme === "dark" ? "#B5B35C" : "#006400",
      },
      {
        label: "Economia GD",
        data: [20, 40, 50, 60, 30, 55, 40, 60, 70, 80, 90, 100],
        backgroundColor: theme === "dark" ? "#F5F5F5" : "#77DD77",
      },
    ],
  };

  return (
    <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-4">
      <Card className="h-full w-full xl:col-span-2">
        <CardContent>
          <Bar options={optionsKwh} data={dataKwh} />
        </CardContent>
      </Card>

      <Card className="h-full w-full xl:col-span-2">
        <CardContent>
          <Bar options={optionsKwh} data={dataKwh} />
        </CardContent>
      </Card>
    </div>
  );
};
