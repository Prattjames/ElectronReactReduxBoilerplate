import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { insertData } from '../../actions';

export const Body = ({ love, data }) => (
  <div className="Body" onClick={() => data('LoOove')}>React + Redux + Electron = {love}</div>
);

const mapStateToProps = (state) => ({
  love: state.data.love,
});

const mapDispatchToProps = {
  data: insertData,
};

Body.propTypes = {
  love: PropTypes.string,
  data: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(Body);
