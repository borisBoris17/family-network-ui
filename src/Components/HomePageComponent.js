import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import PhotoAlbumIcon from '@material-ui/icons/PhotoAlbum';
import AlbumComponent from './AlbumComponent';
import AlbumService from '../Services/AlbumService';

const styles = theme => ({
  navPaper: {
    margin: '20px',
    backgroundColor: 'rgba(195, 217, 234, 0.5)',
  },
  picturePaper: {
    margin: '20px',
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

  constructor(props) {
    super(props);
    this.state = {
      albums: this.props.albums,
      selectedAlbum: [],
    };
  }

  componentDidMount() {
    this.getAlbum(this.state.albums[0].album_name, this.setSelectedAlbum);
    // this.setState({
    //   selectedAlbum: this.getAlbum(this.state.albums[0].album_name, this.setPicturesInAlbum),
    // });
  }

  setSelectedAlbum = (json) => {
    this.setState({
      album: json,
    });
  }

  getAlbum(album_name) {
    return AlbumService.fetchAlbum(album_name, this.setSelectedAlbum);
  }

  selectAlbum() {

  }

  render() {
    const { classes } = this.props;
    return <div >
      <Grid container spacing={2} >
        <Grid item sm={12} lg={3}>
          <Paper className={classes.navPaper} elevation={3}>
            <List component="nav" aria-label="main mailbox filders">
              {this.props.albums.map((album) => {
                return <ListItem key={album.album_id} button onClick={this.selectAlbum()}>
                  <ListItemIcon>
                    <PhotoAlbumIcon />
                  </ListItemIcon>
                  <ListItemText primary={album.album_name} />
                </ListItem>
              })}
            </List>
          </Paper>
        </Grid>
        <Grid item sm={12} lg={9}>
          <AlbumComponent 
            album={this.state.album}
           />
        </Grid>
      </Grid>
    </div>;
  }
}

export default withStyles(styles)(HomePageComponent);