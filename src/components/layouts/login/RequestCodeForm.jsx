import React, {PureComponent} from 'react';
import StandardPrimaryButton from "../../library/mui/button/StandardPrimaryButton";
import StandardTextField from "../../library/mui/input/StandardTextField";
import StandardSecondaryButton from "../../library/mui/button/StandardSecondaryButton";

class RequestCodeForm extends PureComponent {
    render() {
        return <div className='request-code-form'>
            <div className='request-code-form_row'>
                <StandardTextField
                    classes={this.props.classes}
                    id={this.props.textFieldId}
                    displayName={"Email Address:"}
                    value={this.props.value}
                    onChange={this.props.onChange}/>
            </div>
            <div className='request-code-form_row'>
                <div className='request-code-form_row_btns'>
                    <StandardPrimaryButton displayName={'Request Code'} onClick={this.props.onSubmit}/>
                    <StandardSecondaryButton displayName={'Cancel'} onClick={this.props.onCancel}/>
                </div>
            </div>
        </div>
    }
}

export default RequestCodeForm;
