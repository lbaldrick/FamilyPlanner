import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import PropTypes from 'prop-types';

const styles = theme => ({
    root: {

    },
});

const StandardListItem = ({classes, id, ChildComponent, onClick, displayName}) => {
    return ( <div className={classes.root}>
            <ListItem key={`item-${id}`}>
                <ChildComponent onClick={onClick} displayName={displayName}/>
            </ListItem>
        </div>
    );
};

StandardListItem.propTypes = {
    classes: PropTypes.object.isRequired,
    id: PropTypes.string.isRequired,
};


export default withStyles(styles)(StandardListItem);