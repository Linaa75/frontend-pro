import {
  Box,
  Autocomplete,
  TextField,
  Button,
  MenuItem,
} from '@mui/material';
import { Controller, useForm } from 'react-hook-form';
import { IDestination, IFilterFormParams } from '../types';

interface IFilrerFormProps {
  onSubmit: (filter: IFilterFormParams) => void;
  destinations: IDestination[];
}

const FilterForm = ({ onSubmit, destinations }: IFilrerFormProps) => {
  const today = new Date().toISOString().split('T')[0];

  const { control, handleSubmit } = useForm<IFilterFormParams>({
    defaultValues: {
      destination: '',
      checkIn: new Date(),
      checkOut: new Date(),
      guests: {
        adults: 1,
        children: 0,
      },
    },
  });

  const handleFormSubmit = (data: IFilterFormParams) => {
    onSubmit(data);
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(handleFormSubmit)}
      sx={{
        display: 'flex',
        alignItems: 'center',
        mt: 2,
        width: '100%',
        justifyContent: 'center',
        gap: 2,
      }}
    >
      <Controller
        name="destination"
        control={control}
        render={({ field }) => (
          <Autocomplete
            options={destinations}
            getOptionLabel={(option) => option.label}
            onChange={(_, value) => {
              field.onChange(value?.label || '');
            }}
            renderInput={(params) => (
              <TextField {...params} label="Destination" />
            )}
            sx={{ width: 300 }}
          />
        )}
      />

      <Controller
        name="checkIn"
        control={control}
        render={({ field }) => (
          <TextField
            label="Check-in"
            type="date"
            InputLabelProps={{ shrink: true }}
            inputProps={{ min: today }}
            onChange={(e) => field.onChange(new Date(e.target.value))}
          />
        )}
      />

      <Controller
        name="checkOut"
        control={control}
        render={({ field }) => (
          <TextField
            label="Check-out"
            type="date"
            InputLabelProps={{ shrink: true }}
            inputProps={{ min: today }}
            onChange={(e) => field.onChange(new Date(e.target.value))}
          />
        )}
      />

      <Controller
        name="guests.adults"
        control={control}
        render={({ field }) => (
          <TextField
            label="Adults"
            select
            {...field}
            sx={{ width: 100 }}
          >
            {[1, 2, 3, 4].map((val) => (
              <MenuItem key={val} value={val}>
                {val}
              </MenuItem>
            ))}
          </TextField>
        )}
      />

      <Controller
        name="guests.children"
        control={control}
        render={({ field }) => (
          <TextField
            label="Children"
            select
            {...field}
            sx={{ width: 100 }}
          >
            {[0, 1, 2, 3, 4].map((val) => (
              <MenuItem key={val} value={val}>
                {val}
              </MenuItem>
            ))}
          </TextField>
        )}
      />

      <Button
        type="submit"
        variant="contained"
        sx={{
          backgroundColor: 'orange',
          color: 'white',
          height: '51px',
          '&:hover': {
            backgroundColor: 'darkorange',
          },
        }}
      >
        Submit
      </Button>
    </Box>
  );
};

export default FilterForm;