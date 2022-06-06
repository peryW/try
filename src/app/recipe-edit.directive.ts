import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[ngEdit]'
})
export class RecipeEditDirective {
  @Input()
  set ngEdit(condition: boolean) {
    if (condition)
   this.viewContainer.createEmbeddedView(this.templateRef);
    else 
    this.viewContainer.clear();
  }
  constructor(private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef) { }

}
