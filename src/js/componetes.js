import '../css/componentes.css';
//import webpacklogo from '../assets/img/image.png';

export function saludo () {
    let h1 = document.createElement('h1');
    h1.innerText = 'Hello, world xd';
    document.body.append(h1);

    //Img
    /*console.log(webpacklogo);
    const img = document.createElement('img');
    img.src = webpacklogo;
    document.body.append(img);*/
}
