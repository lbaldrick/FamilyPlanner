import React from 'react';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';

const styles = theme => ({
    root: {

    },
});

const StandardSecondaryButton = ({classes, displayName, onClick}) => {
    return ( <Button color="secondary" className={classes.button} onClick={onClick}>
            {displayName}
        </Button>
    );
};

StandardSecondaryButton.propTypes = {
    classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(StandardSecondaryButton);