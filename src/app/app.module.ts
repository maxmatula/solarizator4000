import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SixnumsComponent } from './sixnums/sixnums.component';
import { LottoService } from './_services/lotto.service';

@NgModule({
   declarations: [
      AppComponent,
      SixnumsComponent
   ],
   imports: [
      BrowserModule,
      FormsModule
   ],
   providers: [
     LottoService,
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
