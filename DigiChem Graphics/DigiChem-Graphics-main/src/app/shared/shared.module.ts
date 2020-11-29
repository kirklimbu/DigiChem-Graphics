import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedRoutingModule } from './shared-routing.module';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { NgxSpinnerModule } from 'ngx-spinner';
const DECLARATIONS: any[] = [
  /*  ActionButtonsComponent,
  DeletePopupComponent,
  FormGroupComponent,
  ListPageTemplateComponent, */
  SpinnerComponent,
  // PageHeaderComponent,
  // SaveCancelButtonsComponent,
  // TableTopBarComponent,
  // ConstantsComponent,
  // SubMenuFilterPipe,
  // BreadcrumbComponent,
  // NpDatepickerModule
  // MaterialModule
];
@NgModule({
  declarations: [...DECLARATIONS],
  imports: [CommonModule, SharedRoutingModule, NgxSpinnerModule],
  exports: [NgxSpinnerModule, ...DECLARATIONS],
})
export class SharedModule {}
