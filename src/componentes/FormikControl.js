
import React from 'react';

import Input from './Input';
import Select from './Select';
import ImagePicker from './ImagePicker';

function FormikControl(props) {
    const { control, ...rest } = props
    switch (control) {
        case 'input':
            return <Input {...rest} />
        case 'select':
            return <Select {...rest} />
        case 'image':
            return <ImagePicker {...rest} />
        default:
            return null
    }
}

export default FormikControl;