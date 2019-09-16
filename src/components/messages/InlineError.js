import React from 'react';
import PropTypes from 'prop-types';

export default function InlineError({ text }) {
	//inline error for validation
	//animations and advance transitions can be used
	return <span style={{ color: 'red' }}>{text}</span>;
}

InlineError.propTypes = {
	text: PropTypes.string.isRequired,
};
