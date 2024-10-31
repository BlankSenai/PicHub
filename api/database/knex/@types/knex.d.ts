import { IColecao, IImagem, ISuporte, IUsuario, IUsuarioColecao } from "../../models"

declare module 'knex/types/tables' {
    interface Tables {
      usuario: IUsuario
      colecao: IColecao 
      imagem: IImagem
      usuario_colecao: IUsuarioColecao
      suporte: ISuporte
    }
  }
  