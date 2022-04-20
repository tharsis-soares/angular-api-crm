import { Parcela } from "./IParcelas"

export interface Vendas {
  nu_venda: string
  nm_cliente: string
  nu_documento: string
  dt_venda: string
  nu_referencia: string
  tipo: string
  tipo_venda: string
  situacao: string
  nu_parcelas: number
  vl_venda: string
  parcelas: Parcela[]
}

