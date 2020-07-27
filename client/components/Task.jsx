import React from 'react';

// const [checked, setChecked] = React.useState(true);

// const handleChange = (event) => {
//   setChecked(event.target.checked);
// };

class Task extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { classes } = this.props;

    return <div> Task</div>;
  }
}

//  import { Test } from '../reducers/card';
// import { LoginTest } from '../reducers/login';
// import { DeckTest } from '../reducers/deck';
// const Task = () => {
//   return (
//     <div>
//       <Test />
//       <LoginTest />
//       <DeckTest />
//       test in task
//     </div>
//   );
// };

export default Task;
