const imprimirResutado = function (nota){
    switch (Math.floor(nota)) {
        
        case 10:
        case  9:
            console.log("Aprovado com honra!")
            break
        case 8:case 7:
            console.log("Aprovado !")
            break
        case 6: case 5: case 4:
            console.log("Recuperação!")
            break
        case 3: case 2: case 1: case 0:
            console.log("Aprovado com honra!")
            break
        default:
            console.log("Dados invalidos ...")
    }
    
}

imprimirResutado(10)
imprimirResutado(8.9)
imprimirResutado(5)
imprimirResutado(2)
imprimirResutado(100)