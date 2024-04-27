import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  MoreHorizontal,
  Search,
} from "lucide-react";

import { IconButton } from "./icon-button";
import { Table } from "./Table/table";
import { TableHeader } from "./Table/table-header";
import { TableCell } from "./Table/table-cell";

export function AttendeeList() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-3 items-center ">
        <h1 className="text-2xl font-bold">Participantes</h1>
        <div className="px-3 w-72 py-4 border border-white/10 bg-transparent rounded-lg text-sm flex items-center gap-3">
          <Search className="size-4 text-emerald-300" />
          <input
            type=""
            placeholder="Buscar Participantes..."
            className="bg-transparent flex-1 outline-none h-auto border-0 p-0 text-sm"
          />
        </div>
      </div>
      <Table>
        <thead>
          <tr className="border-b border-white/10">
            <TableHeader
              style={{ width: 48 }}
            >
              <input
                type="checkbox"
                className="size-4 bg-black/20 rounded border border-white/10 ring-0"
              />
            </TableHeader>
            <TableHeader >
              Código
            </TableHeader>
            <TableHeader >
              Participante
            </TableHeader>
            <TableHeader >
              Data de inscrição
            </TableHeader>
            <TableHeader >
              Data do check-in
            </TableHeader>
            <TableHeader

              style={{ width: 64 }}
            ></TableHeader>
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: 8 }).map((_, index) => (
            <tr key={index} className="border-b border-white hover:bg-white/5">
              <TableCell >
                <input
                  type="checkbox"
                  className="size-4 bg-black/20 rounded border border-white/10"
                />
              </TableCell>
              <TableCell >12345</TableCell>
              <TableCell >
                <div className="flex flex-col gap-1">
                  <span className="font-semibold text-white">
                    Gabriel Souza
                  </span>
                  <span>Gabriel@test.com</span>
                </div>
              </TableCell>
              <TableCell >7 dias atrás</TableCell>
              <TableCell >3 dias atrás</TableCell>
              <TableCell >
                {/* <button className="bg-black/20 border border-white/10 rounded-md p-1.5">
                    <MoreHorizontal className="size-4" />
                  </button> */}
                <IconButton
                  transparent={true}
                  className="bg-black/20 border border-white/10 rounded-md p-1.5"
                >
                  <MoreHorizontal className="size-4" />
                </IconButton>
              </TableCell>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <TableCell className="py-3 px-4 text-sm text-zinc-300" colSpan={3}>
              Mostrando 10 de 228 items
            </TableCell>
            <td
              className="py-3 px-4 text-sm text-zinc-300 text-right"
              colSpan={3}
            >
              <div className="flex items-center gap-8 inline-flex">
                <span>página 1 de 23</span>
                <div className="flex gap-1.5">
                  <IconButton className="bg-white/10 border border-white/10 rounded-md p-1.5">
                    <ChevronsLeft className="size-4" />
                  </IconButton>
                  <IconButton className="bg-white/10border border-white/10 rounded-md p-1.5">
                    <ChevronLeft className="size-4" />
                  </IconButton>
                  <IconButton className="bg-white/10 border border-white/10 rounded-md p-1.5">
                    <ChevronRight className="size-4" />
                  </IconButton>
                  <IconButton className="bg-white/10 border border-white/10 rounded-md p-1.5">
                    <ChevronsRight className="size-4" />
                  </IconButton>
                </div>
              </div>
            </td>
          </tr>
        </tfoot>
      </Table>
    </div>
  );
}
