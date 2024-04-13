import React from "react"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip
} from "chart.js"
import { Bar } from "react-chartjs-2"

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip
)

export const options = {
  indexAxis: 'y',
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    title: {
      display: true,
      text: '50 Kata Paling Sering Muncul',
    },
  },
}

const labels = ['fasilitas', 'tidak', 'kampus', 'lebih', 'ada', 'diperbaiki', 'kelas', 'mahasiswa', 'jalan', 'bisa', 'fakultas', 'karena', 'banyak', 'unsoed', 'perlu', 'gedung', 'kurang', 'lagi', 'ruang', 'baik', 'perbaikan', 'semoga', 'nyaman', 'agar', 'sudah', 'saya', 'tolong', 'seperti', 'rusak', 'sehingga', 'ac', 'masih', 'harus', 'dapat', 'kursi', 'itu', 'sangat', 'belajar', 'pada', 'tempat', 'wifi', 'toilet', 'adanya', 'segera', 'atau', 'fisik', 'dari', 'belakang', 'sebaiknya', 'beberapa']

const generateRandomColor = () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
};

const backgroundColors = labels.map(() => generateRandomColor());

export const data = {
  labels,
  datasets: [
    {
      label: 'Kata',
      data: [188, 174, 136, 123, 120, 109, 108, 103, 103, 101, 98, 94, 86, 84, 84, 80, 80, 76, 73, 70, 70, 70, 69, 68, 67, 65, 64, 63, 59, 57, 56, 53, 51, 50, 49, 48, 47, 46, 45, 45, 45, 44, 44, 44, 44, 42, 42, 41, 41, 41],
      borderColor: 'rgb(145, 207, 247)',
      backgroundColor: backgroundColors
    },
  ],
}

export default function BarChart() {
  return (
    <div style={{ marginTop: '20px', width: '100%', height: '1000px' }}>
      <Bar options={{ ...options, indexAxis: 'y' }} data={data} />
    </div>
  )
}
