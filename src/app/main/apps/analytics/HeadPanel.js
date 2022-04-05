import Card1 from "./widgets/Card1";
import { motion } from "framer-motion";
import Graph1 from "./widgets/Graph1";
import Meter from "./widgets/Meter";
import Chart1 from "./widgets/Chart1";
import AssetsTable from "./AssetsTable";
import Vulnerable from "./Vulnerable";
import Asset from "./Asset";
import Card3 from "./widgets/Card3";
import Card2 from "./widgets/Card2";
import Card4 from "./widgets/Card4";
function HeadPanel() {
  const data = {
    Widget1: {
      title: "ASSETS",
      name: "DISCOVERED",
      count: "857",
    },
    Widget2: {
      title: "VULNERABILITIES",
      name: "DISCOVERED",
      count: "3411",
    },
    Widget3: {
      title: "VULNERABILITIES",
      name: "RESOLVED",
      count: "23",
    },
    Widget4: {
      title: "UNPACHED",
      name: " VULNERABILITIES",
      count: "23",
    },
    Widget5: {
      id: "widget5",
      series: {
        Weekly: [
          {
            name: "Critical",
            data: [12, 13, 15, 12, 4, 8, 1, 6, 1, 2, 0, 9],
          },
          {
            name: "High",
            data: [3, 4, 4, 8, 2, 20, 9, 1, 2, 9, 5, 3],
          },
          {
            name: "Medium",
            data: [30, 34, 41, 38, 22, 35, 2, 19, 29, 39, 45, 38],
          },
          {
            name: "Low",
            data: [30, 34, 41, 38, 22, 32, 29, 19, 29, 39, 25, 38],
          },
          {
            name: "Informational",
            data: [45, 50, 62, 48, 24, 48, 29, 19, 29, 39, 25, 38],
          },
        ],
        Montly: [
          {
            name: "Critical",
            data: [12, 13, 15, 12, 4, 13, 1, 6, 1, 2, 0, 9],
          },
          {
            name: "High",
            data: [3, 4, 4, 8, 2, 20, 9, 1, 2, 9, 5, 3],
          },
          {
            name: "Medium",
            data: [30, 34, 41, 38, 22, 35, 2, 19, 29, 39, 45, 38],
          },
          {
            name: "Low",
            data: [30, 34, 41, 38, 22, 32, 29, 19, 29, 39, 25, 38],
          },
          {
            name: "Informational",
            data: [45, 50, 62, 48, 24, 48, 29, 19, 29, 39, 25, 38],
          },
        ],


        Quaterly: [
          {
            name: "Critical",
            data: [12, 13, 15, 12, 4, 13, 1, 6, 1, 2, 0, 9],
          },
          {
            name: "High",
            data: [3, 4, 4, 8, 2, 20, 9, 1, 2, 9, 5, 3],
          },
          {
            name: "Medium",
            data: [30, 34, 41, 38, 22, 35, 2, 19, 29, 39, 45, 38],
          },
          {
            name: "Low",
            data: [30, 34, 41, 38, 22, 32, 29, 19, 29, 39, 25, 38],
          },
          {
            name: "Informational",
            data: [45, 50, 62, 48, 24, 48, 29, 19, 29, 39, 25, 38],
          },
        ],


        Yearly: [
          {
            name: "Critical",
            data: [12, 13, 15, 12, 4, 13, 1, 6, 1, 2, 0, 9],
          },
          {
            name: "High",
            data: [3, 4, 4, 8, 2, 20, 9, 1, 2, 9, 5, 3],
          },
          {
            name: "Medium",
            data: [30, 34, 41, 38, 22, 35, 2, 19, 29, 39, 45, 38],
          },
          {
            name: "Low",
            data: [30, 34, 41, 38, 22, 32, 29, 19, 29, 39, 25, 38],
          },
          {
            name: "Informational",
            data: [45, 50, 62, 48, 24, 48, 29, 19, 29, 39, 25, 38],
          },
        ],
      },
      options: {
        chart: {
          type: "line",
          height: "100%",
          stacked: true,
          foreColor: "#999",
          toolbar: {
            show: false,
          },
          zoom: {
            enabled: false,
          },
        },
        stroke: {
          width: 3,
        },
        dataLabels: {
          enabled: false,
        },
        markers: {
          size: 0,
          strokeColor: "#fff",
          strokeWidth: 3,
          strokeOpacity: 1,
          fillOpacity: 1,
          hover: {
            size: 6,
          },
        },
        xaxis: {
          categories: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
          ],
          categoriesMonth: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
          ],
          axisBorder: {
            show: false,
          },
          axisTicks: {
            show: false,
          },
        },
        yaxis: {
          tooltip: {
            enabled: true,
          },
        },
        grid: {
          position: "back",
        },
        legend: {
          show: true,
        },
        fill: {
          type: "solid",
          opacity: 1,
        },
        tooltip: {
          followCursor: true,
          theme: "dark",
          fixed: {
            enabled: false,
            position: "topRight",
            offsetX: 0,
            offsetY: 0,
          },
        },
      },
    },
    Widget6: {
      id: "widget6",
      title: "Vulnerabilities Distribution",
      ranges: {
        TW: "This Week",
        LW: "Last Week",
        "2W": "2 Weeks Ago",
      },
      currentRange: "TW",
      mainChart: {
        series: {
          TW: [15, 20, 38, 27],
          LW: [19, 16, 42, 23],
          "2W": [18, 17, 40, 25],
        },
        options: {
          series: [76, 67, 61],
          chart: {
            height: "90%",
            type: "polarArea",
          },
          stroke: {
            width: 1,
            colors: undefined,
          },
          fill: {
            type: "solid",
            opacity: 0.7,
          },
          legend: {
            position: "bottom",
          },
          theme: {
            monochrome: {
              enabled: false,
              shadeTo: "light",
              shadeIntensity: 0.65,
            },
          },
          labels: ["WEB APPS", "APIs", "Cloud", "Mobile Apps"],
        },
      },
      footerLeft: {
        title: "Tasks Added",
        count: {
          "2W": 487,
          LW: 526,
          TW: 594,
        },
      },
      footerRight: {
        title: "Tasks Completed",
        count: {
          "2W": 193,
          LW: 260,
          TW: 287,
        },
      },
    },
  };

  const container = {
    show: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };
  return (
    < >
      <motion.div
        className="flex flex-wrap"
        variants={container}
        initial="hidden"
        animate="show"

      >
        <motion.div
          variants={item}
          className="widget flex w-full sm:w-1/2 md:w-1/4 p-12"
        >
          <Card1 data={data.Widget1} />
        </motion.div>
        <motion.div
          variants={item}
          className="widget flex w-full sm:w-1/2 md:w-1/4 p-12"
        >
          <Card2 data={data.Widget2} />
        </motion.div>
        <motion.div
          variants={item}
          className="widget flex w-full sm:w-1/2 md:w-1/4 p-12"
        >
          <Card4 data={data.Widget3} />
        </motion.div>
        <motion.div
          variants={item}
          className="widget flex w-full sm:w-1/2 md:w-1/4 p-12"
        >
          <Card3 data={data.Widget4} />
        </motion.div>
      </motion.div>
      <motion.div variants={item} className="widget w-full p-16 pb-48">
        <Graph1 data={data.Widget5} />
      </motion.div>
      <motion.div
        className="flex flex-wrap"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.div
          sx={{ height: "100" }}
          variants={item}
          className="widget flex w-full align-center sm:w-1/2 md:w-1/4 p-12"
          animate="show"
        >
          <Meter score="50" />
        </motion.div>
        <motion.div
          variants={item}
          className="widget flex w-full sm:w-1/2 md:w-1/4 p-12"
        >
          <Chart1 widget={data.Widget6} />
        </motion.div>
        <motion.div
          variants={item}
          className="widget flex w-full sm:w-1/2 p-12"
        >
          <AssetsTable />
        </motion.div>
      </motion.div>
      <motion.div
        className="flex flex-wrap"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.div
          variants={item}
          className="widget flex w-full sm:w-1/2 p-12"
        >
          <Asset />
        </motion.div>
        <motion.div
          variants={item}
          className="widget flex w-full sm:w-1/2 p-12"
        >
          <Vulnerable />
        </motion.div>
      </motion.div>
    </>
  );
}

export default HeadPanel;
