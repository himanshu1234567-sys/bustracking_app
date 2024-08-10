// src/features/busSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { busImage } from '../utils/image'; // Ensure you export multiple images

const initialState = {
  buses: [
    {
      ownerName: 'Ashok Travels',
      busName: 'Ashok Travels',
      busNum: 'MP13CA1246',
      busImage: busImage, // Use the imported image here
      destination: 'Indore to Ujjain',
      pickPoint: 'Vijay Nagar',
      dropPoint: 'Nanakheda',
      picktime: '8:00 pm',
      droptime: '9:15 pm',
      ticket: '100',
    },
    {
      ownerName: 'Sharma Travels',
      busName: 'Sharma Travels',
      busNum: 'MP14CA5678',
      busImage: busImage,
      destination: 'Bhopal to Jabalpur',
      pickPoint: 'Habibganj',
      dropPoint: 'Jabalpur Station',
      picktime: '7:00 pm',
      droptime: '9:00 pm',
      ticket: '150',
    },
    {
      ownerName: 'Verma Travels',
      busName: 'Verma Travels',
      busNum: 'MP15CA9101',
      busImage: busImage,
      destination: 'Gwalior to Agra',
      pickPoint: 'Gwalior Fort',
      dropPoint: 'Agra Fort',
      picktime: '9:00 am',
      droptime: '12:00 pm',
      ticket: '120',
    },
    // Add more bus entries as needed
  ]
};

const busSlice = createSlice({
  name: 'bus',
  initialState,
  reducers: {},
});

export const selectBuses = (state) => state.bus.buses;
export default busSlice.reducer;
