export class Cours{
  id:number | undefined;
  sous_titre:string| undefined;
  explication:string| undefined;
  fichier !:File;
  contenu:string| undefined;
}
