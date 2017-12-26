import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './features/counter.reducer';
import { ButtonsComponent } from './features/buttons.component';
import { DisplayComponent } from './features/display.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonsComponent,
    DisplayComponent,
  ],
  imports: [
    BrowserModule,
    StoreModule.provideStore({counter: counterReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
