import { Component} from '@angular/core';
import { Renderer2, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-view',
  templateUrl: './first-view.component.html',
  styleUrls: ['./first-view.component.css']
})
export class FirstViewComponent implements OnInit {

  constructor(private renderer: Renderer2, private elRef: ElementRef) {}

  ngOnInit() {
    this.renderer.listen(this.elRef.nativeElement, 'click', () => {
      window.location.href = 'http://localhost:4200/inicio';
    });
  }

}
