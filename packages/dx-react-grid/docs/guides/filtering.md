# React Grid Data Filtering

The Grid component supports filtering data by a column value programmatically or using the value an end-user types in the corresponding Filter Row editor. The filtering state management, Filter Row rendering, and filtering logic are implemented in the related plugins.

## Related Plugins

The following plugins implement filtering features:

- [FilteringState](../reference/filtering-state.md) - controls the filtering state
- [LocalFiltering](../reference/local-filtering.md) - performs local data filtering
- [TableFilterRow](../reference/table-filter-row.md) - renders a filter row

Note that [plugin order](./plugin-overview.md#plugin-order) is important.

## Setting up Local Filtering

Import the plugins listed above to set up a Grid with basic filtering.

### Uncontrolled Mode

In the [uncontrolled mode](controlled-and-uncontrolled-modes.md), specify the initial filtering conditions in the `FilteringState` plugin's `defaultFilters` property.

.embedded-demo(filtering/local-filter-row)

### Controlled Mode

In the [controlled mode](controlled-and-uncontrolled-modes.md), pass the filtering options to the `FilteringState` plugin's `filters` property and handle the `onFiltersChange` event to control the filtering state externally.

.embedded-demo(filtering/local-filtering-controlled)

### <a name="using-custom-filtering-algorithm"></a>Using Custom Filtering Algorithms

You can also specify a filtering predicate using the `LocalFiltering` plugin's `getColumnPredicate` property to implement a custom filtering logic.

.embedded-demo(filtering/custom-filtering-algorithm)

## Setting up Remote Filtering

It is possible to perform filtering remotely by handling filtering state changes, generating a request, and sending it to the server.

Filtering options are updated once an end-user modifies a text within a Filter Row editor or other filtering control. Handle filtering option changes using the `FilteringState` plugin's `onFiltersChange` event and request data from the server using the applied filtering options. Once the filtered data is received from the server, pass it to the `Grid` component's `rows` property.

Note that in the case of remote filtering, you do not need to use the `LocalFiltering` plugin.

.embedded-demo(filtering/remote-filtering)

## Customizing Filter Row Appearance

Pass a function that renders a custom component to the `TableFilterRow` plugin's `filterCellTemplate` property to substitute the built-in filter row editors. In this case, you should also delegate the component's state management to the `TableFilterRow` plugin assigning the function's `filter` and `setFilter` arguments to the appropriate component's properties.

.embedded-demo(filtering/custom-filter-row)

## Using Filtering with Other Data Processing Plugins

When you use filtering features with paging or grouping, take a note of the order in which the plugins appear in the Grid's container. You need to choose whether to paginate filtered rows or filter the current page. In the first case, put the `LocalFiltering` plugin before the `LocalPaging` one. Otherwise, inverse the plugins' order.
