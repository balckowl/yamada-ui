import type { HTMLUIProps, ThemeProps } from "@yamada-ui/core"
import {
  ui,
  forwardRef,
  useMultiComponentStyle,
  omitThemeProps,
} from "@yamada-ui/core"
import { cx } from "@yamada-ui/utils"
import { Fragment, useMemo } from "react"
import {
  CartesianGrid,
  Legend,
  AreaChart as ReChartsAreaChart,
  Area,
  ReferenceLine,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts"
import { AreaGradient } from "./area-chart-gradient"
import { AreaSplit } from "./area-chart-split"
import { ChartLegend } from "./chart-legend"
import { ChartTooltip } from "./chart-tooltip"
import type { UseAreaChartOptions } from "./use-area-chart"
import { useAreaChart } from "./use-area-chart"
import type { UseChartProps } from "./use-chart"
import { ChartProvider, useChart } from "./use-chart"
import type { UseChartAxisOptions } from "./use-chart-axis"
import { useChartAxis } from "./use-chart-axis"
import type { UseChartGridOptions } from "./use-chart-grid"
import { useChartGrid } from "./use-chart-grid"
import type { UseChartLegendProps } from "./use-chart-legend"
import { useChartLegend } from "./use-chart-legend"
import type { UseChartReferenceLineOptions } from "./use-chart-reference-line"
import { useChartReferenceLine } from "./use-chart-reference-line"
import type { UseChartTooltipProps } from "./use-chart-tooltip"
import { useChartTooltip } from "./use-chart-tooltip"

type AreaChartOptions = {
  /**
   * If `true`, tooltip is visible.
   *
   * @default true
   */
  withTooltip?: boolean
  /**
   * If `true`, legend is visible.
   *
   * @default false
   */
  withLegend?: boolean
}

export type AreaChartProps = HTMLUIProps<"div"> &
  ThemeProps<"AreaChart"> &
  AreaChartOptions &
  UseAreaChartOptions &
  UseChartProps &
  UseChartAxisOptions &
  UseChartReferenceLineOptions &
  UseChartGridOptions &
  UseChartTooltipProps &
  UseChartLegendProps

export const AreaChart = forwardRef<AreaChartProps, "div">((props, ref) => {
  const [styles, mergedProps] = useMultiComponentStyle("AreaChart", props)
  const {
    className,
    series,
    dataKey,
    layoutType,
    tickLine,
    gridAxis,
    withXAxis,
    withYAxis,
    xAxisProps,
    yAxisProps,
    type = "default",
    withTooltip = true,
    withLegend = false,
    referenceLineProps = [],
    containerProps,
    unit,
    gridProps,
    strokeDasharray,
    valueFormatter,
    tooltipProps,
    tooltipAnimationDuration,
    legendProps,
    data,
    areaChartProps,
    activeDotProps,
    dimAreaProps,
    dotProps,
    dimDotProps,
    withGradient,
    withDots,
    withActiveDots,
    curveType,
    strokeWidth,
    connectNulls,
    fillOpacity,
    splitColors,
    splitOffset,
    ...rest
  } = omitThemeProps(mergedProps)

  const {
    getAreaChartProps,
    getAreaSplitProps,
    getAreaProps,
    getAreaGradientProps,
    areaVars,
    setHighlightedArea,
  } = useAreaChart({
    layoutType,
    type,
    series,
    referenceLineProps,
    data,
    areaChartProps,
    activeDotProps,
    dimAreaProps,
    dotProps,
    dimDotProps,
    withGradient,
    withDots,
    withActiveDots,
    curveType,
    strokeWidth,
    connectNulls,
    fillOpacity,
    splitColors,
    splitOffset,
    styles,
  })
  const { getContainerProps } = useChart({ containerProps })
  const { getXAxisProps, getYAxisProps } = useChartAxis({
    dataKey,
    type,
    layoutType,
    tickLine,
    gridAxis,
    withXAxis,
    withYAxis,
    xAxisProps,
    yAxisProps,
    unit,
    valueFormatter,
    styles,
  })
  const { getReferenceLineProps } = useChartReferenceLine({
    referenceLineProps,
    styles,
  })
  const { getGridProps } = useChartGrid({
    gridProps,
    gridAxis,
    strokeDasharray,
    styles,
  })
  const { getTooltipProps } = useChartTooltip({
    tooltipProps,
    tooltipAnimationDuration,
    valueFormatter,
  })
  const { getLegendProps } = useChartLegend({ legendProps })

  const areas = useMemo(
    () =>
      series.map(({ dataKey }, index) => {
        const { id, stroke, ...rest } = getAreaProps({
          index,
          className: "ui-area-chart__area",
        })

        return (
          <Fragment key={`area-${dataKey}`}>
            <defs>
              <AreaGradient {...getAreaGradientProps({ id, color: stroke })} />
            </defs>

            <Area id={id} stroke={stroke} {...rest} />
          </Fragment>
        )
      }),
    [getAreaGradientProps, getAreaProps, series],
  )

  const referenceLinesItems = useMemo(
    () =>
      referenceLineProps.map((_, index) => (
        <ReferenceLine
          key={`referenceLine-${index}`}
          {...getReferenceLineProps({
            index,
            className: "ui-area-chart__reference-line",
          })}
        />
      )),
    [getReferenceLineProps, referenceLineProps],
  )

  return (
    <ChartProvider value={{ styles }}>
      <ui.div
        ref={ref}
        className={cx("ui-area-chart", className)}
        var={areaVars}
        __css={{ maxW: "full", ...styles.container }}
        {...rest}
      >
        <ResponsiveContainer
          {...getContainerProps({ className: "ui-area-chart__container" })}
        >
          <ReChartsAreaChart
            {...getAreaChartProps({ className: "ui-area-chart__chart" })}
          >
            {referenceLinesItems}

            <CartesianGrid
              {...getGridProps({ className: "ui-area-chart__grid" })}
            />
            <XAxis {...getXAxisProps({ className: "ui-area-chart__x-axis" })} />
            <YAxis {...getYAxisProps({ className: "ui-area-chart__y-axis" })} />

            {withLegend ? (
              <Legend
                content={({ payload }) => (
                  <ChartLegend
                    className="ui-area-chart__legend"
                    payload={payload}
                    onHighlight={setHighlightedArea}
                  />
                )}
                {...getLegendProps()}
              />
            ) : null}

            {withTooltip ? (
              <Tooltip
                content={({ label, payload }) => (
                  <ChartTooltip
                    className="ui-area-chart__tooltip"
                    label={label}
                    payload={payload}
                    valueFormatter={valueFormatter}
                    unit={unit}
                  />
                )}
                {...getTooltipProps()}
              />
            ) : null}

            {type === "split" ? (
              <defs>
                <AreaSplit {...getAreaSplitProps()} />
              </defs>
            ) : null}
            {areas}
          </ReChartsAreaChart>
        </ResponsiveContainer>
      </ui.div>
    </ChartProvider>
  )
})
