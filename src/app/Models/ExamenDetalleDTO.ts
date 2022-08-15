export interface RegistroCmrpExamenDetalleDTO{
  id:number,
  idSimuladorCmrpExamen:number,
  idSimuladorCmrpDominio:number,
  idSimuladorCmrpTarea?:number,
  idSimuladorCmrpPregunta:number,
  ejecutado:boolean,
  idSimuladorCmrpPreguntaRespuesta?:number,
  puntaje?:number,
  idAspNetUsers:string,
  usuario:string
}
