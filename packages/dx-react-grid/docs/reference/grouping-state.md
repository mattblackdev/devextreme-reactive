# GroupingState Plugin Reference

A plugin that manages the grouping state. It controls by which column rows are grouped, and stores information about expanded/collapsed groups.

## User Reference

### Dependencies

none

### Properties

Name | Type | Default | Description
-----|------|---------|------------
grouping | Array&lt;[Grouping](#grouping)&gt; | | Specifies columns to group by.
defaultGrouping | Array&lt;[Grouping](#grouping)&gt; | | Specifies initial grouping in the uncontrolled mode.
onGroupingChange | (grouping: Array&lt;[Grouping](#grouping)&gt;) => void | | Handles grouping changes.
expandedGroups | Array&lt;[GroupKey](#group-key)&gt; | | Specifies expanded groups.
defaultExpandedGroups | Array&lt;[GroupKey](#group-key)&gt; | | Specifies initially expanded groups in the uncontrolled mode.
onExpandedGroupsChange | (expandedGroups: Array&lt;[GroupKey](#group-key)&gt;) => void | | Handles expanded group changes.

## Interfaces

### Grouping

Describes applied grouping

A value with the following shape:

Field | Type | Description
------|------|------------
columnName | string | Specifies a column name to group by.

### <a name="draft-grouping"></a>DraftGrouping

Describes grouping options used for preview

A value with the following shape:

Field | Type | Description
------|------|------------
columnName | string | Specifies the name of the column by which the data is grouped.
draft? | boolean | Indicates that the column should be displayed as grouped.

### <a name="group-key"></a>GroupKey

Describes a group that can be nested in another one

A string value that consists of values by which rows are grouped, separated by the `|` character. For example, the expanded group 'Male' is described as `Male` and 'Male'/'Audi' as `Male|Audi` and so on.

## Plugin Developer Reference

### Imports

Name | Plugin | Type | Description
-----|--------|------|------------
columns | Getter | Array&lt;[Column](grid.md#column)&gt; | The grid columns.

### Exports

Name | Plugin | Type | Description
-----|--------|------|------------
grouping | Getter | Array&lt;[Grouping](#grouping)&gt; | The current grouping state.
draftGrouping | Getter | Array&lt;[DraftGrouping](#draft-grouping)&gt; | Grouping options used for preview.
expandedGroups | Getter | Set&lt;[GroupKey](#group-key)&gt; | Expanded groups.
groupByColumn | Action | ({ columnName: string, groupIndex?: number }) => void | Groups by the specified column or cancels grouping. If `groupIndex` is omitted, the group is added to the last position.
toggleGroupExpanded | Action | ({ groupKey: [GroupKey](#group-key) }) => void | Toggles the expanded group state.
draftGroupingChange | Action | ({ columnName: string, groupIndex?: number }) => void | Sets the groupingChange state to the specified value.
cancelGroupingChange | Action | () => void | Resets the groupingChange state.
