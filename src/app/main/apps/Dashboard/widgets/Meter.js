import React from "react";
import { Paper } from "@mui/material";
import Typography from "@mui/material/Typography";
import {
  CircularProgressbarWithChildren,
  buildStyles
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import RadialSeparators from "./RadialSeparators";
import ProgressProvider from "./ProgressProvider";




const color = (name) => {
  if (name <= 100 && name >= 90) {
    return (
      "#009a66"
    );

  }
  else if (name < 90 && name >= 70) {
    return (
      "#3566cd"
    );

  }

  else if (name < 70 && name > 40) {
    return (
      "#fde101"
    );

  }
  else if (name < 40 && name >= 1) {
    return (
      "#ff6500"
    );

  }
}


function Meter(props) {
  return (
    <>
      <Paper className="w-full overflow-hidden" square >
        <div className="flex items-center justify-between p-20 h-64 ">
          <Typography className="text-16 font-medium justify-between">
            LIVE
          </Typography>
        </div>
        <div className=" w-full" >
          {/* <div style={{ display: "flex" }}> */}
          <div className="flex flex-col justify-between w-90 p-60">
            <ProgressProvider
              valueStart={0}
              valueEnd={props.score}
              duration={1.4}

            >
              {value => {
                const roundedValue = Math.round(value);
                return (
                  <CircularProgressbarWithChildren

                    value={roundedValue}
                    text={`${roundedValue}`}
                    strokeWidth={10}
                    styles={buildStyles({
                      strokeLinecap: "butt",
                      pathColor: color(roundedValue),
                    }
                    )}

                  >
                    <RadialSeparators
                      count={12}

                      style={{
                        background: "#fff",
                        width: "2px",
                        height: `${10}%`
                      }}
                    />
                  </CircularProgressbarWithChildren>
                );
              }}
            </ProgressProvider>

          </div>
          {/* </div> */}
        </div>
      </Paper>
    </>
  );
}

export default Meter;
