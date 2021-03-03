import { Row } from "@silevis/reactgrid";
import {
  CashOutflow,
  CashInflow,
  InputVariables,
  MonthlyValues,
  OutputVariables
} from "./interfaces";
import { months } from "./helpers";
import {
  emptyTextCell,
  nonEditable,
  textCell,
  monthHeaderCell,
  boldLine,
  numberCell,
  showZero
} from "./cells";

export const CASHBOXBANK_ROW_ID = "cashboxBank";
export const CREDITLINE_ROW_ID = "creditLine";
export const CREDITLINEOVERDRAFT_ROW_ID = "creditLineOverdraft";
export const HEADER_ROW_ID = "header";
export const LIQUIDFUNDS_ROW_ID = "liquidFunds";
export const MONTHSTOTAL_ROW_ID = "monthsTotal";
export const CUMULATIVE_ROW_ID = "cumulative";

function sumGroupValues(values: MonthlyValues): number {
  return values.reduce(
    (prev, curr) => (isNaN(prev) ? 0 : prev) + (isNaN(curr) ? 0 : curr)
  );
}

function getHeaderRow(): Row {
  return {
    rowId: HEADER_ROW_ID,
    height: 35,
    cells: [
      nonEditable(emptyTextCell),
      ...months().map((_, idx) => nonEditable(monthHeaderCell(`${idx + 1}`))),
      nonEditable(textCell("Totals", "month-header-cell"))
    ]
  };
}

function getLiquidFundsRow(title: string): Row {
  return {
    rowId: LIQUIDFUNDS_ROW_ID,
    height: 35,
    cells: [
      boldLine(nonEditable(textCell(title, "font-weight-bold"))),
      ...months().map(() => boldLine(nonEditable(emptyTextCell))),
      boldLine(nonEditable(emptyTextCell))
    ]
  };
}

function getCashboxBankRow(title: string, cashboxBank: MonthlyValues): Row {
  return {
    rowId: CASHBOXBANK_ROW_ID,
    cells: [
      nonEditable(textCell(title)),
      ...months().map((_, idx) =>
        idx === 0
          ? numberCell(cashboxBank[idx])
          : nonEditable(showZero(numberCell(cashboxBank[idx])))
      ),
      nonEditable(emptyTextCell)
    ]
  };
}

function getMonthsTotalRow(
  title: string,
  monthlyInflowOuflowDiffs: MonthlyValues,
  yearlyGroupsDiff: number
): Row {
  const monthsTotalCell = (value: number) =>
    boldLine(nonEditable(showZero(numberCell(value, "bg-blue"))));
  return {
    rowId: MONTHSTOTAL_ROW_ID,
    height: 35,
    cells: [
      boldLine(nonEditable(textCell(title, "bg-blue font-weight-bold"))),
      ...months().map((_, idx) =>
        monthsTotalCell(monthlyInflowOuflowDiffs[idx])
      ),
      boldLine(nonEditable(showZero(numberCell(yearlyGroupsDiff, "bg-blue"))))
    ]
  };
}

function getCumulativeRow(
  title: string,
  cumulativeTotals: MonthlyValues,
  yearlyInflowOuflowDiff: number
): Row {
  return {
    rowId: CUMULATIVE_ROW_ID,
    height: 35,
    cells: [
      boldLine(nonEditable(textCell(title, "bg-blue font-weight-bold"))),
      ...months().map((_, idx) =>
        boldLine(
          nonEditable(showZero(numberCell(cumulativeTotals[idx], "bg-blue")))
        )
      ),
      boldLine(
        nonEditable(showZero(numberCell(yearlyInflowOuflowDiff, "bg-blue")))
      )
    ]
  };
}

function getGroupRows(
  title: string,
  summaryTitle: string,
  groups: (CashInflow | CashOutflow)[],
  monthlyGroupTotals: MonthlyValues,
  yearlyGroupTotal: number
): Row[] {
  return [
    {
      rowId: `${title}Header`,
      height: 35,
      cells: [
        boldLine(nonEditable(textCell(title, "font-weight-bold"))),
        ...months().map((_) => boldLine(nonEditable(emptyTextCell))),
        boldLine(nonEditable(emptyTextCell))
      ]
    },
    ...groups.map<Row>(({ title, values }) => ({
      rowId: title,
      cells: [
        nonEditable(textCell(title)),
        ...values.map((_, idx) => numberCell(values[idx])),
        nonEditable(showZero(numberCell(sumGroupValues(values))))
      ]
    })),
    {
      rowId: `${title}Summary`,
      cells: [
        nonEditable(textCell(summaryTitle)),
        ...months().map((_, idx) =>
          nonEditable(showZero(numberCell(monthlyGroupTotals[idx])))
        ),
        nonEditable(showZero(numberCell(yearlyGroupTotal)))
      ]
    }
  ];
}

export function getCreditLineRows(
  cumulativeTotals: MonthlyValues,
  yearlyInflowOuflowDiff: number,
  creditLine: number
): Row[] {
  const yearlyOverdraft =
    -yearlyInflowOuflowDiff - (isNaN(creditLine) ? 0 : creditLine);
  return [
    {
      rowId: CREDITLINE_ROW_ID,
      cells: [
        nonEditable(textCell("Credit line")),
        ...months().map((_, idx) =>
          idx === 0
            ? numberCell(creditLine)
            : nonEditable(showZero(numberCell(creditLine)))
        ),
        nonEditable(showZero(numberCell(creditLine)))
      ]
    },
    {
      rowId: CREDITLINEOVERDRAFT_ROW_ID,
      height: 35,
      cells: [
        nonEditable(textCell("V. Credit Line Overdraft", "font-weight-bold")),
        ...months().map((_, idx) => {
          const overdraft =
            -cumulativeTotals[idx] - (isNaN(creditLine) ? 0 : creditLine);
          return nonEditable(
            numberCell(
              overdraft > 0 ? overdraft : NaN,
              overdraft > 0 ? "text-red" : ""
            )
          );
        }),
        nonEditable(
          numberCell(yearlyOverdraft > 0 ? yearlyOverdraft : NaN, "text-red")
        )
      ]
    }
  ];
}

export function getRows({
  cashInflow,
  cashOutflow,
  cashboxBank,
  monthlyInflowTotals,
  monthlyOutflowTotals,
  yearlyInflowOuflowDiff,
  yearlyInflowTotal,
  yearlyOutflowTotal,
  monthlyInflowOuflowDiffs,
  cumulativeTotals,
  // openingBalance,
  creditLine
}: InputVariables & OutputVariables): Row[] {
  return [
    getHeaderRow(),
    getLiquidFundsRow("I. Liquid funds"),
    getCashboxBankRow("Cashbox/bank", cashboxBank),
    ...getGroupRows(
      "II. Inflow",
      "Cash in (total)",
      cashInflow,
      monthlyInflowTotals,
      yearlyInflowTotal
    ),
    ...getGroupRows(
      "III. Outflow",
      "Cash out (total)",
      cashOutflow,
      monthlyOutflowTotals,
      yearlyOutflowTotal
    ),
    getMonthsTotalRow(
      "Total",
      monthlyInflowOuflowDiffs,
      yearlyInflowOuflowDiff
    ),
    getCumulativeRow(
      "IV. Cumulative",
      cumulativeTotals,
      yearlyInflowOuflowDiff
    ),
    ...getCreditLineRows(cumulativeTotals, yearlyInflowOuflowDiff, creditLine)
  ];
}
