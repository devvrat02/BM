import _ from '@lodash';
import clsx from 'clsx';
import './bttn.css'
export const Riskstate = [
    {
        id: 11,
        name: 'green',
        color: 'bg-green text-white',
    },
    {
        id: 12,
        name: 'orange',
        color: 'bg-orange text-black',
    },
    {
        id: 13,
        name: 'red',
        color: 'bg-red text-white',
    },
    {
        id: 14,
        name: 'marron',
        color: 'bg-marron text-white',
    },
    {
        id: 14,
        name: 'blue',
        color: 'bg-blue text-white',
    },
];
function Bttn(props) {
    if (props.name <= 10 && props.name >= 9) {
        return (
            <div
                className={clsx(
                    'inline text-12 font-semibold py-4 px-12 rounded-full truncate',
                    _.find(Riskstate, { name: "marron" }).color
                )}
            >
                {props.name}
            </div>
        );

    }
    else if (props.name < 9 && props.name >= 7) {
        return (
            <div
                className={clsx(
                    'inline text-12 font-semibold py-4 px-12 rounded-full truncate',
                    _.find(Riskstate, { name: "red" }).color
                )}
            >
                {props.name}
            </div>
        );

    }

    else if (props.name < 7 && props.name > 4) {
        return (
            <div
                className={clsx(
                    'inline text-12 font-semibold py-4 px-12 rounded-full truncate',
                    _.find(Riskstate, { name: "orange" }).color
                )}
            >
                {props.name}
            </div>
        );

    }
    else if (props.name < 4 && props.name >= 0.1) {
        return (
            <div
                className={clsx(
                    'inline text-12 font-semibold py-4 px-12 rounded-full truncate',
                    _.find(Riskstate, { name: "green" }).color
                )}
            >
                {props.name}
            </div>
        );

    }
    else if (props.name == 0) {
        return (
            <div
                className={clsx(
                    'inline text-12 font-semibold py-4 px-12 rounded-full truncate',
                    _.find(Riskstate, { name: "blue" }).color
                )}
            >
                {props.name}
            </div>
        );

    }
}





export default Bttn;
