import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

let imageBaseURL = 'http://localhost:8080/images/';

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

class AlbumComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            album: this.props.album,
            pictures: this.props.pictures,
    };
  }

    render() {
        const { classes } = this.props;
        return <div >
            <Grid container spacing={2} >
                {this.props.album && this.props.pictures ? this.props.pictures.map((picture) => {
                    return <Grid key={picture.pictureId} item sm={12} lg={6}>
                    <Paper className={classes.picturePaper} elevation={3}>
                        <img src={imageBaseURL + this.props.album.album_name + "/" + picture.picture_name} className={classes.picture} alt={picture.picture_title} title={picture.picture_title} />
                    </Paper>
                </Grid>
                }) : ''}
            </Grid>
        </div>;
    }
}

export default withStyles(styles)(AlbumComponent);