import React from 'react';
import {
	List,
	Datagrid,
	TextField,
	BooleanField,
	BooleanInput,
	TextInput,
	Create,
	SimpleForm,
	Edit,
	EditButton
} from 'react-admin';
import TagList from '../customFields/TagList.jsx';
import IdImageField from '../customFields/IdImageField';
import FestbotImageInput from '../customFields/ImageUpload';

const required = (message = 'Required') => value => (value ? undefined : message);

export const ArtistList = props => (
	<List title="All artists" {...props}>
		<Datagrid>
			<IdImageField source="artistPhoto" style={{width: '100px'}} baseUrl="https://ucarecdn.com/" />
			<TextField source="name" />
			<TextField source="country" />
			<TextField source="website" />
			<TextField source="popularity" />

			<TagList source="genres" />
			<BooleanField source="featured" />

			<EditButton />
		</Datagrid>
	</List>
);

export const ArtistCreate = props => (
	<Create {...props}>
		<SimpleForm>
			<TextInput source="name" validate={required()} />
			<TextInput source="country" />
			<TextInput source="website" />
			<TextInput source="facebook" />
			<TextInput source="spotify" />
			<TextInput source="facebook" />
		</SimpleForm>
	</Create>
);

export const ArtistEdit = props => (
	<Edit {...props}>
		<SimpleForm>
			<IdImageField source="artistPhoto" style={{width: '250px'}} baseUrl="https://ucarecdn.com/" />
			<FestbotImageInput source="artistPhoto" />
			<TextInput source="name" validate={required()} />
			<TextInput source="country" />
			<TextInput source="website" />
			<TextInput source="facebook" />
			<TextInput source="spotify" />
			<TextInput source="facebook" />
			<BooleanInput source="featured" />
		</SimpleForm>
	</Edit>
);
