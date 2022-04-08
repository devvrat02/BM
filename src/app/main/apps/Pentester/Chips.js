import { styled } from '@mui/material/styles';

const Root = styled('div')(({ color }) => ({
  display: 'flex',
  alignItems: 'center',
  height: 30,
  borderRadius: 10,
  fontSize: 14,

  '& > span': {
    width: 12,
    height: 12,
    marginRight: 4,
    alignItems: 'center',
    borderRadius: '50%',
    backgroundColor: color,
  },
}));

function Chips(props) {
  return (<>
    <Root className={props.className} color={props.color}>
      <span />
      <div>{props.title}</div>
    </Root>
  </>
  );
}

export default Chips;
