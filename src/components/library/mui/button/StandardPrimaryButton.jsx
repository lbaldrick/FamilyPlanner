import React from 'react';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import withStyles from "@material-ui/core/es/styles/withStyles";

const styles = theme => ({
    root: {

    },
});

const StandardPrimaryButton = ({classes, displayName, onClick}) => {
    return ( <Button color="primary" className={classes.button} onClick={onClick}>
            {displayName}
        </Button>
    );
};

StandardPrimaryButton.propTypes = {
    classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(StandardPrimaryButton);