import * as React from 'react';

interface Props {
  startCpuBattle: () => any;
}
const Cpu = (props: Props) => (
  <div>
    <button onClick={props.startCpuBattle}>CPU Battle</button>
  </div>
);
export default Cpu;
