import clsx from 'clsx';
import './Tag.css';
export const Riskstate = [
  {
    id: 1,
    name: 'Web App',
    color: 'bg-web text-black',
  },
  {
    id: 2,
    name: 'IOS',
    color: 'bg-ios text-black',
  },
  {
    id: 3,
    name: 'Internal Application',
    color: 'bg-inapp text-black',
  },
  {
    id: 4,
    name: 'Thick Client',
    color: 'bg-thcli text-black',
  },
  {
    id: 5,
    name: 'Android',
    color: 'bg-and text-black',
  },
];



function MailChip(props) {
  return (
    <div className='mh-25 mw-25'>
      <div
        className={clsx(
          'inline text-12 py-4 px-12 rounded-full truncate mh-25 mw-25',
          _.find(Riskstate, { name: props.name }).color
        )}
      >
        {props.name}
      </div>

    </div>

  );
}

export default MailChip;
