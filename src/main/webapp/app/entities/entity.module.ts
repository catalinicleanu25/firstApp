import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { FirstAppLocationMySuffixModule } from './location-my-suffix/location-my-suffix.module';
import { FirstAppDepartmentMySuffixModule } from './department-my-suffix/department-my-suffix.module';
import { FirstAppEmployeeMySuffixModule } from './employee-my-suffix/employee-my-suffix.module';
import { FirstAppJobMySuffixModule } from './job-my-suffix/job-my-suffix.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    imports: [
        FirstAppLocationMySuffixModule,
        FirstAppDepartmentMySuffixModule,
        FirstAppEmployeeMySuffixModule,
        FirstAppJobMySuffixModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FirstAppEntityModule {}
