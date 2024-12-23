import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import { Box } from '@mui/material';
import { WorkData } from '../../data/work.secure.data';

const countTechnologies = (workData) => {
  const technologies = workData.map(work => work.technologies_used).flat();
  const techCount = {};

  technologies.forEach(tech => {
    techCount[tech] = (techCount[tech] || 0) + 1;
  });

  return Object.keys(techCount).map(tech => ({
    label: tech,
    value: techCount[tech],
  }));
};

export default function PieActiveArc(props) {
  const chartData = countTechnologies(WorkData);
  const valueFormatter = (item) => `${item.value}`;

  return (
    <Box sx={{ width: '100%', height: 300 }} className={props.className}>
      <PieChart
        series={[
          {
            data: chartData,
            highlightScope: { fade: 'global', highlight: 'item' },
            faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
            valueFormatter,
          },
        ]}
        height={200}
      />
    </Box>
  );
}
