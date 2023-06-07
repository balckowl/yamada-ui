import { RowData } from '@tanstack/react-table'
import {
  ui,
  useMultiComponentStyle,
  omitThemeProps,
  ComponentArgs,
  CSSUIObject,
} from '@yamada-ui/core'
import { TableStyleProvider, TableCaption } from '@yamada-ui/native-table'
import { cx, pickChildren, getValidChildren, omitObject } from '@yamada-ui/utils'
import { ForwardedRef, forwardRef, Ref } from 'react'
import { Tbody, TableBodyProps } from './tbody'
import { Tfoot, TableFootProps } from './tfoot'
import { Thead, TableHeadProps } from './thead'
import { TableContext, TableProvider, useTable, UseTableProps } from './use-table'

type TableOptions = {
  layout?: CSSUIObject['tableLayout']
  highlightOnSelected?: boolean
  highlightOnHover?: boolean
  withBorder?: boolean
  withColumnBorders?: boolean
  withFooter?: boolean
  theadProps?: TableHeadProps
  tbodyProps?: TableBodyProps
  tfootProps?: TableFootProps
}

type PagingTableProps =
  | 'enablePagenation'
  | 'pageIndex'
  | 'defaultPageIndex'
  | 'onChangePageIndex'
  | 'pageSize'
  | 'defaultPageSize'
  | 'onChangePageSize'
  | 'pageSizeList'
  | 'pageCount'
  | 'manualPagination'
  | 'autoResetPageIndex'

export type TableProps<Y extends RowData> = Omit<UseTableProps<Y>, PagingTableProps> & TableOptions

export const Table = forwardRef(
  <Y extends RowData>(
    { colorScheme, highlightOnSelected = true, ...props }: TableProps<Y>,
    ref: ForwardedRef<HTMLTableElement>,
  ) => {
    const [styles, mergedProps] = useMultiComponentStyle('Table', {
      colorScheme,
      highlightOnSelected,
      ...props,
    })
    const {
      className,
      withFooter = false,
      theadProps,
      tbodyProps,
      tfootProps,
      checkboxProps,
      layout,
      children,
      ...computedProps
    } = omitThemeProps(mergedProps)

    const { getTableProps, ...rest } = useTable<Y>({
      ...omitObject(computedProps, ['highlightOnSelected']),
      checkboxProps: { colorScheme, ...checkboxProps },
    })

    const css: CSSUIObject = {
      w: '100%',
      tableLayout: layout,
      ...styles.table,
    }

    const validChildren = getValidChildren(children)
    const tableCaptionChildren = pickChildren(validChildren, TableCaption)

    return (
      <TableStyleProvider value={styles}>
        <TableProvider value={{ ...rest } as TableContext}>
          <ui.table className={cx('ui-table', className)} __css={css} {...getTableProps({}, ref)}>
            <Thead {...theadProps} />
            <Tbody {...tbodyProps} />
            {withFooter ? <Tfoot {...tfootProps} /> : null}
            {tableCaptionChildren}
          </ui.table>
        </TableProvider>
      </TableStyleProvider>
    )
  },
) as {
  <Y extends RowData>(props: TableProps<Y> & { ref?: Ref<HTMLDivElement> }): JSX.Element
} & ComponentArgs

Table.displayName = 'Table'