import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RomanoParaInteiroComponent } from './romano-para-inteiro/romano-para-inteiro.component';
import { InteiroParaRomanoComponent } from './inteiro-para-romano/inteiro-para-romano.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'romano-para-inteiro', component: RomanoParaInteiroComponent },
  { path: 'inteiro-para-romano', component: InteiroParaRomanoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
