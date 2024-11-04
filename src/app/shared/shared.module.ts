import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { LoaderComponent } from './components/loader/loader.component';
import { ModalComponent } from './components/modal/modal.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ClickOutsideDirective } from './directives/click-outside.directive';
import { HighlightDirective } from './directives/highlight.directive';
import { DateFormatPipe } from './pipes/date-format.pipe';

@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    SidebarComponent,
    LoaderComponent,
    ModalComponent,
    ClickOutsideDirective,
    HighlightDirective,
    DateFormatPipe,
  ],
  imports: [CommonModule],
  exports: [
    NavbarComponent,
    FooterComponent,
    SidebarComponent,
    LoaderComponent,
    ModalComponent,
    ClickOutsideDirective,
    HighlightDirective,
    DateFormatPipe,
  ],
})
export class SharedModule {}
