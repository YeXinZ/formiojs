/* eslint-disable max-len */
export default [
  {
    weight: 0,
    type: 'textfield',
    input: true,
    key: 'label',
    label: 'zh'===localStorage.getItem('language')?'标签':'Label',
    placeholder: 'Field Label',
    tooltip: 'zh'===localStorage.getItem('language')?'组件旁边的字段的标签':'The label for this field that will appear next to it.',
    validate: {
      required: true
    }
  },
  {
    weight: 10,
    type: 'checkbox',
    label: 'zh'===localStorage.getItem('language')?'隐藏标签':'Hide Label',
    tooltip: 'zh'===localStorage.getItem('language')?'隐藏此组件的标签，在表单生成器中显示，实际应用中不显示':'Hide the label of this component. This allows you to show the label in the form builder, but not when it is rendered.',
    key: 'hideLabel',
    input: true
  },
  {
    type: 'select',
    input: true,
    key: 'labelPosition',
    label: 'zh'===localStorage.getItem('language')?'标签位置':'Label Position',
    tooltip: 'zh'===localStorage.getItem('language')?'该字段的标签的位置':'Position for the label for this field.',
    weight: 20,
    defaultValue: 'top',
    dataSrc: 'values',
    data: {
      values: [
        { label: 'Top', value: 'top' },
        { label: 'Left (Left-aligned)', value: 'left-left' },
        { label: 'Left (Right-aligned)', value: 'left-right' },
        { label: 'Right (Left-aligned)', value: 'right-left' },
        { label: 'Right (Right-aligned)', value: 'right-right' },
        { label: 'Bottom', value: 'bottom' }
      ]
    }
  },
  {
    type: 'number',
    input: true,
    key: 'labelWidth',
    label: 'zh'===localStorage.getItem('language')?'标签宽度':'Label Width',
    tooltip: 'zh'===localStorage.getItem('language')?'以百分比表示的直线上的标签宽度':'The width of label on line in percentages.',
    clearOnHide: false,
    weight: 30,
    placeholder: '30',
    suffix: '%',
    validate: {
      min: 0,
      max: 100
    },
    conditional: {
      json: {
        and: [
          { '!==': [{ var: 'data.labelPosition' }, 'top'] },
          { '!==': [{ var: 'data.labelPosition' }, 'bottom'] },
        ]
      }
    }
  },
  {
    type: 'number',
    input: true,
    key: 'labelMargin',
    label: 'zh'===localStorage.getItem('language')?'标签边距':'Label Margin',
    tooltip: 'zh'===localStorage.getItem('language')?'标签页边距的宽度，以百分比表示':'The width of label margin on line in percentages.',
    clearOnHide: false,
    weight: 30,
    placeholder: '3',
    suffix: '%',
    validate: {
      min: 0,
      max: 100
    },
    conditional: {
      json: {
        and: [
          { '!==': [{ var: 'data.labelPosition' }, 'top'] },
          { '!==': [{ var: 'data.labelPosition' }, 'bottom'] },
        ]
      }
    }
  },
  {
    weight: 100,
    type: 'textfield',
    input: true,
    key: 'placeholder',
    label: 'zh'===localStorage.getItem('language')?'占位符':'Placeholder',
    placeholder: 'zh'===localStorage.getItem('language')?'占位符':'Placeholder',
    tooltip: 'zh'===localStorage.getItem('language')?'该字段为空时将出现的占位符文本':'The placeholder text that will appear when this field is empty.'
  },
  {
    weight: 200,
    type: 'textfield',
    input: true,
    key: 'description',
    label: 'zh'===localStorage.getItem('language')?'描述':'Description',
    placeholder: 'zh'===localStorage.getItem('language')?'该字段的描述':'Description for this field.',
    tooltip: 'zh'===localStorage.getItem('language')?'描述是将出现在输入字段下面的文本':'The description is text that will appear below the input field.'
  },
  {
    weight: 300,
    type: 'textarea',
    input: true,
    key: 'tooltip',
    label: 'zh'===localStorage.getItem('language')?'提示':'Tooltip',
    placeholder: 'zh'===localStorage.getItem('language')?'若要向此字段添加工具提示，请在此处输入文本':'To add a tooltip to this field, enter text here.',
    tooltip: 'zh'===localStorage.getItem('language')?'将工具提示添加到此字段的一侧':'Adds a tooltip to the side of this field.'
  },
  {
    weight: 400,
    type: 'textfield',
    input: true,
    key: 'errorLabel',
    label: 'zh'===localStorage.getItem('language')?'错误标签':'Error Label',
    placeholder: 'zh'===localStorage.getItem('language')?'错误标签':'Error Label',
    tooltip: 'zh'===localStorage.getItem('language')?'发生错误时此字段的标签':'The label for this field when an error occurs.'
  },
  {
    weight: 500,
    type: 'textfield',
    input: true,
    key: 'customClass',
    label: 'zh'===localStorage.getItem('language')?'自定义CSS':'Custom CSS Class',
    placeholder: 'zh'===localStorage.getItem('language')?'自定义CSS':'Custom CSS Class',
    tooltip: 'zh'===localStorage.getItem('language')?'为当前元素添加自定义样式':'Custom CSS class to add to this component.'
  },
  {
    weight: 600,
    type: 'textfield',
    input: true,
    key: 'tabindex',
    label: 'zh'===localStorage.getItem('language')?'标签索引':'Tab Index',
    placeholder: 'zh'===localStorage.getItem('language')?'标签索引':'Tab Index',
    tooltip: 'zh'===localStorage.getItem('language')?'设置此组件的tabindex属性以覆盖表单的制表符顺序':'Sets the tabindex attribute of this component to override the tab order of the form.'
  },
  // {
  //   weight: 700,
  //   type: 'radio',
  //   label: 'Persistent',
  //   tooltip: 'A persistent field will be stored in database when the form is submitted.',
  //   key: 'persistent',
  //   input: true,
  //   inline: true,
  //   values: [
  //     { label: 'None', value: false },
  //     { label: 'Server', value: true },
  //     { label: 'Client', value: 'client-only' },
  //   ]
  // },
  {
    weight: 800,
    type: 'checkbox',
    label: 'zh'===localStorage.getItem('language')?'多个值':'Multiple Values',
    tooltip: 'zh'===localStorage.getItem('language')?'允许为该字段输入多个值':'Allows multiple values to be entered for this field.',
    key: 'multiple',
    input: true
  },
  {
    weight: 900,
    type: 'checkbox',
    label: 'zh'===localStorage.getItem('language')?'隐藏时清除值':'Clear Value When Hidden',
    key: 'clearOnHide',
    tooltip: 'zh'===localStorage.getItem('language')?'当字段被隐藏时，清除该值':'When a field is hidden, clear the value.',
    input: true
  },
  // {
  //   weight: 1000,
  //   type: 'checkbox',
  //   label: 'Protected',
  //   tooltip: 'A protected field will not be returned when queried via API.',
  //   key: 'protected',
  //   input: true
  // },
  {
    weight: 1100,
    type: 'checkbox',
    label: 'zh'===localStorage.getItem('language')?'隐藏':'Hidden',
    tooltip: 'zh'===localStorage.getItem('language')?'隐藏字段仍然是表单的一部分，但是隐藏在视图中':'A hidden field is still a part of the form, but is hidden from view.',
    key: 'hidden',
    input: true
  },
  {
    weight: 1300,
    type: 'checkbox',
    label: 'Hide Input',
    tooltip: 'Hide the input in the browser. This does not encrypt on the server. Do not use for passwords.',
    key: 'mask',
    input: true
  },
  {
    weight: 1310,
    type: 'checkbox',
    label: 'Show Label in DataGrid',
    tooltip: 'Show the label when in a Datagrid.',
    key: 'dataGridLabel',
    input: true,
    customConditional: 'show = instance.root.editComponent.inDataGrid'
  },
  {
    weight: 1400,
    type: 'checkbox',
    label: 'zh'===localStorage.getItem('language')?'禁用':'Disabled',
    tooltip: 'zh'===localStorage.getItem('language')?'禁用表单输入':'Disable the form input.',
    key: 'disabled',
    input: true
  },
  {
    weight: 1450,
    type: 'checkbox',
    label: 'zh'===localStorage.getItem('language')?'初始焦点':'Initial Focus',
    tooltip: 'zh'===localStorage.getItem('language')?'使该字段成为表单上最初关注的元素':'Make this field the initially focused element on this form.',
    key: 'autofocus',
    input: true
  },
  {
    weight: 1500,
    type: 'checkbox',
    label: 'Table View',
    tooltip: 'Shows this value within the table view of the submissions.',
    key: 'tableView',
    input: true
  },
  {
    weight: 1550,
    type: 'checkbox',
    label: 'Always enabled',
    tooltip: 'Make this field always enabled, even if the form is disabled',
    key: 'alwaysEnabled',
    input: true
  }
];
/* eslint-enable max-len */
