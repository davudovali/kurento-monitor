import React from 'react';
import {Checkbox} from 'material-ui';

export default function SelectAllCheckbox(props) {
    return <Checkbox style={{paddingRight: '16px', width: 'auto'}} onCheck={props.onCheck}/>;
}