import React from "react";
import PropTypes from "prop-types";

export default function WatchItem({watch, currentUTC, handleDelete}) {
    return (
        <div>
            <p><b>{watch.city}</b>
                <button onClick={() => handleDelete(watch.id)}>close</button>
            </p>
            <p>{currentUTC.utcOffset(Number(watch.offset)).format("kk:mm:ss")}</p>

        </div>
    );
};

WatchItem.propTypes = {
    watch: PropTypes.shape({
        city: PropTypes.string.isRequired,
        offset: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired
    }),
    currentUTC: PropTypes.object,
    handleDelete: PropTypes.func.isRequired
};