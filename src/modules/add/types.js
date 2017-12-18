//import { listOf as list, recordOf as record } from 'react-immutable-proptypes'
import PropTypes from "prop-types";

export const billRecord = PropTypes.shape({
    title: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
});

export const bills = PropTypes.arrayOf(billRecord);
