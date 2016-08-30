import test from 'ava';
import m from './';

test('Pad left with cripPad', t => {
	t.is(m('TIMMAAAY', 0), 'TIMMAAAY');
	t.is(m('TIMMAAAY', 1), 'TIMMAAAY');
	t.is(m('TIMMAAAY', 9), '♿TIMMAAAY');
});
