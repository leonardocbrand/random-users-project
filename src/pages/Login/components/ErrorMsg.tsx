import { FieldError } from 'react-hook-form';

import Typography from '@mui/material/Typography';

type Props = {
  errorState: FieldError | undefined;
}

const ErrorMsg = ({ errorState } : Props) => {
  return (
    <>
      {errorState && <Typography color='error' fontSize={11} variant='subtitle2'>{errorState.message}</Typography>}
    </>
  );
};

export default ErrorMsg;
