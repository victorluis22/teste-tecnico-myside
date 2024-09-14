import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";
import { capitalizeFirstLetter } from '@/services/string';
import { useRouter } from 'next/router';

export default function Filter({ categories }) {
  const router = useRouter();
  const [open, setOpen] = React.useState(false);
  const [category, setCategory] = React.useState(router.query.category);

  const handleSearch = () => {
    const query = router.query;

    // Só as categorias diferentes de All aparecem como query na URL
    if (category !== "All") {
      query.category = category;
    } else {
      delete query.category; 
    }

    setOpen(false);

    router.push({
      pathname: "/",
      query
    });
  }

  const handleChange = (event) => {
    setCategory(event.target.value || '');
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason !== 'backdropClick') {
      setOpen(false);
    }
  };

  return (
    <div>
      <Button onClick={handleClickOpen} variant="outlined" color='#000' endIcon={<HiOutlineAdjustmentsHorizontal />}>{router.query.category ?? "All"}</Button>
      <Dialog disableEscapeKeyDown open={open} onClose={handleClose}>
        <DialogTitle>Categories</DialogTitle>
        <DialogContent>
          <Box component="form" sx={{ display: 'flex', flexWrap: 'wrap' }}>
            <FormControl sx={{ m: 1, minWidth: 240 }}>
              <Select
                native
                value={category}
                onChange={handleChange}
              >
                <option defaultValue={"All"} aria-label="None" value="All">All</option>
                {
                  categories.map((category, index) => {
                    return <option key={index} value={category}>{capitalizeFirstLetter(category)}</option>
                  })
                }
              </Select>
            </FormControl>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSearch}>Search</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
