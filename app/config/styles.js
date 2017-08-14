

export var colors = {
   background: '#FBFAFA',
    dark: '#00779a',
    light: '#10a5bd',
    header: {
        text: '#0f9cb3',
        background: '#FFF'
    },
    gray: '#999',
};

export var setColors =(mauDam, mauNhat) =>{
    colors.dark = mauDam;
    colors.light =mauNhat;
    colors.header.text= mauDam;
}