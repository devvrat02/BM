import _ from '@lodash';
import clsx from 'clsx';

export const Riskstate = [
    {
        id: 1,
        name: 'In Progress',
        color: 'text-yellow ',
    },
    {
        id: 2,
        name: 'Complete',
        color: 'text-green',
    },
    {
        id: 3,
        name: 'Pending',
        color: 'text-red',
    },
];

function Riskfont(props) {
    return (<>
        <div
            className={clsx(
                'inline text-12 font-semibold py-4 px-12 rounded-full truncate',
                _.find(Riskstate, { name: props.name }).color
            )}
        >{props.value}
        </div>
    </>
    );
}

export default Riskfont;
