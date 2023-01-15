import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FolderPageRoutingModule } from './folder-routing.module';

import { FolderPage } from './folder.page';
import { CrearComponent } from "../crear/crear.component";
import { ListarComponent } from '../listar/listar.component';
import { MatTableModule } from '@angular/material/table';
import { ActualizarComponent } from '../actualizar/actualizar.component';

@NgModule({
    declarations: [FolderPage, CrearComponent, ListarComponent, ActualizarComponent],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        FolderPageRoutingModule,
        MatTableModule
    ]
})
export class FolderPageModule {}
