import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BeraComponent } from './bera/bera.component';
import { BriefhistoryComponent } from './briefhistory/briefhistory.component';
import { EftComponent } from './eft/eft.component';
import { ImaComponent } from './ima/ima.component';
import { OaeComponent } from './oae/oae.component';
import { ProvisionalComponent } from './provisional/provisional.component';
import { RdtComponent } from './rdt/rdt.component';
import { SfaComponent } from './sfa/sfa.component';
import { SisiComponent } from './sisi/sisi.component';
import { SpaComponent } from './spa/spa.component';
import { TdtComponent } from './tdt/tdt.component';
import { TteComponent } from './tte/tte.component';
import { RecommendationsComponent } from './recommendations/recommendations.component';
import { RinneComponent } from './rinne/rinne.component';
import { WeberComponent } from './weber/weber.component';
import { NewaudiometryComponent } from './newaudiometry/newaudiometry.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [BeraComponent, BriefhistoryComponent, EftComponent, ImaComponent, OaeComponent, ProvisionalComponent, RdtComponent, SfaComponent, SisiComponent, SpaComponent, TdtComponent, TteComponent, RecommendationsComponent, RinneComponent, WeberComponent, NewaudiometryComponent]
})
export class AudiometrylistModule { }
