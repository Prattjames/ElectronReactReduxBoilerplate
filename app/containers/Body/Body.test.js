import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { Body } from './Body';

describe('<Body />', () => {
	it('should exists', () => {
		const wrapper = shallow(<Body />);
		const expected = wrapper.hasClass('Body');
		expect(expected).to.exist;
	});
});
