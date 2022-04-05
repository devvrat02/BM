import Paper from '@mui/material/Paper';


function Report(props) {
    // console.log(props.Data);
    const db = props.Data;

    return (<>

        <div>
            <h1 className="py-16 font-semibold">{db.Vulnerability}</h1>
            <h4 className="pb-12 font-medium">Description</h4>
            <p>
                {db.Description}
            </p>
            <br />



            <h4 className="pb-12 font-medium">Impact</h4>
            {db.Impact}
            <br />


            <h4 className="pb-12 font-medium">Remediation</h4>
            <p>
                In order to prevent SQL Injection, following things should be kept in mind <br />
                • Use of Prepared Statements <br />
                • Use of Stored Procedures <br />
                • White List Input Validation<br />
                • Escaping special characters from User Supplied Input <br />

            </p>
            <br />


        </div>






    </>);
}

export default Report;