import {useState, useEffect} from 'react'

import { GridWrap, GridRow, GridColumn } from 'emotion-flex-grid'

import InputLabel from '@material-ui/core/InputLabel'
import FormControl from '@material-ui/core/FormControl'
import TextField from '@material-ui/core/TextField'
import Input from '@material-ui/core/Input'
import Button from '@material-ui/core/Button'
import { FiSave } from 'react-icons/fi'


import { Autocomplete } from '@material-ui/lab'



function EditData({clients, client, setClient, Submit}) {

    const onSubmit = () => {

        //send item to db
    }

    const handleCangeName = e => {
        setClient({...client, name: e.target.value})
    }
    const handleChangePhone = e => {
        setClient({...client, phone: e.target.value})
    }
    const handleChangeEmail = e => {
        setClient({...client, email: e.target.value})
    }
    const handleChangeComment = e => {
        setClient({...client, comment: e.target.value})
    }

    return (
        <div>
            <GridRow direction = 'column' align='center'>

                <GridColumn textAlign={'center'}  p={['s', 's']}> 
                    <Autocomplete
                        className={''}
                            id="auto-clients"
                            options={clients}
                            getOptionLabel={(option) => option.name}
                            style={{ width: 300 }}
                            value={client}
                            selectOnFocus
                            clearOnBlur
                            // getOptionSelected={defaultValue}
                            handleHomeEndKeys
                            renderInput={(params) => <TextField {...params} label='Find Client' variant='outlined' />}
                            onChange={(ev, newVal)=>{
                                if(newVal) {setClient({name:newVal.name,
                                            phone: newVal.phone?newVal.phone:'',
                                            email: newVal.email?newVal.email:'',
                                            comment: newVal.comment?newVal.comment:''})
                                // setCrtItem(newVal)
                                console.log(newVal)}
                            }}
                    /> 
                </GridColumn>


                <GridColumn textAlign={'center'}  p={['s', 's']}> 
                    <FormControl >
                        <InputLabel htmlFor="component-simple">Name</InputLabel>
                        <Input  
                            name='nameInput'
                            type='text'
                            value={client? client.name: ''}
                            defaultValue={0} 
                            onChange={handleCangeName}
                        />
                    </FormControl>
                </GridColumn>

                <GridColumn p={['s', 's']}>
                    <FormControl >
                        <InputLabel htmlFor="component-simple">Phone Number</InputLabel>
                        <Input  
                            name='phoneInput'
                            type='text'
                            // placeholder={crtItem.stock}
                            value={client? client.phone: ''}
                            error={client.phone.lenght < 10}
                            defaultValue={0} 
                            onChange={handleChangePhone}
                        />
                    </FormControl>
                </GridColumn>

                <GridColumn p={['s', 's']}>
                    <FormControl >
                        <InputLabel htmlFor="component-simple">Email</InputLabel>
                        <Input  
                            name='emailInput'
                            type='text'
                            // placeholder={crtItem.stock}
                            value={client? client.email: ''}
                            // error={client.phone.lenght < 10}
                            defaultValue={0} 
                            onChange={handleChangeEmail}
                        />
                    </FormControl>
                </GridColumn>

                <GridColumn mt='xl' mb='xl' >
                    <FormControl >
                        <InputLabel htmlFor="component-simple">Comment</InputLabel>
                        <Input  
                            name='commentInput'
                            type='text'
                            placeholder={'comment'}
                            value={client? client.comment: ''}
                            // error={client.phone.lenght < 10}
                            // defaultValue={0} 
                            onChange={handleChangeComment}
                        />
                    </FormControl>
                </GridColumn>

                <GridColumn p={['s', 's']} align='center'>
                    <div className = 'saveClientButton'>
                        <Button  
                            // className='b.changeprice'
                            // variant="contained"
                            color="primary"
                            size='large'
                            startIcon={<FiSave />}
                            onClick ={()=>Submit()}
                            >
                                Save
                        </Button>
                    </div>
                </GridColumn>
            </GridRow>
        </div>
    )
}

export default EditData
