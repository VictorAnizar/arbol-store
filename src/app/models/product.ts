//se crea esta interfaz para poder tipar posteriormente nuestros arreglos, objetos o variables en los archivos externos a este y poder realizar una mejor práctica
export interface Product{
    id: string;
    image: string;
    title: string;
    price: number;
    description: string;
}