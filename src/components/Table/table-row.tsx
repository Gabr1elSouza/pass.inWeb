import { ComponentProps } from "react";

interface TableHeaderProps extends ComponentProps<"tr"> {}

export function TableRow(props: TableHeaderProps) {
  return <tr className="border-b border-white hover:bg-white/5" {...props} />;
}
