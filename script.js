// variables

function producto(nombre,precio,stock){
    this.nombre = nombre
    this.precio = precio
    this.stock = stock
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

let baseLaptop = new producto("BASE LAPTOP",5000,30)
let laptopLenovo = new producto("LAPTOP LENOVO",85000,15)
let laptopGamer = new producto("LAPTOP GAMER",101000,30)
let monitorCX = new producto("MONITOR CX",30000,45)
let mouseGamer = new producto("MOUSE GAMER CX",2000,100)
let torreSonido = new producto("TORRE DE SONIDO",20000,10)
let parlantePortatil = new producto("PARLANTE PORTATIL",9500,25)
let tecladoCX = new producto("TECLADO CX",2500,20)
let comboNisuta = new producto("COMBO NISUTA",4500,30)
let wifiNisuta = new producto("ANTENA WIFI",5000,0)

let listaProductos = [baseLaptop, laptopLenovo, laptopGamer, monitorCX, mouseGamer, torreSonido, parlantePortatil, tecladoCX, comboNisuta, wifiNisuta]
let nombreProd = []

for(const producto of listaProductos){
    if(producto.stock > 0){
    nombreProd.push(producto.nombre)
    }
}

alert("Estos son nuestros productos: \n" +  nombreProd.join(" \n"))


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
        
    }*/





    fin = prompt("¿Desea adquirir mas productos? - si/no")
    
    

}
alert("EL PRECIO TOTAL DE LA COMPRA ES DE "+ precioTotal)

