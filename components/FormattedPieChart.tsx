import React from 'react';
import PieChart from './PieChartWrapper';

interface FormattedPieChartWrapperProps {
  data: any[];
}

const FormattedPieChartWrapper: React.FC<FormattedPieChartWrapperProps> = ({ data, ...props }) => {
  const formatter = (value: number) => `${(value * 100).toFixed(0)}%`;

  return (
    <PieChart
      {...props}
      series={[
        {
          data: data.map((item) => ({
            ...item,
            value: item.value / 100,
            formattedValue: formatter(item.value / 100),
          })),
          highlightScope: { faded: 'global', highlighted: 'item' },
          faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
        },
      ]}
    />
  );
};

export default FormattedPieChartWrapper;