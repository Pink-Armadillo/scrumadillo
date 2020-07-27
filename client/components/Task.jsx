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

    return (
      <div> Task
      </div>
    );
  }
}

export default Task;
