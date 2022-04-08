import _ from '@lodash';
import clsx from 'clsx';
import Chips from './Chips';
export const Riskstate = [
  {
    id: 1,
    name: 'In Progress',
    color: '#f7d625',
  },
  {
    id: 2,
    name: 'Complete',
    color: '#019463',
  },
  {
    id: 3,
    name: 'Pending',
    color: '#f70000',
  },
];

function RiskColor(props) {
  return (<>
    <div className='mh-25 mw-25'>
      <Chips title={props.name} color={_.find(Riskstate, { name: props.name }).color} />
    </div>

  </>
  );
}

export default RiskColor;
