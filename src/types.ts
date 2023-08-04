export type dataType = {
  gender: string;
  name:{
    first: string;
    last: string;
  };
  location: {
    city: string;
    state: string;
    country: string;
    street: {
      number: number;
      name: string;
    }
  };
  email: string;
  login: {
    uuid: string;
    username: string;
    password: string;
  };
  picture: {
    medium: string;
    thumbnail: string;
  };
  phone: string;
}
