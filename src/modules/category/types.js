//import { listOf as list, recordOf as record } from 'react-immutable-proptypes'
import { string } from 'prop-types'
import PropTypes from "prop-types";

export const category = PropTypes.shape({
    name: string.isRequired,
    value: string.isRequired
});

export const categories = PropTypes.arrayOf(category);
