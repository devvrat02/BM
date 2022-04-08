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
import { Data } from "./Data";
function HeadPanel() {
  const data = JSON.parse(JSON.stringify(Data));
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
      <motion.div
        className="flex flex-wrap"
        variants={container}
        initial="hidden"
        animate="show"
        className="widget flex item-center  align-center  p-12"
      >
        <Graph1 data={data.Widget5} />

      </motion.div>
      <motion.div
        className="flex flex-wrap"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.div
          variants={item}
          className="widget flex w-full  p-12"
        >
          <Vulnerable />
        </motion.div>
      </motion.div>
    </>
  );
}

export default HeadPanel;
