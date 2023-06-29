
import { FC } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { Favorite, Info } from '@mui/icons-material';
import { Avatar } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardHeader from '@mui/material/CardHeader';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

import { StyledCard } from './styles/card';

export type CardDetailsProps = {
  title: string;
  subheader: string;
  description: string;
  urlImage: string | undefined;
  id: number;
}

const CardDetails: FC<CardDetailsProps> = ({ title, subheader, urlImage, description, id }) => {
  const navigate = useNavigate();
  return (
    <Card sx={{ maxWidth: 345, minWidth: 200, }}>
      <Avatar alt={title} src={urlImage} sx={{ m: 2 } } />
      <CardHeader title={title} subheader={subheader} />
      <Link style={{
        textDecoration: 'none',
      }} to={`details/${id}`}>
        <StyledCard>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </StyledCard>
      </Link>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <Favorite />
        </IconButton>
        <IconButton onClick={() => navigate(`details/${id}`)} aria-label="Details">
          <Info />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default CardDetails;
