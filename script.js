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

let baseLaptop = new producto("base",5000,30)
let laptopLenovo = new producto("laptopLenovo",85000,15)
let laptopGamer = new producto("laptopGamer",101000,30)
let monitorCX = new producto("monitorCX",30000,45)
let mouseGamer = new producto("mouseGamer",2000,100)
let torreSonido = new producto("torreSonido",20000,10)
let parlantePortatil = new producto("parlantePortatil",9500,25)
let tecladoCX = new producto("tecladoCX",2500,20)
let comboNisuta = new producto("comboNisuta",4500,30)
let wifiNisuta = new producto("wifiNisuta",5000,30)

alert("Estos son nuestros productos: \n - Base para laptop \n - Laptop Lenovo \n - Laptop Gamer \n - Monitor CX \n - Mouse Gamer CX \n - Torre de sonído \n - Parlante portatil \n - Teclado CX \n - Combo Nisuta \n - Antena Wifi")


let fin = ""
while(fin != "no"){
    let compra = prompt("Que producto desea adquirir \n - Base para laptop \n - Laptop Lenovo \n - Laptop Gamer \n - Monitor CX \n - Mouse Gamer CX \n - Torre de sonído \n - Parlante portatil \n - Teclado CX \n - Combo Nisuta \n - Antena Wifi")
    alert(compra.toUpperCase())
    if(compra.toUpperCase() == "BASE PARA LAPTOP"){
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
alert("EL PRECIO TOTAL DE LA COMPRA ES DE "+ precioTotal)

