import React from 'react';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';

const styles = theme => ({
    root: {

    },
});

const StandardCheckbox = ({classes, id, displayName, value, onChange, margin="normal"}) => {
    return ( <TextField
            id={id}
            label={displayName}
            className={classes.root}
            value={value}
            onChange={onChange}
            margin={margin}
        />
    );
};

StandardCheckbox.propTypes = {
    classes: PropTypes.object.isRequired,
    id: PropTypes.string.isRequired,
    displayName: PropTypes.string.isRequired,
    value: PropTypes.any.isRequired,
    onChange: PropTypes.func.isRequired,
    margin: PropTypes.string,
};


export default withStyles(styles)(StandardCheckbox);