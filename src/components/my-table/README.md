# my-table



基于 element-ui 的 table 通用组件。

## Attributtes

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| ----------- | -------------------------------------------- | ------ | ------ | ------ |
| tableEvents | table 事件表 (element-ui table 所有事件) | Object | - | {} |
| tableProps | table 下发属性表 (element-ui table 所有属性) | Object | - | {} |
| data | table 数据 | Array | 必填 | [] |
| columns | table 列配置 | Array | 必填 | [] |
| actions | table 行操作表 | Array | | [] |

### Columns Attributtes

| Column 字段 | 说明 | 类型 | 参数 |
| ------------------ | ---------------------------------------------- | -------------------- | ---------------------------------- |
| hidden | 是否隐藏对应列 | Boolean \| Function | - |
| click | 是否渲染为可点击 （若为真，则渲染一个 a 标签） | Function | row, column, \$index |
| disabled | 配合 click 属性， 是否禁用点击 | Boolean \| Function | 作为函数参数：row, column, \$index |
| formatter | 对该列值进行格式化 | Function | 作为函数参数：row, column, \$index |
| class | 列类 | Object \| Function | 作为函数参数：row, column, \$index |
| enums | 字段枚举表 | Array | - |
| component | 组件（该项可传入一个组件） | VueComponentInstance | - |
| render | 渲染函数（该项可传入一个渲染函数） | Function | h |
| elementColumnProps | element-ui columns 列配置下发的属性 | Object | - |

```js
interface VueComponentInstance { ... }

interface IColumn {
hidden: boolean | function;
click: function;
disabled: boolean | function;
formatter: function;
class: object | function;
enums: array;
component: VueComponentInstance;
render: function;
elementColumnProps: object; // (上述几项是自定义属性)
}

interface IColumns Array<IColumn>
```

### Actions Attributtes

| Action 字段 | 说明 | 类型 | 参数 |
| ----------- | ------------------ | ------------------- | ----------------------------------- |
| auth | 操作权限值 | String | - |
| access | 操作权限值 | String | - |
| hidden | 是否隐藏对应操作列 | Boolean \| Function | 作为函数参数： row, column, \$index |
| label | 操作名称 | Boolean \| Function | 作为函数参数：row |
| disabled | 禁用操作 | Function | row, column, \$index |
| confirm | 是否渲染确认框 | Boolean | 作为函数参数：row, column, \$index |
| click | 操作回调 | Function | row, column, \$index |

```js
interface IAction {
auth：string;
access: string;
hidden: boolean | function;
label: boolean | function;
disabled: function;
confirm: boolean;
click: function;
}

interface IActions Array<IAction>
```

## Methods

| 方法名 | 说明 | 参数 |
| ------ | ---- | ---- |
| - | - | - |

## Events

| 事件名 | 说明 | 参数 |
| ------ | ---- | ---- |
| - | - | - |

## Usage

```html
<my-table
:tableEvents="tableEvents"
:tableProps="tableProps"
:data="data"
:columns="columns"
:actions="actions"
/>
```