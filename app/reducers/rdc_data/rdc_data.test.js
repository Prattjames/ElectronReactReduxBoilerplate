import { expect } from 'chai';
import data from './rdc_data';
import {
  ACTION,
  insertData,
} from '../../actions/act_data';

describe('rdc_data', () => {
  it('should return initial state with LOVE', () => {
    const expected = {
      love: 'LOVE',
    };
    expect(data(undefined, { type: null })).to.eql(expected);
  });

  it('should return action insertData with payload = LIVE', () => {
    const expected = {
      type: ACTION,
      payload: 'LIVE'
    };
    expect(insertData('LIVE')).to.eql(expected);
  });
});
