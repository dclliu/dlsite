import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 280,
  },
  secondaryColor: {
    color: theme.palette.primary.dark
  }
}));

export default function MediaCard(props) {
  const theme = useTheme();
  const classes = useStyles(theme);
  const { title, imageUrl, text, moreInfo, linkUrl } = props;
  return (
    <Card className={classes.root}>

      {moreInfo ?
        <CardActionArea target="_blank" rel="noopener" href={linkUrl}>
          <CardMedia
            component="img"
            className={classes.media}
            image={imageUrl}
            title={title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2" color="secondary">
              {title}
            </Typography>
            <Typography variant="body2" component="p" className={classes.secondaryColor}>
              {text}
            </Typography>
          </CardContent>
        </CardActionArea>
        :
        <CardActionArea>
          <CardMedia
            component="img"
            className={classes.media}
            image={imageUrl}
            title={title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2" color="secondary">
              {title}
            </Typography>
            <Typography variant="body2" component="p" className={classes.secondaryColor}>
              {text}
            </Typography>
          </CardContent>
        </CardActionArea>
      }

    </Card>
  );
}
