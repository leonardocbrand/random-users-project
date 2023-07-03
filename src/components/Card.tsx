import { FC, useState } from 'react';

import { Phone } from '@mui/icons-material';
import { Avatar, Box, Modal } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardHeader from '@mui/material/CardHeader';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

import { StyledCard } from './styles/card';
import { modalStyle } from './styles/modal';

export type CardDetailsProps = {
  title: string;
  subheader: string;
  login: string;
  password: string;
  phone: string;
  urlImage: string | undefined;
}

const CardDetails: FC<CardDetailsProps> = ({ title, subheader, urlImage, login, password, phone }) => {

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Card sx={{ maxWidth: 345, minWidth: 200, }}>
      <Box display='flex' alignItems='center'>
        <Avatar alt={title} src={urlImage} sx={{ m: 2 } } />
        <CardHeader title={title} subheader={subheader} />
      </Box>
      <StyledCard>
        <Typography variant="body2" color="text.secondary">
          {login}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {password}
        </Typography>
      </StyledCard>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <Phone onClick={ handleOpen } />
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={modalStyle}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Phone Number
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                {phone}
              </Typography>
            </Box>
          </Modal>
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default CardDetails;
