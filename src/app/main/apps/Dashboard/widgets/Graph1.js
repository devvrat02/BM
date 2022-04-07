import _ from '@lodash';
import Card from '@mui/material/Card';
import { useTheme } from '@mui/material/styles';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Typography from '@mui/material/Typography';
import { memo, useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import Box from '@mui/material/Box';

function Graph1(props) {
  const theme = useTheme();
  const [tabValue, setTabValue] = useState(0);
  const data = _.merge({}, props.data);
  const series = data.series[Object.keys(data.series)[tabValue]];
  const color = {
    crit: '#500207',
    high: '#d34726',
    mid: '#f8a018',
    low: '#70964b',
    info: '#01a0de',
  };
  _.setWith(data, 'options.colors', [color.crit, color.high, color.mid, color.low, color.info]);

  return (
    <Card className="w-full" varient="outlined" square >
      <div className="relative p-20 flex flex-row items-center justify-between">
        <div className="flex flex-col">
          <Typography className="h3 sm:h2 font-medium">Risk Status</Typography>
        </div>

        <div className="flex flex-row items-center">
          <Tabs
            value={tabValue}
            onChange={(event, value) => setTabValue(value)}
            indicatorColor="secondary"
            textColor="inherit"
            variant="scrollable"
            scrollButtons={false}
            className="w-full px-24 -mx-4 min-h-40"
            classes={{ indicator: 'flex justify-center bg-transparent w-full h-full' }}
            TabIndicatorProps={{
              children: (
                <Box
                  sx={{ bgcolor: 'text.disabled' }}
                  className="w-full h-full rounded-full opacity-20"
                />
              ),
            }}
          >
            {Object.keys(data.series).map((key) => (
              <Tab
                key={key}
                className="text-14 font-semibold min-h-40 min-w-64 mx-4 px-12 capitalize"
                disableRipple
                label={key}
              />
            ))}
          </Tabs>
        </div>
      </div>

      <div className="relative h-200 sm:h-320 sm:pb-16">
        <ReactApexChart
          options={data.options}
          series={series}
          type={data.options.chart.type}
          height={data.options.chart.height}
        />
      </div>
    </Card>
  );
}
export default memo(Graph1);