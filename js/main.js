
class jugador {
    constructor(nombre, genero, partidosJugados, tecnica, saque, drive, reves, remate, posicionamiento, estadoFisico, defensa, mentalidad, nivel, categoria ){
        this.nombre = nombre.toUpperCase()
        this.genero = genero.toUpperCase()
        this.partidosJugados = partidosJugados
        this.tecnica = tecnica
        this.saque = saque
        this.drive = drive
        this.reves = reves
        this.remate = remate
        this.posicionamiento = posicionamiento
        this.estadoFisico = estadoFisico
        this.defensa = defensa
        this.mentalidad = mentalidad
        this.nivel = ((this.tecnica + this.saque + this.drive + this.reves + this.remate + this.posicionamiento + this.estadoFisico + this.defensa + this.mentalidad)/9).toFixed(1);
        this.categoria = categoria
    }

    partidoNuevo (){this.partidosJugados = this.partidosJugados + 1}

    mejora (){
        this.tecnica = (this.tecnica + this.partidosJugados *0.2).toFixed(1);
        this.saque = (this.saque + this.partidosJugados *0.15).toFixed(1);
        this.drive = (this.drive + this.partidosJugados *0.1).toFixed(1);
        this.reves = (this.reves + this.partidosJugados *0.08).toFixed(1);
        this.remate = (this.remate + this.partidosJugados *0.12).toFixed(1);
        this.posicionamiento = (this.posicionamiento + this.partidosJugados *0.2).toFixed(1);
        this.estadoFisico = (this.estadoFisico + this.partidosJugados *0.25).toFixed(1);
        this.defensa = (this.defensa + this.partidosJugados *0.1).toFixed(1);
        this.mentalidad = (this.mentalidad + this.partidosJugados *0.15).toFixed(1);}

    
}


const jugadores = [];

jugadores.push(new jugador ("agus", "no binario", 0, 3, 2, 5, 2, 4, 3, 6, 1, 3, Number(""),""));
jugadores.push(new jugador ("tomas", "masculino", 18, 9, 6, 9, 7, 8, 7, 7, 8, 10, Number(""),""));
jugadores.push(new jugador ("gregorio", "masculino", 4, 6, 7, 7, 5, 7, 6, 8, 5, 6, Number(""),""));
jugadores.push(new jugador ("francisco", "no binario", 12, 9, 5, 4, 6, 8, 8, 7, 6, 8, Number(""),""));
jugadores.push(new jugador ("marcos", "masculino", 15, 8, 8, 7, 5, 9, 10, 7, 6, 10, Number(""),""));
jugadores.push(new jugador ("juana", "femenino", 5, 3, 5, 7, 6, 4, 4, 8, 6, 3, Number(""),""));
jugadores.push(new jugador ("mercedes", "femenino", 25, 9, 7, 10, 8, 8, 8, 9, 10, 10, Number(""),""));
jugadores.push(new jugador ("lucas", "masculino", 14, 7, 7, 7, 8, 7, 7, 8, 7, 6, Number(""),""));
jugadores.push(new jugador ("sofia", "femenino", 22, 9, 9, 8, 8, 7, 9, 9, 8, 10, Number(""),""));
jugadores.push(new jugador ("andrea", "no binario", 6, 5, 7, 6, 3, 5, 4, 8, 3, 7, Number(""),""));
jugadores.push(new jugador (prompt("ingrese su nombre"), prompt("ingrese su genero (Femenino, Masculino o No binario)"), Number(prompt("indique con valor numérico, cuantos partidos de PADEL jugó este año")), Number(prompt("califique con valor numérico su TÉCNICA, en una escala del 1 al 10")), Number(prompt("califique con valor numérico su SAQUE, en una escala del 1 al 10")), Number(prompt("califique con valor numérico su DRIVE, en una escala del 1 al 10")), Number(prompt("califique con valor numérico su REVES, en una escala del 1 al 10")), Number(prompt("califique con valor numérico su REMATE, en una escala del 1 al 10")), Number(prompt("califique con valor numérico su POSICIONAMIENTO, en una escala del 1 al 10")), Number(prompt("califique con valor numérico su ESTADO FÍSICO, en una escala del 1 al 10")), Number(prompt("califique con valor numérico sus REFLEJOS DEFENSIVOS, en una escala del 1 al 10")), Number(prompt("califique con valor numérico su MENTALIDAD EN EL DEPORTE, en una escala del 1 al 10")),"",""))

for (const jugador of jugadores){
    jugador.partidoNuevo();
    jugador.mejora();
}

jugadores.forEach(jugador => { if(jugador.nivel > 8.5){
    jugador.categoria = "EXPERTO"}
    
    else if (jugador.nivel > 7.5) {
        jugador.categoria = "AVANZADO"}

    else if (jugador.nivel > 5.5) {
        jugador.categoria = "MEDIO"}
    
    else
        {jugador.categoria = "PRINCIPIANTE"}
});

console.log("Todos los datos: ")
console.log(jugadores)
console.log("----------")


const resumen = jugadores.map ((jugador)=> {
    return{
        nombre: jugador.nombre,
        genero: jugador.genero,
        nivel: jugador.nivel,
        categoria: jugador.categoria, 
    }
})
console.log("Resumen de datos: ")
console.log(resumen)
console.log("----------")

