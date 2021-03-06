import React from "react";
import PropTypes from "prop-types";
import Watch from "./Watch";

export default function WatchList ({watches, currentUTC, handleDelete}) {
    return (
        <div>
            {watches.map(watch => (
                <Watch key={watch.id} watch={watch} currentUTC={currentUTC} handleDelete={handleDelete}/>
            ))}
        </div>
    );
};

WatchList.propTypes = {
    watches: PropTypes.arrayOf(
        PropTypes.shape({
            city: PropTypes.string.isRequired,
            offset: PropTypes.string.isRequired,
            id: PropTypes.string.isRequired
        })
    ).isRequired,
    currentUTC: PropTypes.object,
    handleDelete: PropTypes.func.isRequired
};
