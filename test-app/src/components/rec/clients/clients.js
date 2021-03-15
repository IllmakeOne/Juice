import {    List, 
            Datagrid, 
            Edit, 
            Create, 
            SimpleForm, 
            DateField, 
            TextField, 
            EditButton, 
            Filter,
            TextInput, 
            Show, 
            SimpleShowLayout,
             RichTextField,
            DateInput, 
            SearchInput} from 'react-admin';
import BookIcon from '@material-ui/icons/Book';
import { Button } from '@material-ui/core';
import { FiCheck, FiPlusSquare, } from "react-icons/fi"
export const ClientIcon = BookIcon;



const PostTitle = ({ record }) => {
    return <span>Post {record ? `"${record.title}"` : ''}</span>;
};

export const AddSub = (props) =>{
    return (
    <Edit title={<PostTitle />} {...props}>
        <SimpleForm>
            <TextInput disabled source="id" />
            <TextInput source="name" />
            <TextInput source="phone" />
            <TextInput source="email" />
            <TextInput label="Current Subscription" source="crtsub" />
            <TextInput source="comment" />
            {/* <DateInput label="Publication date" source="published_at" /> */}
            {/* <TextInput source="average_note" /> */}
        </SimpleForm>
    </Edit>
)
 }

 export const ClientShow = (props) => (
    <Show {...props} show=''>
        <SimpleShowLayout>
            <TextField label="Current Subscription Type "  source="crtsub.type" />
            <DateField label="End Date"  source="crtsub.end" />
            <TextField source="comment" />
        </SimpleShowLayout>
    </Show>
)

export const ClientEdit = (props) => (
    <Edit title={<PostTitle />} {...props}>
        <SimpleForm>
            <TextInput disabled source="id" />
            <TextInput source="name" />
            <TextInput source="phone" />
            <TextInput source="email" />
            {/* <TextInput label="Current Subscription" source="crtsub" /> */}
            <TextInput source="comment" />
            {/* <DateInput label="Publication date" source="published_at" /> */}
            {/* <TextInput source="average_note" /> */}
        </SimpleForm>
    </Edit>
)

export const ClientCreate = (props) => (
    <Create title="Create a Post" {...props}>
        <SimpleForm>
            <TextInput required source="name" />
            <TextInput required source="phone" />
            <TextInput source="email" />
            {/* <TextInput label="Current Subscription" source="crtsub" /> */}
            <TextInput source="comment" />
        </SimpleForm>
    </Create>
)

export const ClientsList = (props) => (
    <List {...props} filters={<ClientsFilter/>}>
        <Datagrid expand={ClientShow}>
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="phone" />
            <TextField source="email" />
            <TextField label="Current Subscription"  source="crtsub.type" />
            <div><Button
                startIcon={<FiPlusSquare/>}
                >
            </Button></div>
            <TextField source="comment" />
            {/* <EditButton basePath="/clients" /> */}
        </Datagrid>
    </List>
)

export const ClientShowSpecific = (props) => (
    <Show {...props} show=''>
        <SimpleShowLayout>
            <TextField source="title" />
            <TextField source="teaser" />
            <TextField source="name" />
            <TextField source="phone" />
            <TextField source="email" />
            <TextField label="Current Subscription"  source="crtsub" />
            <TextField source="comment" />
            <RichTextField source="body" />
            <DateField label="Publication date" source="created_at" />
        </SimpleShowLayout>
    </Show>
)

const ClientsFilter = (props) => (
    <Filter {...props}>
        <SearchInput  source="q" alwaysOn inputProps={{autocomplete: 'off'}} />
        <TextInput label="Name" source="name" defaultValue='' inputProps={{autocomplete: 'off'}}/>
        <TextInput label="Subscription" source="crtsub.type" defaultValue='' inputProps={{autocomplete: 'off'}}/>
    </Filter>
)

