import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ProfessionComponent } from "./work/profession/profession.component";
import { HouseworkComponent } from "./work/housework/housework.component";
import { AllWorkComponent } from "./work/all-work/all-work.component";

import { AppComponent } from "./app.component";
import { SamsungComponent } from './samsung/samsung.component';
import { HuaweiComponent } from './huawei/huawei.component';
import { DeviceComponent } from './device/device.component';
import { LaptopsComponent } from './laptops/laptops.component';
import { AcerComponent } from './acer/acer.component';
import { ToshibaComponent } from './toshiba/toshiba.component';
import { HpComponent } from './hp/hp.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfessionComponent,
    HouseworkComponent,
    AllWorkComponent,
    SamsungComponent,
    HuaweiComponent,
    DeviceComponent,
    LaptopsComponent,
    AcerComponent,
    ToshibaComponent,
    HpComponent
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
