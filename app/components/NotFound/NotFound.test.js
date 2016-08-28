import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { NotFound } from './NotFound';

describe('<NotFound />', () => {
	it('should exists', () => {
		const wrapper = shallow(<NotFound />);
		const expected = wrapper.hasClass('NotFound');
		expect(expected).to.exist;
	});
});
