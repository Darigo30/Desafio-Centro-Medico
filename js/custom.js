// Radiologia

let radiologia = [
    {
        hora: "11:00",
        especialista: "IGNACIO SCHULZ",
        paciente: "FRANCISCA ROJAS",
        rut: "9878782-1",
        prevision: "FONASA"
    },
    {
        hora: "11:30",
        especialista: "FEDERICO SUBERCASEAUX",
        paciente: "PAMELA ESTRADA",
        rut: "15345241-3",
        prevision: "ISAPRE"
    },
    {
        hora: "15:00",
        especialista: "FERNANDO WURTHZ",
        paciente: "ARMANDO LUNA",
        rut: "16445345-9",
        prevision: "ISAPRE"
    },
    {
        hora: "15:30",
        especialista: "ANA MARIA GODOY",
        paciente: "MANUEL GODOY",
        rut: "17666419-0",
        prevision: "FONASA"
    },
    {
        hora: "16:00",
        especialista: "PATRICIA SUAZO",
        paciente: "RAMON ULLOA",
        rut: "14989389-K",
        prevision: "FONASA"
    }
];

// Traumatologia

let traumatologia = [
    {
        hora: "8:00",
        especialista: "MARIA PAZ ALTUZARRA",
        paciente: "PAULA SANCHEZ",
        rut: "15554774-5",
        prevision: "FONASA"
    },
    {
        hora: "10:00",
        especialista: "RAUL ARAYA",
        paciente: "ANGÉLICA NAVAS",
        rut: "15444147-9",
        prevision: "ISAPRE"
    },
    {
        hora: "10:30",
        especialista: "MARIA ARRIAGADA",
        paciente: "ANA KLAPP",
        rut: "17879423-9",
        prevision: "ISAPRE"
    },
    {
        hora: "11:00",
        especialista: "ALEJANDRO BADILLA",
        paciente: "FELIPE MARDONES",
        rut: "1547423-6",
        prevision: "ISAPRE"
    },
    {
        hora: "11:30",
        especialista: "CECILIA BUDNIK",
        paciente: "DIEGO MARRE",
        rut: "16554741-K",
        prevision: "FONASA"
    },
    {
        hora: "12:00",
        especialista: "ARTURO CAVAGNARO",
        paciente: "CECILIA MENDEZ",
        rut: "9747535-8",
        prevision: "ISAPRE"
    },
    {
        hora: "12:30",
        especialista: "ANDRES KANACRI",
        paciente: "MARCIAL SUAZO",
        rut: "11254785-5",
        prevision: "ISAPRE"
    }
]

// Dental

let dental = [
    {
        hora: "8:30",
        especialista: "ANDREA ZUÑIGA",
        paciente: "MARCELA RETAMAL",
        rut: "11123425-6",
        prevision: "ISAPRE"
    },
    {
        hora: "11:00",
        especialista: "MARIA PIA ZAÑARTU",
        paciente: "ANGEL MUÑOZ",
        rut: "9878789-2",
        prevision: "ISAPRE"
    },
    {
        hora: "11:30",
        especialista: "SCARLETT WITTING",
        paciente: "MARIO KAST",
        rut: "7998789-5",
        prevision: "FONASA"
    },
    {
        hora: "13:00",
        especialista: "FRANCISCO VON TEUBER",
        paciente: "KARIN FERNANDEZ",
        rut: "18887662-K",
        prevision: "FONASA"
    },
    {
        hora: "13:30",
        especialista: "EDUARDO VIÑUELA",
        paciente: "HUGO SANCHEZ",
        rut: "17665461-4",
        prevision: "FONASA"
    },
    {
        hora: "14:00",
        especialista: "RAQUEL VILLASECA",
        paciente: "ANA SEPULVEDA",
        rut: "14441281-0",
        prevision: "ISAPRE"
    }
  ]

  //Radiología (cantidad, primer y último paciente)

let canti = document.getElementById("canti");
    canti.innerHTML = radiologia.length;

let primero = document.getElementById("primero");
    primero.innerHTML = `${radiologia[0].hora} - ${radiologia[0].paciente} -  ${radiologia[0].rut} - ${radiologia[0].prevision }`;

let ultimo = document.getElementById("ultimo");
    ultimo.innerHTML = `${radiologia[radiologia.length - 1].hora} - ${radiologia[radiologia.length - 1].paciente} - ${radiologia[radiologia.length - 1].rut} - ${radiologia[radiologia.length - 1].prevision}`;

//Traumatología (cantidad, primer y último paciente)

let cantitrau = document.getElementById("cantitrau");
cantitrau.innerHTML = traumatologia.length;

let primerotrau = document.getElementById("primerotrau");
    primerotrau.innerHTML = `${traumatologia[0].hora} - ${traumatologia[0].paciente} - ${traumatologia[0].rut} - ${traumatologia[0].prevision }`;

let ultimotrau = document.getElementById("ultimotrau");
    ultimotrau.innerHTML = `${traumatologia[traumatologia.length - 1].hora} - ${traumatologia[traumatologia.length - 1].paciente} - ${traumatologia[traumatologia.length - 1].rut} - ${traumatologia[traumatologia.length - 1].prevision}`;

//Dental (cantidad, primer y último paciente)

let cantiden = document.getElementById("cantiden");
cantiden.innerHTML = dental.length;

let primeroden = document.getElementById("primeroden");
    primeroden.innerHTML = `${dental[0].hora} - ${dental[0].paciente} - ${dental[0].rut}  - ${dental[0].prevision }`;

let ultimoden = document.getElementById("ultimoden");
    ultimoden.innerHTML = `${dental[dental.length - 1].hora} - ${dental[dental.length - 1].paciente} - ${dental[dental.length - 1].rut} - ${dental[dental.length - 1].prevision}`;
