import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  MoreHorizontal,
  Search,
} from "lucide-react";

import dayjs from "dayjs";
import "dayjs/locale/pt-br";
import relativeTime from "dayjs/plugin/relativeTime";
import { ChangeEvent, useState } from "react";
import { attendees } from "../data/attendees";
import { Table } from "./Table/table";
import { TableCell } from "./Table/table-cell";
import { TableHeader } from "./Table/table-header";
import { TableRow } from "./Table/table-row";
import { IconButton } from "./icon-button";

dayjs.extend(relativeTime);
dayjs.locale("pt-br");

export function AttendeeList() {
  const [searchInput, setSerchInput] = useState("");
  const [page, setPage] = useState(0);

  function OnSearchInputChanged(event: ChangeEvent<HTMLInputElement>) {
    setSerchInput(event.target.value);
  }

  function GoToNextPage() {
    setPage(page + 1);
  }

  function GoToPreviusPage() {
    setPage(page - 1);
  }

  function StartPage() {
    setPage(0);
  }
  function EndPage() {
    setPage(totalPages);
  }

  const totalPages = Math.ceil(attendees.length / 10);
  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-3 items-center ">
        <h1 className="text-2xl font-bold">Participantes</h1>
        <div className="px-3 w-72 py-1.5 border border-white/10 bg-transparent rounded-lg text-sm flex items-center gap-3">
          <Search className="size-4 text-emerald-300" />
          <input
            type=""
            placeholder="Buscar Participantes..."
            className="bg-transparent flex-1 outline-none h-auto border-0 p-0 text-sm"
            onChange={OnSearchInputChanged}
          />
        </div>
        {searchInput}
      </div>
      <Table>
        <thead>
          <tr className="border-b border-white/10">
            <TableHeader style={{ width: 48 }}>
              <input
                type="checkbox"
                className="size-4 bg-black/20 rounded border border-white/10 ring-0"
              />
            </TableHeader>
            <TableHeader>Código</TableHeader>
            <TableHeader>Participante</TableHeader>
            <TableHeader>Data de inscrição</TableHeader>
            <TableHeader>Data do check-in</TableHeader>
            <TableHeader style={{ width: 64 }}></TableHeader>
          </tr>
        </thead>
        <tbody>
          {attendees.slice(page * 10, (page + 1) * 10).map((attendee) => (
            <TableRow key={attendee.id}>
              <TableCell>
                <input
                  type="checkbox"
                  className="size-4 bg-black/20 rounded border border-white/10"
                />
              </TableCell>
              <TableCell>{attendee.id}</TableCell>
              <TableCell>
                <div className="flex flex-col gap-1">
                  <span className="font-semibold text-white">
                    {attendee.name}
                  </span>
                  <span>{attendee.email}</span>
                </div>
              </TableCell>
              <TableCell>{dayjs().to(attendee.createAt)}</TableCell>
              <TableCell>{dayjs().to(attendee.checkedInAt)}</TableCell>
              <TableCell>
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
            </TableRow>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <TableCell className="py-3 px-4 text-sm text-zinc-300" colSpan={3}>
              Mostrando 10 de {attendees.length} items
            </TableCell>
            <TableCell className="text-right" colSpan={3}>
              <div className="flex items-center gap-8 inline-flex">
                <span>
                  página {page} de {totalPages}
                </span>
                <div className="flex gap-1.5">
                  <IconButton
                    className="bg-white/10 border border-white/10 rounded-md p-1.5"
                    onClick={StartPage}
                    disabled={page === 0}
                  >
                    <ChevronsLeft className="size-4" />
                  </IconButton>
                  <IconButton
                    className="bg-white/10border border-white/10 rounded-md p-1.5"
                    onClick={GoToPreviusPage}
                    disabled={page === 0}
                  >
                    <ChevronLeft className="size-4" />
                  </IconButton>
                  <IconButton
                    className="bg-white/10 border border-white/10 rounded-md p-1.5"
                    onClick={GoToNextPage}
                    disabled={page === totalPages}
                  >
                    <ChevronRight className="size-4" />
                  </IconButton>
                  <IconButton
                    className="bg-white/10 border border-white/10 rounded-md p-1.5"
                    onClick={EndPage}
                    disabled={page === totalPages}
                  >
                    <ChevronsRight className="size-4" />
                  </IconButton>
                </div>
              </div>
            </TableCell>
          </tr>
        </tfoot>
      </Table>
    </div>
  );
}
