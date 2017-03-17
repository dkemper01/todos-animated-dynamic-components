import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[load-dynamic]'
})

export class LoadDynamicDirective {

	// Inject ViewContainerRef to gain access to the view container of the element that 
	// will become the host of the dynamically added component.
	//
	constructor(public viewContainerRef: ViewContainerRef) { }

}
