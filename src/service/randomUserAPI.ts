
import { useQuery } from '@tanstack/react-query';

import { dataType } from '../types';

const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const useRandomUser = () => {
 
  return  useQuery({
    queryFn: async () => {
      await wait(2000);
      const getData = await fetch('https://randomuser.me/api/?results=10');
      const data = await getData.json();
      return data.results as dataType[];
    }
  });
};
