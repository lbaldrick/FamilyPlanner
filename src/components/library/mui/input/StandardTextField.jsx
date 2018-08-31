import React from 'react';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';
import withStyles from "@material-ui/core/es/styles/withStyles";

const styles = theme => ({
    root: {

    },
});

const StandardTextField = ({classes, id, displayName, value, onChange, margin="normal"}) => {
    return ( <TextField
            id={id}
            label={displayName}
            className={classes.root}
            value={value}
            onChange={(event) => onChange(id, event.target.value)}
            margin={margin}
        />
    );
};

StandardTextField.propTypes = {
    classes: PropTypes.object.isRequired,
    id: PropTypes.string.isRequired,
    displayName: PropTypes.string.isRequired,
    value: PropTypes.any.isRequired,
    onChange: PropTypes.func.isRequired,
    margin: PropTypes.string,
};


export default withStyles(styles)(StandardTextField);
