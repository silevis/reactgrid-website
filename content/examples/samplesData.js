export const samplesData = [
    {
        title: 'Data table',
        icon: 'fas fa-border-all fa-3x',
        enabled: true,
        description: [
            {
                header: `Capabilities:`,
                content: [
                    `Enabled most of core features of ReactGrid`,
                    `Presenting multiple data changes in real time`,
                    `Additional actions in context menu (removing rows or columns)`,
                ]
            },
            {
                header: `Applied core features:`,
                content: [
                    `Custom highlights`,
                    `Custom cell templates (e.g. flag icon)`,
                    `Sticky columns and row`,
                    `Column resize`,
                    `Row and column reordering`,
                    `Area, column and row selection (+ multi selection)`,
                    `Fill handle`,
                    `Context menu`,
                    `Copy/cut/paste`,
                    `Touch capability`,
                    `SASS custom styling`,
                ]
            }
        ],
        className: 'datagrid-sample',
        component: 'DatagridSample'
    },
    {
        title: 'Budget planner',
        icon: 'fas fa-search-dollar fa-3x',
        enabled: true,
        description: [
            {
                header: `Capabilities:`,
                content: [
                    `Application of Group cell template that contains informations about single node`,
                    `Toggling node with <code><kbd>SPACE</kbd></code> key or click on chevron`,
                    `Filter by date, group by one of three groups`,
                ]
            },
            {
                header: `Applied core features:`,
                content: [
                    `Grouping`,
                    `Sticky column and row`,
                    `Column resize`,
                    `Area selection`,
                    `Fill handle`,
                    `Copy/cut/paste`,
                    `Touch capability`,
                    `SASS custom styling`,
                ]
            }
        ],
        className: 'datagrid-sample',
        component: 'BudgetPlannerSample'
    },
    {
        title: 'Cryptocurrency Market',
        icon: 'fab fa-bitcoin fa-3x',
        enabled: false,
        description: [
            {
                header: `Capabilities:`,
                content: [
                    `Filling grid with data from 3rd party API`,
                    `Continuosly pooling for changes and presenting them`,
                ]
            },
            {
                header: `Applied core features:`,
                content: [
                    `Freezed first top row`,
                    `Area, column and row selection (+ multi selection)`,
                    `Custom cell template`,
                    `Copy/cut/paste`,
                    `Touch capability`,
                    `SASS styling`,
                ]
            }
        ],
        className: 'cryptocurrency-market-sample',
        component: 'CryptocurrencyMarketSample'
    },
    {
        title: 'Rate cell',
        icon: 'far fa-lightbulb fa-3x',
        enabled: false,
        description: 'Short description of demo content',
        className: 'rate-cell-sample',
        component: 'RateCellSample'
    },
    {
        title: 'Resize columns',
        icon: 'fas fa-arrows-alt-h fa-3x',
        enabled: false,
        description: [
            {
                header: `Capabilities:`,
                content: [
                    `Changing width of column`,
                    `Disabling this feature for each column`,
                    `Handling <code>onColumnResize()</code> event`,
                ]
            },
            {
                header: `Applied core features:`,
                content: [
                    `Column resize`,
                    `Area selection`,
                    `Custom cell templates (rate and flag cell)`,
                    `Copy/cut/paste`,
                    `Touch capability`,
                    `SASS styling`,
                ]
            }
        ],
        className: 'resize-column-sample',
        component: 'ResizeColumnSample'
    },
    {
        title: 'Row/columns reorder',
        icon: 'fas fa-arrows-alt fa-3x',
        enabled: false,
        description: [
            {
                header: `Usage:`,
                content: [
                    `Press <code>ctlr</code> key and select columns/rows`,
                    `Drag column/rows do desired destination`,
                ]
            },
            {
                header: `Applied core features:`,
                content: [
                    `Column reorder`,
                    `Row reorder`,
                    `Area selection`,
                    `Custom cell templates (rate and flag cell)`,
                    `Copy/cut/paste`,
                    `Touch capability`,
                    `SASS styling`,
                ]
            }
        ],
        className: 'column-reorder-sample',
        component: 'ColumnReorderSample'
    },
    {
        title: 'Context menu',
        icon: 'far fa-comment-alt fa-3x',
        enabled: false,
        description: [
            {
                header: `Usage:`,
                content: [
                    `Press <code>ctlr</code> key and select columns/rows`,
                    `Drag column/rows do desired destination`,
                ]
            },
            {
                header: `Applied core features:`,
                content: [
                    `Column reorder`,
                    `Row reorder`,
                    `Area selection`,
                    `Custom cell templates (rate and flag cell)`,
                    `Copy/cut/paste`,
                    `Touch capability`,
                    `SASS styling`,
                ]
            }
        ],
        className: 'context-menu-sample',
        component: 'ContextMenuSample'
    },
    {
        title: 'Group data',
        icon: 'fa fa-stream fa-3x',
        enabled: false,
        description: [
            {
                header: `Capabilities:`,
                content: [
                    `Application of Group cell template that contains informations about single node`,
                    `Toggling node with <code><kbd>SPACE</kbd></code> key or click on chevron`,
                ]
            },
            {
                header: `Applied core features:`,
                content: [
                    `Freezed top row and left column`,
                    `Area, column and row selection (+ multi selection)`,
                    `Copy/cut/paste`,
                    `Touch capability`,
                    `SASS styling`,
                ]
            }
        ],
        className: 'group-cell-sample',
        component: 'GroupCellSample'
    },
];