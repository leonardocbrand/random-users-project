import { CircularProgress, Grid } from '@mui/material';

import CardDetails from '../../components/Card';

import { useRandomUser } from '../../service/randomUserAPI';

export type dataType = {
  'gender': string;
  'name':{
    'first': string;
    'last': string;
  };
  'location': {
    'city': string;
    'state': string;
    'country': string;
  };
  'email': string;
  'login': {
    'uuid': string;
    'username': string;
    'password': string;
  };
  'picture': {
    'medium': string;
    'thumbnail': string;
  };
}

const Dashboard = () => {

  const { data, isLoading } = useRandomUser();

  if (isLoading) return <CircularProgress color='primary' />;

  return (
    <Grid container rowSpacing={{ xs: 4, sm: 5 }} columnSpacing={{ xs: 1, sm: 2, md: 3 }} p={8} width={'100%'}>
      {
        data?.map((user) => {
          return (
            <Grid key={user.login.uuid} item xs={12} sm={6} md={3}>
              <CardDetails
                id={1}
                title={user.name.first + user.name.last}
                subheader={user.login.username}
                description={user.location.country}
                urlImage={user.picture.thumbnail}
              />
            </Grid>
          );
        })
      }
    </Grid>
  );
};

export default Dashboard;
