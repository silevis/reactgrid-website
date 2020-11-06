import { INavLink } from 'office-ui-fabric-react/lib/Nav';
import {
  CryptocurrencyMarketSample,
  AdvancedContextMenuHandlingSample,
  SimpleContextMenuHandlingSample,
  StickyPanesSample,
  ColumnsAndRowsReorderSample,
  ColumnResizingSample,
  LimitedHeightByParentSample,
  NotLimitedHeightByParentSample,
  GroupIdSample,
} from './../../index';

export interface ISampleNavLink extends INavLink {
  component?: any;
}

export const navLinks: ISampleNavLink[] = [
  {
    name: 'Group Id Sample',
    key: '/Group IdSample',
    url: '/Group IdSample',
    component: GroupIdSample
  },
  {
    name: 'Cryptocurrency Market Sample',
    key: '/CryptocurrencyMarketSample',
    url: '/CryptocurrencyMarketSample',
    component: CryptocurrencyMarketSample
  },
  {
    name: 'Advanced ContextMenu Handling',
    key: '/AdvancedContextMenuHandlingSample',
    url: '/AdvancedContextMenuHandlingSample',
    component: AdvancedContextMenuHandlingSample
  },
  {
    name: 'Simple ContextMenu Handling',
    key: '/SimpleContextMenuHandlingSample',
    url: '/SimpleContextMenuHandlingSample',
    component: SimpleContextMenuHandlingSample
  },
  {
    name: 'Sticky Panes Sample',
    key: '/StickyPanesSample',
    url: '/StickyPanesSample',
    component: StickyPanesSample
  },
  {
    name: 'Columns And Row Reorder Sample',
    key: '/ColumnsAndRowReorderSample',
    url: '/ColumnsAndRowReorderSample',
    component: ColumnsAndRowsReorderSample
  },
  {
    name: 'Column Resize Sample',
    key: '/ColumnResizingSample',
    url: '/ColumnResizingSample',
    component: ColumnResizingSample
  },
  {
    name: 'Limited Height By Parent Sample',
    key: '/LimitedHeightByParentSample',
    url: '/LimitedHeightByParentSample',
    component: LimitedHeightByParentSample
  },
  {
    name: 'Not Limited Height By Parent Sample',
    key: '/NotLimitedHeightByParentSample',
    url: '/NotLimitedHeightByParentSample',
    component: NotLimitedHeightByParentSample
  },
];