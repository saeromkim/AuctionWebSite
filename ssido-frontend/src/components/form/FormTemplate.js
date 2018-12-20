import React, { Component } from 'react';
import styles from './form.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

class FormTemplate extends Component {
    render() {
        const { form } = this.props;
        return (
            <div>
                {form}
            </div>
        );
    }
}

export default FormTemplate;