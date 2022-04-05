import { TableBody, TableRow, TableCell } from "@mui/material";

import RiskColor, { Riskstate } from './Riskcolor';

function ATtable(props) {
    return (
        <TableBody>{console.log(props.risk)}
            {/* {(props.risk == "DEFAULT") ? row => true : row => row.risk == props.risk} */}
            {props.rows.filter(row => row.risk == props.risk).map((row) => (
                <TableRow key={row.assets}>{console.log(props)}
                    <TableCell align="center">{row.assets}</TableCell>
                    <TableCell align="center"><RiskColor name={row.risk} /> </TableCell>
                </TableRow>
            ))}
        </TableBody>
    );
};

export default ATtable;