import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { CoreModuleModule } from './core-module/core-module.module';
import { YoutubeModuleModule } from './youtube-module/youtube-module.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CoreModuleModule,
    YoutubeModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
