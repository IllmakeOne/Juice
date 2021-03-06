import React, { useEffect, useState } from 'react'
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

export default function AutoCompAddItem({upValue}) {

  const types = [
    {name: 'Warm Drink', vat: 9},
    {name: 'Snack', vat: 9},
    {name: 'Ernergy Drink', vat: 9},
    {name: 'Service', vat: 5},
    {name: 'Alchool', vat: 19}
  ]

  const [value, setValue] = useState(null); 
  const [open, toggleOpen] = useState(false); 

  const [dialogValue, setDialogValue] = React.useState({
    name: '',
    vat: '',
  });

  // useEffect(() =>{
  //   upValue(value)
  // }, [value])

  const onChange = (newvalue) => {}

  const handleClose = () => {
    setDialogValue({
      name: '',
      vat: '',
    });

    setDialogValue({
      name: dialogValue.name,
      vat: parseInt(dialogValue.vat, 10),
    })

    toggleOpen(false);
  };


  const handleSubmit = (event) => {
    console.log('Handle submit called')
    event.preventDefault();
    

    upValue({
      name: dialogValue.name,
      vat: parseInt(dialogValue.vat, 10),
    })
    handleClose();
  };

  return (
    <React.Fragment>
      <Autocomplete
        value={value}
        onChange={(event, newValue) => {
          if (typeof newValue === 'string') {
            // timeout to avoid instant validation of the dialog's form.
            // console.log('I   ' + JSON.stringify(newValue))
            setTimeout(() => {
              toggleOpen(true);
              setDialogValue({
                name: newValue.name,
                vat: newValue.vat,
              });
            });
          } else if (newValue && newValue.inputValue) {
            // console.log('I I    ' + JSON.stringify(newValue))
            toggleOpen(true);
            setDialogValue({
              name: newValue.name,
              vat: newValue.vat,
            });
          } else {
            // console.log('I I I   ' + JSON.stringify(newValue))
            setValue({
              name: newValue.name,
              vat: newValue.vat,
            });

            upValue({
              name: newValue.name,
              vat: newValue.vat,
            })
          }
        }}

        
        id="free-solo-dialog-demo"
        options={types}
        //--------------------------------------------------------Filter-----------
        filterOptions = {(options, params) => {
          const filtered = filter(options, params);

          if (params.inputValue !== '') {
            filtered.push({
              inputValue: params.inputValue,
              name: `Add "${params.inputValue}"`,
            });
          }

          //  console.log(filtered)
          return filtered;
        }}
        //--------------------------------------------------------Filter ///-----------

        getOptionLabel={(option) => {
          // e.g value selected with enter, right from the input
          // console.log(option)
          if (typeof option.name === 'string') {
            return option.name;
          }
          if (option.inputValue) {
            return option.inputValue;
          }
          return option.name;
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
        <form onSubmit={handleClose}>
          <DialogTitle id="form-dialog-title">Add new product Type</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Alchool, Juices, Bars, etc
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              value={dialogValue.name}
              onChange={(event) => setDialogValue({ ...dialogValue, name: event.target.value })}
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