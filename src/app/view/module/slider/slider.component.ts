import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.loadScript('../assets/js/slider-2.js');
    this.loadScript('https://cdnjs.cloudflare.com/ajax/libs/modernizr/2.8.3/modernizr.min.js')
    this.loadScript('https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js')
    this.loadScript('https://tympanus.net/Development/Slicebox/js/jquery.slicebox.js')
  }

  public loadScript(url: string) {
    const body = <HTMLDivElement>document.body;
    const script = document.createElement('script');
    script.innerHTML = '';
    script.src = url;
    script.async = false;
    script.defer = true;
    body.appendChild(script);
  }
}
