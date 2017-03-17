import { Component, Input, AfterContentInit, AfterViewInit, ViewChild, ComponentFactoryResolver, OnInit, OnDestroy } from '@angular/core';
import { LoadDynamicDirective } from '../load-dynamic.directive';
import { TipComponent } from '../tip/tip.component';
import { Tip } from '../tip';

@Component({
  selector: 'dynamic-loader',
  templateUrl: './dynamic-loader.component.html',
  styleUrls: ['./dynamic-loader.component.scss']
})
export class DynamicLoaderComponent implements OnInit, AfterViewInit, OnDestroy {
	
	@Input() tips: Array<Tip>;
	currentTipIndex: number = -1;
	@ViewChild(LoadDynamicDirective) componentHost: LoadDynamicDirective;
  	subscription: any;
  	interval: any;

	constructor(private _componentFactoryResolver: ComponentFactoryResolver) { }

	ngOnInit() {
			
	}

	ngAfterContentInit() {		
		this.loadComponent();
		
	}
	
	ngAfterViewInit() {		
		this.getTips();
	}
	
	ngOnDestroy() {
		clearInterval(this.interval);
	}
	
	loadComponent() {
		this.currentTipIndex = (this.currentTipIndex + 1) % this.tips.length;
		let tip = this.tips[this.currentTipIndex];
		let componentFactory = this._componentFactoryResolver.resolveComponentFactory(tip.component);
		let viewContainerRef = this.componentHost.viewContainerRef;

		viewContainerRef.clear();

		let componentRef = viewContainerRef.createComponent(componentFactory);
		(<TipComponent>componentRef.instance).data = tip.data;
	}
	
	getTips() {
		this.interval = setInterval(() => {
			this.loadComponent();
		}, 3000);
	}

}
