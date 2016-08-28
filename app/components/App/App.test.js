import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { App } from './App';

describe('<App />', () => {
	it('should exists', () => {
		const wrapper = shallow(<App />);
		const expected = wrapper.hasClass('App');
		expect(expected).to.exist;
	});
});
