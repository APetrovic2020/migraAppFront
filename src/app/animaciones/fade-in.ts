import {
    trigger,
    state,
    style,
    animate,
    transition,
    query,
    stagger
  } from '@angular/animations';

export const FadeIn = [
    trigger('heroState', [
      state('in', style({   opacity : 1  })),
      transition(':enter', [style({opacity: 0}), animate(1000)]),
      // transition('active => inactive', animate(600, style({opacity: 0})))
      transition(':leave', animate(600, style({opacity: 0})))
    ]),

    trigger('heroStateTabla', [
      state('in', style({   opacity : .9  })),
      transition(':enter', [style({opacity: 0}), animate(600)]),
      // transition('active => inactive', animate(600, style({opacity: 0})))
      transition(':leave', animate(600, style({opacity: 0})))
    ]),

    trigger('heroStateSlow', [
      state('out', style({   opacity : .8 })),
      transition(':enter', [style({opacity: 0 , transform: 'scale(1)'}), animate(200)]),
      // transition('active => inactive', animate(600, style({opacity: 0})))
      transition(':leave', animate(200, style({opacity: 0})))
    ]),
    
    trigger('removeItem', [
      state('in', style({   opacity : 1 , transform: 'scale(1)' })),
      transition(':enter', [style({opacity: 0 , transform: 'scale(1.2)'}), animate(200)]),
      // transition('active => inactive', animate(600, style({opacity: 0})))
      transition(':leave', animate(200, style({opacity: 0, transform: 'scale(0)'})))
    ]),

    trigger('openClose', [
      state('open', style({
        height: '400px',
        opacity: 1,
        backgroundColor: 'yellow',
      })),
      state('closed', style({
        height: '100%',
        width:'100%',
        opacity: 0,
        backgroundColor: 'green'
      })),
      transition('open => closed', [
        animate('0.2s')
      ]),
      transition('closed => open', [
        animate('0.2s')
      ]),
    ]),


    trigger('myInsertRemoveTrigger', [
      transition(':enter', [
        style({ opacity: 0 , transform: 'scale(0.9)'}),
        animate('1s 300ms', style({ opacity: 1, transform: 'scale(1)' })),
      ]),
      transition(':leave', [
        animate('1s', style({ opacity: 0, transform: 'scale(0.8)' }))
      ])
    ]),

    trigger('mueveTextoArriba', [
      transition(':enter', [
        style({ transform: 'translateY(20px)', opacity: 0}),
        animate('1s 300ms', style({ transform: 'translateX(0px)', opacity: 1 })),
      ]),
      transition(':leave', [
        animate('1s', style({ opacity: 0, transform: 'scale(0.8)' }))
      ])
    ]),

    trigger('apareceLento', [
      transition(':enter', [
        style({ opacity: 0}),
        animate('1s 300ms ease-in', style({ opacity: 1, transform: 'scale(1)' })),
      ]),
      transition(':leave', [
        animate('1s', style({ opacity: 0, transform: 'scale(0.8)' }))
      ])
    ]),

    trigger('muestraOculta', [
      transition(':enter', [
        style({ opacity: 0}),
        animate('.4s 200ms ease-in', style({ opacity: 1, transform: 'scale(1)' })),
      ]),
      transition(':leave', [
        animate('0s ease-out', style({ opacity: 0, transform: 'scale(0.8)' }))
      ])
    ]),

    trigger('alertaSubscripcionContainer', [
      transition(':enter', [
        style({ height:'0px'}),
        animate('1.5s 1200ms ease-in', style({ opacity: 1, transform: 'scale(1)', height:'250px' })),
      ]),
      transition(':leave', [
        animate('1s', style({ opacity: 0, transform: 'scale(0.8)' }))
      ])
    ]),

    trigger('alertaSubscripcionContent', [
      transition(':enter', [
        style({ opacity: 0}),
        animate('1.5s 1900ms ease-in', style({ opacity: 1, transform: 'scale(1)' })),
      ]),
      transition(':leave', [
        animate('1s', style({ opacity: 0, transform: 'scale(0.8)' }))
      ])
    ]),

  

    /*
    trigger('botonMenuR', [
      transition(':enter', [
        style({transform: 'rotate(45deg)' }),
        animate('.3s', style({ 'transition-delay':'2s', transform: 'rotate(0deg)' })),
      ]), 
      transition(':leave', [
        animate('.2s', style({ opacity: 0 }))
      ])
    ]),

    trigger('botonMenuL', [
      transition(':enter', [
        style({ transform: 'rotate(-45deg)' }),
        animate('.5s', style({ transform: 'rotate(0deg)' })),
      ]),
      
      transition(':leave', [
        animate('.2s', style({ 'transition-delay': '2s',    opacity: 0 }))
      ])
    ]),
      */


  ];

