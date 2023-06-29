import { Grid } from '@mui/material';

import CardDetails from '../components/Card';

import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query';

type dataType = {
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

const queryClient = new QueryClient();

const Dashboard = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Teste />
    </QueryClientProvider>
  );
};

const Teste = () => {

  const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

  const { data, isLoading } = useQuery({
    queryFn: async () => {
      await wait(2000);
      const getData = await fetch('https://randomuser.me/api/?results=10');
      const data = await getData.json();
      return data.results as dataType[];
    }
  });

  console.log(data);

  if (isLoading) return 'Loading...';

  return (
    <Grid container rowSpacing={{ xs: 4, sm: 5 }} columnSpacing={{ xs: 1, sm: 2, md: 3 }} p={8} width={'100%'}>
      {
        data?.map((user) => {
          return (
            <Grid key={user.login.uuid} item xs={7} sm={6} md={3}>
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
