import React from 'react'
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import Autocomplete, { createFilterOptions } from '@material-ui/lab/Autocomplete';


const filter = createFilterOptions({
  matchFrom: 'start',
  stringify: option => option.name,
});


// const filter = createFilterOptions();

export default function Autocompl() {

  const types = [
    {name: 'Warm Drink', vat: 9},
    {name: 'Snack', vat: 9},
    {name: 'Ernergy Drink', vat: 9},
    {name: 'Service', vat: 5},
    {name: 'Alchool', vat: 19}
  ]

  const [value, setValue] = React.useState(null); 
  const [open, toggleOpen] = React.useState(false);

  const handleClose = () => {
    setDialogValue({
      nametype: '',
      vat: '',
    });

    toggleOpen(false);
  };

  const [dialogValue, setDialogValue] = React.useState({
    nametype: '',
    vat: '',
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    setValue({
      nametype: dialogValue.nametype,
      vat: parseInt(dialogValue.vat, 10),
    });

    handleClose();
  };

  return (
    <React.Fragment>
      <Autocomplete
        value={value}
        onChange={(event, newValue) => {
          if (typeof newValue === 'string') {
            // timeout to avoid instant validation of the dialog's form.
            setTimeout(() => {
              toggleOpen(true);
              setDialogValue({
                nametype: newValue,
                vat: '',
              });
            });
          } else if (newValue && newValue.inputValue) {
            toggleOpen(true);
            setDialogValue({
              nametype: newValue.inputValue,
              vat: '',
            });
          } else {
            setValue(newValue);
          }
        }}

        
        id="free-solo-dialog-demo"
        options={types}
        //--------------------------------------------------------Filter-----------
        // filterOptions={(params) => {
        //   const filtered = filter(params);
        
        //    if (params.inputValue !== '') {
        //      // console.log(params.inputValue)
        //      // console.log(options)
        //      filtered.push({
        //        inputValue: params.inputValue,
        //        nametype: `Add "${params.inputValue}"`,
        //      });
        //    }
        //    // console.log(filtered)
        //    return filtered;
        //  }}

         filterOptions={(options, params) => {
          const filtered = filter(options, params);

          if (params.inputValue !== '') {
            filtered.push({
              inputValue: params.inputValue,
              name: `Add "${params.inputValue}"`,
            });
          }

           console.log(filtered)
          return filtered;
        }}
        //--------------------------------------------------------Filter ///-----------

        getOptionLabel={(option) => {
          // e.g value selected with enter, right from the input
          if (typeof option.name === 'string') {
            return option.name;
          }
          if (option.inputValue) {
            return option.inputValue;
          }
          return option.nametype;
        }}
        selectOnFocus
        clearOnBlur
        handleHomeEndKeys
        renderOption={(option) => option.name + '  vat: ' + option.vat + '%' }
        style={{ width: 300 }}
        freeSolo
        renderInput={(params) => (
          <TextField {...params} label="Free solo dialog" variant="outlined" />
        )}
      />
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <form onSubmit={handleSubmit}>
          <DialogTitle id="form-dialog-title">Add new product Type</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Alchool, Juices, Bars, etc
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              value={dialogValue.nametype}
              onChange={(event) => setDialogValue({ ...dialogValue, nametype: event.target.value })}
              label="Type name"
              type="text"
            />
            <TextField
              margin="dense"
              id="name"
              value={dialogValue.vat}
              onChange={(event) => setDialogValue({ ...dialogValue, vat: event.target.value })}
              label="TVA"
              type="number"
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button type="submit" color="primary">
              Add
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </React.Fragment>
  );
}