//-------------BUSQUEDA POR FILTROS------------------
console.log("Resultados de la búsqueda por filtros:")

const criteriosFiltro = {
    nombre: "".toUpperCase(),
    genero: "femenino".toUpperCase(),
    minimoDePartidosJugados: "10",
    maximoDePartidosJugados: "",
    tecnica: "",
    saque: "",
    drive: "",
    reves: "",
    remate:"",
    posicionamiento: "",
    estadoFisico: "15",
    defensa: "",
    mentalidad: "",
    nivel: "",
    categoria:"experto".toUpperCase(),

}

function infoJugadores(jugadores){
    jugadores.forEach(jugador => {
        console.log(" Nombre: " + jugador.nombre + ". Género: " + jugador.genero + ". Jugó: " +  jugador.partidosJugados + " partidos. Técnica: " + jugador.tecnica + " puntos. Saque: " + jugador.saque + " puntos. Drive: " + jugador.drive + " puntos. Revés: " + jugador.reves + " puntos. Remate: " + jugador.remate + " puntos. Posicionamiento: " + jugador.posicionamiento + " puntos. Estado físico: " + jugador.estadoFisico+ " puntos. Defensa: " + jugador.defensa + " puntos. Mentalidad: " + jugador.mentalidad + " puntos. Nivel: " + jugador.nivel + " puntos. Categoría: " + jugador.categoria )
    })
}

function noHayJugadores(){
    console.log("No hay jugadores con esas características")
}

function filtrarNombre(jugador){
    if(criteriosFiltro.nombre){
        return jugador.nombre == criteriosFiltro.nombre
    }
    return jugador;
}

function filtrarGenero(jugador){
    if(criteriosFiltro.genero){
        return jugador.genero == criteriosFiltro.genero
    }
    return jugador;
}

function filtrarMinimoDePartidosJugados(jugador){
    if(criteriosFiltro.minimoDePartidosJugados){
        return jugador.partidosJugados >= criteriosFiltro.minimoDePartidosJugados
    }
    return jugador;
}
function filtrarMaximoDePartidosJugados(jugador){
    if(criteriosFiltro.maximoDePartidosJugados){
        return jugador.partidosJugados <= criteriosFiltro.maximoDePartidosJugados
    }
    return jugador;
}
function filtrarTecnica(jugador){
    if(criteriosFiltro.tecnica){
        return Math.floor(jugador.tecnica) == criteriosFiltro.tecnica
    }
    return jugador;
}

function filtrarSaque(jugador){
    if(criteriosFiltro.saque){
        return Math.floor(jugador.saque)  == criteriosFiltro.saque
    }
    return jugador;
}
function filtrarDrive(jugador){
    if(criteriosFiltro.drive){
        return Math.floor(jugador.drive)  == criteriosFiltro.drive
    }
    return jugador;
}
function filtrarReves(jugador){
    if(criteriosFiltro.reves){
        return Math.floor(jugador.reves) == criteriosFiltro.reves
    }
    return jugador;
}
function filtrarRemate(jugador){
    if(criteriosFiltro.remate){
        return Math.floor(jugador.remate) == criteriosFiltro.remate
    }
    return jugador;
}
function filtrarPosicionamiento(jugador){
    if(criteriosFiltro.posicionamiento){
        return Math.floor(jugador.posicionamiento) == criteriosFiltro.posicionamiento
    }
    return jugador;
}
function filtrarEstadoFisico(jugador){
    if(criteriosFiltro.estadoFisico){
        return Math.floor(jugador.estadoFisico) == criteriosFiltro.estadoFisico
    }
    return jugador;
}
function filtrarDefensa(jugador){
    if(criteriosFiltro.defensa){
        return Math.floor(jugador.defensa) == criteriosFiltro.defensa
    }
    return jugador;
}
function filtrarMentalidad(jugador){
    if(criteriosFiltro.mentalidad){
        return Math.floor(jugador.mentalidad) == criteriosFiltro.mentalidad
    }
    return jugador;
}
function filtrarNivel(jugador){
    if(criteriosFiltro.nivel){
        return Math.floor(jugador.nivel) == criteriosFiltro.nivel
    }
    return jugador;
}
function filtrarCategoria(jugador){
    if(criteriosFiltro.categoria){
        return jugador.categoria == criteriosFiltro.categoria
    }
    return jugador;
}

function filtrarJugador(){
    let resultado = jugadores.filter(filtrarNombre).filter(filtrarGenero).filter(filtrarMinimoDePartidosJugados).filter(filtrarMaximoDePartidosJugados).filter(filtrarTecnica).filter(filtrarSaque).filter(filtrarDrive).filter(filtrarReves).filter(filtrarRemate).filter(filtrarPosicionamiento).filter(filtrarEstadoFisico).filter(filtrarDefensa).filter(filtrarMentalidad).filter(filtrarNivel).filter(filtrarCategoria);

    if (resultado.length) {
        infoJugadores(resultado)
    }
    
    else {
        noHayJugadores()
    }
}

filtrarJugador();









