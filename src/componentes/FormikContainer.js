import React from 'react';
import { Button } from 'react-native';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import FormikControl from './FormikControl';

function FormikContainer() {
    const dropdownOptions = [
        { key: 'Select uma instituição', value: '' },
        { key: 'Option 1', value: 'option1' },
        { key: 'Option 2', value: 'option2' },
        { key: 'Option 3', value: 'option3' }
    ]
    const dropdownOptions2 = [
        { id: 'Option 1', nome: 'option1', cnpj: '123' },
        { id: 'Option 2', nome: 'option2', cnpj: '1234' },
        { id: 'Option 3', nome: 'option3', cnpj: '12345' }
    ]
    const radioOptions = [
        { key: 'Option 1', value: 'rOption1' },
        { key: 'Option 2', value: 'rOption2' },
        { key: 'Option 3', value: 'rOption3' }
    ]
    const checkboxOptions = [
        { key: 'Option 1', value: 'cOption1' },
        { key: 'Option 2', value: 'cOption2' },
        { key: 'Option 3', value: 'cOption3' }
    ]
    const initialValues = {
        email: '',
        selectOption: ''
    }
    const validationSchema = Yup.object({
        email: Yup.string().required('O e-mail é obrigatório'),
        selectOption: Yup.string().required('A instituição é obrigatória'),
    })
    const onSubmit = values => {
        console.log('entrou')
        console.log('Form data', values)
        // console.log('Saved data', JSON.parse(JSON.stringify(values)))
    }

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={values => console.log(values)}
        >
            {({ handleSubmit }) => (
                <Form>
                    <FormikControl
                        control='input'
                        type='email'
                        label='Email'
                        name='email'
                    />
                    {/* <FormikControl
                        control='textarea'
                        label='Description'
                        name='description'
                    /> */}
                    <FormikControl
                        control='select'
                        label=''
                        name='selectOption'
                        options={dropdownOptions}
                    />
                    {/* <FormikControl
                        control='radio'
                        label='Radio topic'
                        name='radioOption'
                        options={radioOptions}
                    />
                    <FormikControl
                        control='checkbox'
                        label='Checkbox topics'
                        name='checkboxOption'
                        options={checkboxOptions}
                    />
                    <FormikControl
                        control='date'
                        label='Pick a date'
                        name='birthDate'
                    /> */}
                    <Button
                        onPress={handleSubmit}
                        title="Botão"
                    />
                </Form>
            )}
        </Formik>
    )
}

export default FormikContainer;