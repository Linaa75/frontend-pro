import { Box, Autocomplete, TextField, Button, MenuItem } from '@mui/material';
import { IDestination, IFilterFormParams } from '../types/types';
import { useState } from 'react';

interface IFilrerFormProps {
  onSubmit: (filter: IFilterFormParams) => void;
  destinations: IDestination[];
}

const FilterForm = ({ onSubmit, destinations }: IFilrerFormProps) => {
  const [formData, setFormData] = useState<IFilterFormParams>({
    destination: '',
    checkIn: new Date(),
    checkOut: new Date(),
    guests: {
      adults: 1,
      children: 0,
    },
  });

  const today = new Date().toISOString().split('T')[0];

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        mt: 2,
        width: '100%',
        justifyContent: 'center',
        gap: 2,
      }}
    >
      <Autocomplete
        options={destinations}
        getOptionLabel={(option) => option.label}
        getOptionKey={(option) => option.value}
        style={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Destination" />}
        onChange={(_, value) => {
          if (value) {
            setFormData({ ...formData, destination: value.label });
          }
        }}
      />
      <TextField
        label="Check-in"
        type="date"
        InputLabelProps={{
          shrink: true,
        }}
        inputProps={{ min: today }}
        defaultValue={today}
        onBlur={(e) => {
          setFormData({ ...formData, checkIn: new Date(e.target.value) });
        }}
      />
      <TextField
        label="Check-out"
        type="date"
        InputLabelProps={{
          shrink: true,
        }}
        inputProps={{ min: today }}
        onBlur={(e) => {
          setFormData({ ...formData, checkOut: new Date(e.target.value) });
        }}
      />
      <TextField
        label="Adults"
        select
        defaultValue={1}
        style={{ width: 100 }}
        onChange={(e) => {
          setFormData({
            ...formData,
            guests: { ...formData.guests, adults: +e.target.value },
          });
        }}
      >
        <MenuItem value={1}>1</MenuItem>
        <MenuItem value={2}>2</MenuItem>
        <MenuItem value={3}>3</MenuItem>
        <MenuItem value={4}>4</MenuItem>
      </TextField>
      <TextField
        label="Children"
        select
        defaultValue={0}
        style={{ width: 100 }}
        onChange={(e) => {
          setFormData({
            ...formData,
            guests: { ...formData.guests, children: +e.target.value },
          });
        }}
      >
        <MenuItem value={0}>0</MenuItem>
        <MenuItem value={1}>1</MenuItem>
        <MenuItem value={2}>2</MenuItem>
        <MenuItem value={3}>3</MenuItem>
        <MenuItem value={4}>4</MenuItem>
      </TextField>
      <Button
        variant="contained"
        sx={{
          backgroundColor: 'orange',
          color: 'white',
          height: '51px',
          '&:hover': {
            backgroundColor: 'darkorange',
          },
        }}
        onClick={() => onSubmit(formData)}
      >
        Submit
      </Button>
    </Box>
  );
};

export default FilterForm;
