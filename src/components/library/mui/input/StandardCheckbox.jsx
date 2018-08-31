import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import PropTypes from 'prop-types';
import withStyles from "@material-ui/core/es/styles/withStyles";

const styles = theme => ({
    root: {

    },
});

const StandardCheckbox = ({classes, isChecked, onChange, id}) => {
    return ( <Checkbox className={classes.root}
            checked={isChecked}
            onChange={onChange}
            value={id}
        />
    );
};

StandardCheckbox.propTypes = {
    classes: PropTypes.object.isRequired,
    onChange: PropTypes.func.isRequired,
    isChecked: PropTypes.bool.isRequired,
    id: PropTypes.string.isRequired,
};


export default withStyles(styles)(StandardCheckbox);