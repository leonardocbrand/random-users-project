import { CircularProgress, Container, Grid } from '@mui/material';

import CardDetails from '../../components/CardDetails';

import { useRandomUser } from '../../service/randomUserAPI';

const Dashboard = () => {

  const { data, isLoading } = useRandomUser();

  if (isLoading) { 
    return (
      <Container sx={ { height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' } }> 
        <CircularProgress color='primary' /> 
      </Container>
    );
  }

  return (
    <Grid container rowSpacing={{ xs: 4, sm: 5 }} columnSpacing={{ xs: 1, sm: 2, md: 3 }} p={8} width={'100%'}>
      {
        data?.map((user) => {
          return (
            <Grid key={user.login.uuid} item xs={12} sm={6} md={3}>
              <CardDetails
                title={`${user.name.first} ${user.name.last}`}
                subheader={user.location.country}
                email={'Email: ' + user.email}
                city={'Cidade: ' + user.location.city}
                address={'Endereço: ' + user.location.street.name + ', ' + user.location.street.number}
                phone={user.phone}
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
