import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { routes } from './app.routes';
import { HowtoComponent } from './howto/howto.component';
import { ExamplesComponent } from './examples/examples.component';
import { LoadDynamicDirective } from './load-dynamic.directive';
import { DynamicLoaderComponent } from './dynamic-loader/dynamic-loader.component';
import { TipComponent } from './tip/tip.component';

@NgModule({
  declarations: [
		HowtoComponent,
		ExamplesComponent,
    AppComponent,
    LoadDynamicDirective,
    DynamicLoaderComponent,
    TipComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
		routes
  ],
  providers: [],
  entryComponents: [TipComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
