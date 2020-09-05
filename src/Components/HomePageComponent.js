import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';

import Moby from "../images/moby.JPG";
import ShockedMaple from "../images/shockedMaple.JPG";
import Molly from "../images/molly.JPG";
import Kane from "../images/kane.JPG";
import SquintingMaple from "../images/squintingMaple.JPG";

const styles = theme => ({
  navPaper: {
    margin:'20px',
    backgroundColor: 'rgba(195, 217, 234, 0.5)',
  },
  picturePaper: {
    margin:'20px',
    marginLeft: '0px',
    backgroundColor: 'rgba(195, 217, 234, 0.3)',
  },
  picture: {
    width: '100%',
    height: '96%',
    marginTop: '5%',
    marginRight: '0%',
    marginBottom: '0%',
    marginLeft: '0%',
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
      <Grid container spacing={2} >
        <Grid item sm={12} lg={3}>
          <Paper className={classes.navPaper} elevation={3}>
            <List component="nav" aria-label="main mailbox filders">
              <ListItem button>
                <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText primary="Inbox" />
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <DraftsIcon />
                </ListItemIcon>
                <ListItemText primary="Default" />
              </ListItem>
            </List>
          </Paper>
        </Grid>
        <Grid item sm={12} lg={9}>
          <Grid container spacing={2} >
            <Grid item sm={12} lg={6}>
              <Paper className={classes.picturePaper} elevation={3}>
                <img src={Moby} className={classes.picture} alt="Moby" title="Moby"/>
              </Paper>
            </Grid>
            <Grid item sm={12} lg={6}>
              <Paper className={classes.picturePaper} elevation={3}>
                <img src={ShockedMaple} className={classes.picture} alt="Shocked Maple" title="Shocked Maple" />
              </Paper>
            </Grid>
            <Grid item sm={12} lg={6}>
              <Paper className={classes.picturePaper} elevation={3}>
                <img src={Molly} className={classes.picture} alt="Molly" title="Molly" />
              </Paper>
            </Grid>
            <Grid item sm={12} lg={6}>
              <Paper className={classes.picturePaper} elevation={3}>
                <img src={Kane} className={classes.picture} alt="Kane" title="Kane" />
              </Paper>
            </Grid>
            <Grid item sm={12} lg={6}>
              <Paper className={classes.picturePaper} elevation={3}>
                <img src={SquintingMaple} className={classes.picture} alt="Squinting Maple" title="Squinting Maple" />
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>;
  }
}

export default withStyles(styles)(HomePageComponent);