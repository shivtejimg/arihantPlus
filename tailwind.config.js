export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FF6c00',
        secondary: '#AF1251',
        black: '#363B3D',
        black2: '#353C41',
        gray1:'#6F757C',
        gray2:'#9FA4AC',
        gray3:'#BFC3C9',
        gray4:'#DFE1E5',
        white: '#FEFEFE',
        white2:"#F5F5F5", 
        brown1:'#9C7889',
        brown2:'#CCB9C4',
        brown3:'#E7DEE3',
        brown4:'#E6DEE2',
        yellow1:'#FACB63',
        yellow2:'#FCDE93',
        yellow3:'#FCEAAF',
        red1:"#EC1A24",
        light1:'#ACACAC',
        amber:'#FFA800',
        error:"#FF0606",
        yellow4:'#FBEEC4',
      },
      fontFamily: { 
        // "Isidora_Sans":["Isidora Sans"]
        "Montserrat":["Montserrat"]
      },
      animation: {
        'masterclass-text-1': ' masterclass-text-1 20s ease-in-out infinite',
        'masterclass-text-2': ' masterclass-text-2 20s ease-in-out infinite',
        'masterclass-text-3': ' masterclass-text-3 20s ease-in-out infinite',
        'masterclass-image-1': ' masterclass-image-1 20s linear infinite',
        'masterclass-image-2': ' masterclass-image-2 20s linear infinite',
        'ctaanimation': 'ctaanimation 0.4s linear'
      },
      keyframes: {
        ctaanimation: {
        '0%':{
          transform:"translateY(-160px) scale(1.3)"
        },
        '100%' :{
          transform:"translateY(0px) scale(1)"
        }
        },
        "masterclass-text-1": {
          '0%': {
            transform: 'translate(0px, 0px)'
          },
          '33%': {
            transform: 'translate(0px, 0px)'
          },
          '35%': {
            transform: 'translate(346px, -8px)'
          },
          '68%': {
            transform: 'translate(346px, -8px)'
          },
          '70%': {
            transform: 'translate(90px, 199px)'
          },
          '100%': {
            transform: 'translate(0px, 0px)'
          },
          '98%': {
            transform: 'translate(90px, 199px)'
          },
        },
        "masterclass-text-2": {
          '0%': {
            transform: 'translate(100px, 0px)'
          },
          '33%': {
            transform: 'translate(100px, 0px)'
          },
          '35%': {
            transform: 'translate(-90px, 208px)'
          },
          '68%': {
            transform: 'translate(-90px, 208px)'
          },
          '70%': {
            transform: 'translate(-346px, 8px)'
          },
          '100%': {
            transform: 'translate(100px, 0px)'
          },
          '98%': {
            transform: 'translate(-346px, 8px)'
          },
        },
        "masterclass-text-3": {
          '0%': {
            transform: 'translate(0px, 0px)'
          },
          '33%': {
            transform: 'translate(0px, 0px)'
          },
          '35%': {
            transform: 'translate(-90px, -199px)'
          },
          '68%': {
            transform: 'translate(-90px, -199px)'
          },
          '70%': {
            transform: 'translate(234px, -208px)'
          },
          '100%': {
            transform: 'translate(0px, 0px)'
          },
          '98%': {
            transform: 'translate(234px, -208px)'
          },
        },
        "masterclass-image-1": {
          '0%': {
            transform: 'translateY(0px)' //
          },
          '33%': {
            transform: 'translateY(0px)' //
          },
          '35%': {
            transform: 'translateY(20px)'
          },
          '68%': {
            transform: 'translateY(20px)'
          },
          '70%': {
            transform: 'translateY(-20px)'
          },
          '100%': {
            transform: 'translateY(0px)' //
          },
          '98%': {
            transform: 'translateY(-20px)'
          },
        },
        "masterclass-image-2": {
          '0%': {
            transform: 'translateY(0px)' //
          },
          '33%': {
            transform: 'translateY(0px)' //
          },
          '35%': {
            transform: 'translateY(-20px)'
          },
          '68%': {
            transform: 'translateY(-20px)'
          },
          '70%': {
            transform: 'translateY(20px)'
          },
          '100%': {
            transform: 'translateY(0px)' //
          },
          '98%': {
            transform: 'translateY(20px)'
          },
        },
      }
    },
  },
  plugins: [],
}