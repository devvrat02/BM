import _ from '@lodash';
import clsx from 'clsx';
import './bttn.css'
export const Riskstate = [
    {
        id: 1,
        name: 'Info',
        color: 'bg-blue text-white',
    },
    {
        id: 2,
        name: 'Low',
        color: 'bg-green text-white',
    },
    {
        id: 3,
        name: 'Medium',
        color: 'bg-orange text-white',
    },
    {
        id: 4,
        name: 'High',
        color: 'bg-red text-white',
    },
    {
        id: 5,
        name: 'Critical',
        color: 'bg-marron text-white',
    },
    {
        id: 6,
        name: 'Fixed',
        color: 'bg-blue text-white',
    },
    {
        id: 7,
        name: 'In Progress',
        color: 'bg-green text-white',
    },
    {
        id: 8,
        name: 'Medium',
        color: 'bg-orange text-white',
    },
    {
        id: 9,
        name: 'Need Attention',
        color: 'bg-red text-white',
    },
    {
        id: 10,
        name: 'Reproducible',
        color: 'bg-brown text-white',
    },

    {
        id: 11,
        name: 'Need Attention',
        color: 'bg-marron text-white',
    },

];

function SevBttn(props) {
    return (
        <div
            className={clsx(
                'inline text-12 font-semibold py-4 px-12 rounded-full truncate',
                _.find(Riskstate, { name: props.name }).color
            )}
        >
            {props.name}
        </div>
    );
}





export default SevBttn;
