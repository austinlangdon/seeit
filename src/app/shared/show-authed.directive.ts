import { 
    Directive,
    Input,
    OnInit,
    TemplateRef,
    ViewContainerRef
 } from '@angular/core';

import { UserService } from './services/user.service';

@Directive({ selector: '[showAuthed]' })
export class ShowAuthedDirective implements OnInit {
        
    constructor(
        private templateRef: TemplateRef<any>,
        private viewContainer: ViewContainerRef,
        private userService: UserService
    ) {}
    
    condition: boolean;

    ngOnInit() {
        this.userService.isAuthenticated.subscribe(
            (isAuthenticated) => {
                if(isAuthenticated && this.condition || !isAuthenticated && !this.condition) {
                    this.viewContainer.createEmbeddedView(this.templateRef);
                } else {
                    this.viewContainer.clear();
                }
            });
    }
    
    @Input() set showAuthed(condition: boolean) {
        this.condition = condition;
    }
}