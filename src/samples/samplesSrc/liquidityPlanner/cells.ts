import {
  DefaultCellTypes,
  CellStyle,
  NumberCell,
  TextCell
} from "@silevis/reactgrid";

export const emptyTextCell: TextCell = { type: "text", text: "" };

export const textCell = (
  text: string,
  className = "",
  style?: CellStyle
): TextCell => ({ type: "text", text, className, style });

export const numberCell = (
  value: number,
  className = "",
  style?: CellStyle
): NumberCell => ({ type: "number", value, className, style });

export const nonEditable = (cell: DefaultCellTypes): DefaultCellTypes => ({
  ...cell,
  nonEditable: true
});

export const showZero = (cell: NumberCell): NumberCell => ({
  ...cell,
  nanToZero: true,
  hideZero: false
});

export const boldLine = (cell: DefaultCellTypes): DefaultCellTypes => ({
  ...cell,
  style: {
    ...cell.style,
    border: {
      ...cell.style?.border,
      top: {
        width: "2px",
        color: "gray",
        style: "solid"
      }
    }
  }
});

export function monthHeaderCell(month: string): DefaultCellTypes {
  return nonEditable(
    textCell(month, "month-header-cell", {
      background: "#107C41",
      color: "white",
      border: {
        bottom: { style: "none" }
      }
    })
  );
}
