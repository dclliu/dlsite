import React from 'react';
import Box from '@material-ui/core/Box';
import Fade from '@material-ui/core/Fade';
import { useEffect } from "react";

const defaultProps = {
  borderColor: 'text.primary',
  m: 1,
  border: 1,
  style: { width: '11rem', height: '11rem' },
  margin: 5
};

export default function ProfilePhoto() {

  const [checked, setChecked] = React.useState(false);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };
  useEffect(() => {
    handleChange();
  }, []);


  return (
    <Fade in={checked} timeout={6000}>
    <Box display="flex" justifyContent="center">
      <Box
        component="img"
        src="https://scontent-bos3-1.xx.fbcdn.net/v/t1.0-9/56252796_1171676486328535_2892613809036328960_n.jpg?_nc_cat=111&_nc_sid=85a577&_nc_ohc=GfxyezomtRsAX-T4aQx&_nc_ht=scontent-bos3-1.xx&oh=2a5c8976ae838f2af46d32c71a2ecb9a&oe=5F738823"
        borderRadius="50%"
        {...defaultProps}
      />
    </Box>
    </Fade>
  );
}