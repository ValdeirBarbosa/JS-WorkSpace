function trataErroELancar(erro){
    throw new Error(".....")
}
function imprimirNomeGritado(obj) {
    try {
        console.log(obj.name.toUpperCase() + '!!!!')
    }catch(e){
        trataErroELancar(e)
    }

}
const obj = { name: 'Jose' }

imprimirNomeGritado(obj)