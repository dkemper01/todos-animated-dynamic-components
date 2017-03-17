import { trigger, state, style, transition, animate } from '@angular/core';

export const pageTransition = trigger('transition', [
	state('in', style({ transform: 'translateX(0)', opacity: 1 })),
	transition('void => *', [
		style({ transform: 'translateX(100%)', opacity: 0 }),
		animate('300ms ease-out')
	]),
	transition('* => void', [
		style({ transform: 'translateX(-100%)', opacity: 0 }),
		animate('300ms ease-in')
	])
]);