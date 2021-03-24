import {useState, useEffect} from 'react'

import { GridWrap, GridRow, GridColumn } from 'emotion-flex-grid'

import InputLabel from '@material-ui/core/InputLabel'
import FormControl from '@material-ui/core/FormControl'
import Input from '@material-ui/core/Input'
import Button from '@material-ui/core/Button'
import { FiSave } from 'react-icons/fi'



function EditData({client, setClient}) {

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
                            onClick ={()=>onSubmit()}
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
