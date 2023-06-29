import { Grid } from '@mui/material';

import CardDetails, { CardDetailsProps } from '../components/Card';

const mockData: CardDetailsProps[] = [
  {
    urlImage: undefined,
    id: 1,
    title: 'Card 1',
    subheader: 'September 14, 2016',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sagittis, ',
  },
  {
    urlImage: 'https://picsum.photos/200/300',
    id: 2,
    title: 'Card 2',
    subheader: 'September 20, 2020',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sagittis, ',
  },
  {
    urlImage: 'https://picsum.photos/200/300',
    id: 3,
    title: 'Card 3',
    subheader: 'September 20, 2020',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sagittis, ',
  },
  {
    id: 4,
    urlImage: 'https://picsum.photos/200/300',
    title: 'Card 4',
    subheader: 'September 20, 2020',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sagittis, ',
  },
];

const Dashboard = () => {
  return (
    <Grid container spacing={2}>
      {
        mockData.map((post) => {
          return (
            <Grid key={post.id} item sm={3}>
              <CardDetails
                id={post.id}
                title={post.title}
                subheader={post.subheader}
                description={post.description}
                urlImage={post.urlImage}
              />
            </Grid>
          );
        })
      }
    </Grid>
  );
};

export default Dashboard;
