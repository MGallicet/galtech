// variables

function producto(nombre,precio,stock,imagen){
    this.nombre = nombre
    this.precio = precio
    this.stock = stock
    this.imagen = imagen
}

let precioTotal = 0
function calculoprecio(compra,precio){
     precioTotal += compra * precio
}
function calculoStock(compra, stock, precio){
    if(compra <= stock){
        stock += stock - compra
        calculoprecio(compra,precio)
    }
    else{
        alert("Actualmente contamos con" + stock + "del producto seleccionado")
    }
}
function compra(nombre){

}

let baseLaptop = new producto("BASE LAPTOP",5000,30,"../img/productos/base.jpg")
let laptopLenovo = new producto("LAPTOP LENOVO",85000,15,"../img/productos/laptop.jpg")
let laptopGamer = new producto("LAPTOP GAMER",101000,30,"../img/productos/laptop2.jpg")
let monitorCX = new producto("MONITOR CX",30000,45,"../img/productos/monitor.jpg")
let mouseGamer = new producto("MOUSE GAMER CX",2000,100,"../img/productos/mouse.jpg")
let torreSonido = new producto("TORRE DE SONIDO",20000,10,"../img/productos/NSPA66B.jpg")
let parlantePortatil = new producto("PARLANTE PORTATIL",9500,25,"../img/productos/parlante2.jpg")
let tecladoCX = new producto("TECLADO CX",2500,20,"../img/productos/teclado.jpg")
let comboNisuta = new producto("COMBO NISUTA",4500,30,"../img/productos/tecladomouse.jpg")
let wifiNisuta = new producto("ANTENA WIFI",5000,0,"../img/productos/wireless.jpg")

let listaProductos = [baseLaptop, laptopLenovo, laptopGamer, monitorCX, mouseGamer, torreSonido, parlantePortatil, tecladoCX, comboNisuta, wifiNisuta]
let nombreProd = []



let lista = document.createElement("a")
lista.innerHTML = `Carrito de compras`
carro.append(lista)

let contador = 0

for(const producto of listaProductos){
    contador += 1
    if(producto.stock > 0){
    nombreProd.push(producto.nombre)
    let card = document.createElement("div")
    card.className="gal"
    card.id=contador
    card.innerHTML = `<h2 id=h${contador}>${producto.nombre}</h2><img src=${producto.imagen}><p>PRECIO: ${producto.precio}</p><button id = ${contador}>Comprar</button>`
    galProductos.append(card)
    let boton = document.getElementById(contador) 
    boton.addEventListener("click", agregaCarrito)
    }
    
}

let arregloID = []

function agregaCarrito(boton){
    let nombreCard = document.getElementById("h"+this.id)
    render()
    arregloID.push(this.id)
    let idSinRepe = [...new set(arregloID)]
    
    arregloSinRepe.forEach((idSinRepe) => {
        let item = listaProductos.filter((prod) => {return prod.id === idSinRepe})
        let cant = arregloID.reduce((total,id) => {return id===idSinRepe ? total =+1 : total},0)

    }) 
    let compra = document.createElement("li")
    compra.id = this.id
    compra.className = "listaCompra"
    compra.innerHTML = `${cantidad}X${item[0].nombre} - $${item[0].precio}`
    carro.append(compra)
    //let listaCompra = document.getElementsByClassName("listaCompra")
    
    
}



/*alert("Estos son nuestros productos: \n" +  nombreProd.join(" \n"))
Swal.fire({
    title: 'Error!',
    text: 'Do you want to continue',
    icon: 'error',
    confirmButtonText: 'Cool'
  })

let fin = ""
while(fin != "no"){


    let compra = prompt("Que producto desea adquirir \n -" + nombreProd.join("\n -"))


    //REEMPLAZO LOS IF//

    
    let resultado = listaProductos.find((el) => el.nombre === compra.toUpperCase())
    let cantidad = prompt("ingrese que cantidad de " + resultado.nombre + " desea comprar:")
    calculoStock(cantidad, resultado.stock, resultado.precio)

    
    /*if(compra.toUpperCase() == "BASE PARA LAPTOP"){
        let cantidadBase = prompt("ingrese que cantidad de " + baseLaptop.nombre + " desea comprar:")
        calculoStock(cantidadBase, baseLaptop.stock, baseLaptop.precio)
        
    }
    else if(compra.toUpperCase() == 'LAPTOP LENOVO'){
        let cantidadLaptopL = prompt("ingrese que cantidad de " + laptopLenovo.nombre + " desea comprar:")
        calculoStock(cantidadLaptopL, laptopLenovo.stock, laptopLenovo.precio)
        
    }
    else if(compra.toUpperCase()=="LAPTOP GAMER"){
        let cantidadLaptopGamer = prompt("ingrese que cantidad de " + laptopGamer.nombre + " desea comprar:")
        calculoStock(cantidadLaptopGamer, laptopGamer.stock, laptopGamer.precio)
        
    }
    else if(compra.toUpperCase()=="MONITOR CX"){
        let cantidadMonitorCX = prompt("ingrese que cantidad de " + monitorCX.nombre + " desea comprar:")
        calculoStock(cantidadMonitorCX, monitorCX.stock, monitorCX.precio)
        
    }
    else if(compra.toUpperCase()=="MOUSE GAMER CX"){
        let cantidadMouseGamer = prompt("ingrese que cantidad de " + mouseGamer.nombre + " desea comprar:")
        calculoStock(cantidadMouseGamer, baseLaptop.stock, baseLaptop.precio)
        
    }
    else if(compra.toUpperCase()=="TORRE DE SONIDO"){
        let cantidadTorre = prompt("ingrese que cantidad de " + torreSonido.nombre + " desea comprar:")
        calculoStock(cantidadTorre, torreSonido.stock, torreSonido.precio)
        
    }
    else if(compra.toUpperCase()=="PARLANTE PORTATIL"){
        let cantidadParlante = prompt("ingrese que cantidad de " + parlantePortatil.nombre + " desea comprar:")
        calculoStock(cantidadParlante, parlantePortatil.stock, parlantePortatil.precio)
        
    }
    else if(compra.toUpperCase()=="TECLADO CX"){
        let cantidadTecladoCX = prompt("ingrese que cantidad de " + tecladoCX.nombre + " desea comprar:")
        calculoStock(cantidadTecladoCX, tecladoCX.stock, tecladoCX.precio)
        
    }
    else if(compra.toUpperCase()=="COMBO NISUTA"){
        let cantidadcombo = prompt("ingrese que cantidad de " + comboNisuta.nombre + " desea comprar:")
        calculoStock(cantidadcombo, comboNisuta.stock, comboNisuta.precio)
        
    }
    else if(compra.toUpperCase()=="ANTENA WIFI"){
        let cantidadAntena = prompt("ingrese que cantidad de " + wifiNisuta.nombre + " desea comprar:")
        calculoStock(cantidadAntena, wifiNisuta.stock, wifiNisuta.precio)
        
    }





    fin = prompt("¿Desea adquirir mas productos? - si/no")
    
    

}
*/

