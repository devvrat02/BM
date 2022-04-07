import _ from '@lodash';
import clsx from 'clsx';

export const Riskstate = [
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
    color: 'bg-red text-white',
  },
  {
    id: 5,
    name: 'CRITICAL',
    color: 'bg-brown text-white',
  },
];

function RiskColor(props) {
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

export default RiskColor;
