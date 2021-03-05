import React from 'react';
import { Link } from "gatsby";

interface ExampleInfo {
    title: string;
    icon: string;
    urlParam?: string;
    enabled: boolean;
    className: string;
    component: string;
    description: {
        header: string;
        content: React.ReactNode;
    }[] | string;
}

const ExternalLink: React.FC<{ to: string; title?: string }> = ({ to, title = 'docs', children }) => {
    return (
        <Link to={to}>
            {children || <><span className='text-nowrap'>{title} <i className="fas fa-external-link-alt fa-xs"></i></span></>}
        </Link>
    )
}

export const samplesData: ExampleInfo[] = [
    {
        title: 'Budget planner',
        urlParam: 'budget-planner',
        icon: 'fas fa-search-dollar fa-3x',
        enabled: true,
        description: [
            {
                header: `Capabilities:`,
                content: [
                    `This budget planner example shows the possibility of calculating values of all aggregation fields 
                    in a reactive way in two axes - for organization or project for some time. See the available functionality:`,
                    `Only white cells are able to change their value (all the aggregation cells will be updated accordingly)`,
                    `A new value entered for a certain quarter on a given node will be proportionally distributed into the months within this quarter`,
                    `Reorder a single row by drag & drop action onto a selected row (you can't reorder multiple rows)`,
                    `Fold/unfold unit node with <code><kbd>SPACE</kbd></code> key (node cell has to be focused) or click on the chevron icon`,
                    `Fold/unfold year and/or quarter columns by clicking chevron icon in the top row`,
                    `Add a new row by clicking 'Add child row' in the context menu option on a selected row or delete it via 'Remove row' option`,
                ]
            },
            {
                header: `Core features (applied):`,
                content: [
                    <>Vertical and horizontal grouping (see the <ExternalLink to={'/docs/3.1/4-cell-templates/5-ChevronCell/'} />)</>,
                    <>Custom cell templates (e.g. non editable number cell, see the <ExternalLink to={'/docs/3.1/5-create-your-own-cell-template/'} />)</>,
                    <>Context menu (adding and removing row, see the <ExternalLink to={'/docs/3.1/2-implementing-core-features/5-context-menu/'} />)</>,
                    <>Sticky row and column (see the <ExternalLink to={'/docs/3.1/2-implementing-core-features/4-sticky/'} />)</>,
                    <>Row reordering (see the <ExternalLink to={'/docs/3.1/2-implementing-core-features/3-column-and-row-reordering/'} />)</>,
                    <>Range, column and row selection (+ multi selection, see the <ExternalLink to={'/docs/3.1/2-implementing-core-features/4a-selections/'} />)</>,
                    `Fill handle`,
                    `Copy/cut/paste`,
                    `Touch capability`,
                    `SASS custom styling`,
                ]
            }
        ],
        className: 'bp-sample',
        component: 'BPSample'
    },
    {
        title: 'Multi user',
        icon: 'fas fa-border-all fa-3x',
        enabled: true,
        urlParam: 'multi-user',
        description: [
            {
                header: `Capabilities:`,
                content: [
                    `Includes most features of ReactGrid`,
                    `Presents multiple data changes in real time `,
                    `Provides additional actions in context menu (removing rows or columns)`,
                ]
            },
            {
                header: `Core features (applied):`,
                content: [
                    <>Highlights (see the <ExternalLink to={'/docs/3.1/4-cell-templates/5-GroupCell/'} />)</>,
                    <>Custom cell templates (e.g. flag icon, see the <ExternalLink to={'/docs/3.1/5-create-your-own-cell-template/'} />)</>,
                    <>Sticky row and column (see the <ExternalLink to={'/docs/3.1/2-implementing-core-features/4-sticky/'} />)</>,
                    <>Column resize (see the <ExternalLink to={'/docs/3.1/2-implementing-core-features/2-column-resizing/'} />)</>,
                    <>Row and column reordering (see the&nbsp;<ExternalLink to={'/docs/3.1/2-implementing-core-features/3-column-and-row-reordering/'} />)</>,
                    <>Range, column and row selection (+ multi selection, see the&nbsp;<ExternalLink to={'/docs/3.1/2-implementing-core-features/4a-selections/'} />)</>,
                    <>Context menu (see the <ExternalLink to={'/docs/3.1/2-implementing-core-features/5-context-menu/'} />)</>,
                    `Fill handle`,
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
        title: 'Athletes\' exercises',
        icon: 'fas fa-border-all fa-3x',
        enabled: true,
        urlParam: 'athletes-exercises',
        description: [
            {
                header: `Capabilities:`,
                content: [
                    `Implements most ReactGrid features in a simple way`,
                    `Calculates the athlete's points in the real time`,
                    `Built-in Chevron Cell allows you to collapse the excercise's category
                        by pressing on the chevron on pressing space`,
                ]
            },
            {
                header: `Core features (applied):`,
                content: [
                    <>Sticky row and column (see the <ExternalLink to={'/docs/3.1/2-implementing-core-features/4-sticky/'} />)</>,
                    <>Range selection (+ multi selection, see the&nbsp;<ExternalLink to={'/docs/3.1/2-implementing-core-features/4a-selections/'} />)</>,
                    <>Sticky row and column (see the <ExternalLink to={'/docs/3.1/2-implementing-core-features/4-sticky/'} />)</>,
                    <>Custom cell templates (see the <ExternalLink to={'/docs/3.1/5-create-your-own-cell-template/'} />)</>,
                    `Copy/cut/paste`,
                    `Touch capability`,
                    `SASS custom styling`,
                ]
            }
        ],
        className: 'exercises-sample',
        component: 'ExcercisesDataSample'
    },
    {
        title: 'Customization',
        icon: 'fas fa-border-all fa-3x',
        enabled: true,
        urlParam: 'customization',
        description: [
            {
                header: `Capabilities:`,
                content: [
                    `Customization sample ReactGrid implementation allows user to add new records by editing the last blank row`,
                    `It is possible to render every row in various ways, ReactGrid empowers the user to fully configure each cell independently`,
                    `The simple configurator shows how easily you can style your table`,
                    `Sample contains custom written dropdown cell`,
                    `The header row and the blank row are sticky, so you can always see the title of the column and you're able to add new records`,
                ]
            },
            {
                header: `Core features (applied):`,
                content: [
                    <>Range selection (+ multi selection, see the&nbsp;<ExternalLink to={'/docs/3.1/2-implementing-core-features/4a-selections/'} />)</>,
                    <>Sticky row and column (see the <ExternalLink to={'/docs/3.1/2-implementing-core-features/4-sticky/'} />)</>,
                    <>Custom cell templates (see the <ExternalLink to={'/docs/3.1/5-create-your-own-cell-template/'} />)</>,
                    `Copy/cut/paste`,
                    `Touch capability`,
                    `SASS custom styling`,
                ]
            }
        ],
        className: 'workhours-sample',
        component: 'WorkhoursSample'
    },
    {
        title: 'Financial liquidity planner',
        icon: 'fas fa-search-dollar fa-3x',
        urlParam: 'liquidity-planner',
        enabled: true,
        description: [
            {
                header: `Capabilities:`,
                content: [
                    <>This sample app was made for related article on our blog: <ExternalLink to={'/blog/financial-liquidity-planner-with-reactgrid-and-chartjs'} title='open' /></>,
                ]
            },
            {
                header: `Core features (applied):`,
                content: [
                    <>Sticky columns (see the <ExternalLink to={'/docs/3.1/2-implementing-core-features/4-sticky/'} />)</>,
                    <>Range selection (+ multi selection, see the <ExternalLink to={'/docs/3.1/2-implementing-core-features/4a-selections/'} />)</>,
                    `Fill handle`,
                    `Copy/cut/paste`,
                    `Touch capability`,
                    `CSS custom styling`,
                ]
            }
        ],
        className: 'liquidity-planner-app',
        component: 'LiquidityPlanner'
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
