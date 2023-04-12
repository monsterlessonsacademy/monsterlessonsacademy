import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ModalService } from './modal/services/modal.service';
import { ModalModule } from './modal/modal.module';
import { TooltipModule } from './tooltip/tooltip.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ModalModule,
    TooltipModule,
  ],
  bootstrap: [AppComponent],
  providers: [ModalService],
})
export class AppModule {}
