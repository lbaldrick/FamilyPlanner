import React from 'react';
import List from '@material-ui/core/List';
import PropTypes from 'prop-types';
import StandardListItem from './StandardListItem.jsx';

const styles = theme => ({
    root: {

    },
});

const StandardList = ({classes, ChildComponent, items, onClick}) => {
    return ( <div className={classes.root}>
            <List>
                    (items.map(item) => <StandardListItem ChildComponent={ChildComponent} id={item.id}
                                          onClick={onClick} displayName={item.displayName}/>)
            </List>
        </div>
    );
};

StandardList.propTypes = {
    classes: PropTypes.object.isRequired,
    onClick: PropTypes.func,
    items: PropTypes.array.isRequired,
    ChildComponent: PropTypes.object.isRequired,
};


export default withStyles(styles)(StandardList);
