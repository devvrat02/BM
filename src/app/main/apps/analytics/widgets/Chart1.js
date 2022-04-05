import Paper from '@mui/material/Paper';
import Select from '@mui/material/Select';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import _ from '@lodash';
import { useEffect, memo, useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import MenuItem from '@mui/material/MenuItem';

function Chart1(props) {
  const [currentRange, setCurrentRange] = useState(props.widget.currentRange);
  const [awaitRender, setAwaitRender] = useState(true);

  const widget = _.merge({}, props.widget);
  const theme = useTheme();

  function handleChangeRange(ev) {
    setCurrentRange(ev.target.value);
  }
  const color = ['#500207', '#d34726', '#f8a018', '#70964b'];
  // _.setWith(widget,  'options.colors', color);
  // _.setWith(widget, 'mainChart.options.theme.monochrome.color', theme.palette.secondary.main);

  useEffect(() => {
    setAwaitRender(false);
  }, []);

  if (awaitRender) {
    return null;
  }

  return (
    <Paper className="w-full overflow-hidden" variant="outlined" square >
      <div className="flex items-center justify-between p-20 h-64 ">
        <Typography className="text-16 font-medium">{widget.title}</Typography>
      </div>
      <div className="h-400 w-full">
        <ReactApexChart
          options={widget.mainChart.options}
          series={widget.mainChart.series[currentRange]}
          type={widget.mainChart.options.chart.type}
          height={widget.mainChart.options.chart.height}
        />
      </div>

    </Paper>
  );

}
export default Chart1;