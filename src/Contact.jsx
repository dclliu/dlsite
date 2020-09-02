import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';

import DraftsOutlinedIcon from '@material-ui/icons/DraftsOutlined';

const Contact = () => {
  return (
    <ListItem button key="Email" component="a" href="mailto:daniel.liu.dl933@yale.edu">
      <ListItemIcon><DraftsOutlinedIcon color = "secondary"/></ListItemIcon>
      <ListItemText>
        Email me!
      </ListItemText>
    </ListItem>
  );
};

export default Contact;

