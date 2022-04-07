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
import { easeQuadInOut } from "d3-ease";



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
          <Typography className="text-16 font-medium">
            Cyber Risk Matrix Score
          </Typography>
        </div>
        <div className="h-400 w-full" >
          <div style={{ marginTop: 30, display: "flex" }}>
            <div style={{ alignItems: "center", maxWidth: "90%", paddingTop: "5%", paddingBottom: "10%", paddingLeft: "10%", height: "90%" }}>
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
                      text={`${roundedValue}%`}
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
          </div>
        </div>
      </Paper>
    </>
  );
}

export default Meter;
