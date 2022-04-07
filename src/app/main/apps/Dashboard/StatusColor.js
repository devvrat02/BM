import _ from '@lodash';
import clsx from 'clsx';

export const state = [
  {
    id: 1,
    name: 'INFO',
    color: 'bg-blue text-white',
  },
  {
    id: 2,
    name: 'LOW',
    color: 'bg-green text-white',
  },
  {
    id: 3,
    name: 'MEDIUM',
    color: 'bg-orange text-black',
  },
  {
    id: 4,
    name: 'HIGH',
    color: 'bg-purple text-white',
  },
  {
    id: 5,
    name: 'CRITICAL',
    color: 'bg-red text-white',
  },
  {
    id: 6,
    name: 'RESOLVED',
    color: 'bg-green text-white   ',
  },
  {
    id: 7,
    name: 'Need Attention',
    color: 'bg-red text-white',
  },
  {
    id: 8,
    name: 'WORKING',
    color: 'bg-red text-white',
  },
];

function StatusColor(props) {
  return (
    <div
      className={clsx(
        'inline text-12 font-semibold py-4 px-12 rounded-full truncate',
        _.find(state, { name: props.name }).color
      )}
    >
      {props.name}
    </div>
  );
}

export default StatusColor;
