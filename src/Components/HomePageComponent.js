import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Moby from "../images/moby.JPG";
import ShockedMaple from "../images/shockedMaple.JPG";
import Molly from "../images/molly.JPG";
import Kane from "../images/kane.JPG";
import SquintingMaple from "../images/squintingMaple.JPG";

const styles = theme => ({
  picturePaper: {
    width: '80%',
    height: '30%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop:'20px',
    marginBottom:'20px',
  },
  picture: {
    width: '80%',
    height: '90%',
    margin: '10px',
  },
});

class HomePageComponent extends React.Component {

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     count: this.props.count,
  //   };
  // }

  // addToCount = () => {
  //   this.setState({
  //     count: Number.parseInt(this.state.count) + 1
  //   });
  // };

  // componentDidMount() {
  //   this.setState({
  //     count: Number.parseInt(this.state.count) + 1
  //   });
  // }

  render() {
    const { classes } = this.props;
    return <div >
      <Paper className={classes.picturePaper} elevation={3}>
        <img src={Moby} className={classes.picture} alt="Moby" />
      </Paper>
      <Paper className={classes.picturePaper} elevation={3}>
        <img src={ShockedMaple} className={classes.picture} alt="Shocked Maple" />
      </Paper>
      <Paper className={classes.picturePaper} elevation={3}>
        <img src={Molly} className={classes.picture} alt="Molly" />
      </Paper>
      <Paper className={classes.picturePaper} elevation={3}>
        <img src={Kane} className={classes.picture} alt="Kane" />
      </Paper>
      <Paper className={classes.picturePaper} elevation={3}>
        <img src={SquintingMaple} className={classes.picture} alt="Squinting Maple" />
      </Paper>
    </div>;
  }
}

export default withStyles(styles)(HomePageComponent);