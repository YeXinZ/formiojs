export default {
  lng: 'en',
  resources: {
    en: {
      translation: {
        complete: 'Submission Complete',
        error: 'Please fix the following errors before submitting.',
        required: '{{field}} is required',
        pattern: '{{field}} does not match the pattern {{pattern}}',
        minLength: '{{field}} must be longer than {{length}} characters.',
        maxLength: '{{field}} must be shorter than {{length}} characters.',
        min: '{{field}} cannot be less than {{min}}.',
        max: '{{field}} cannot be greater than {{max}}.',
        maxDate: '{{field}} should not contain date after {{- maxDate}}',
        minDate: '{{field}} should not contain date before {{- minDate}}',
        invalid_email: '{{field}} must be a valid email.', // eslint-disable-line camelcase
        invalid_url: '{{field}} must be a valid url.', // eslint-disable-line camelcase
        invalid_regex: '{{field}} does not match the pattern {{regex}}.', // eslint-disable-line camelcase
        invalid_date: '{{field}} is not a valid date.', // eslint-disable-line camelcase
        invalid_day: '{{field}} is not a valid day.', // eslint-disable-line camelcase
        mask: '{{field}} does not match the mask.',
        stripe: '{{stripe}}',
        month: 'Month',
        day: 'Day',
        year: 'Year',
        january: 'January',
        february: 'February',
        march: 'March',
        april: 'April',
        may: 'May',
        june: 'June',
        july: 'July',
        august: 'August',
        september: 'September',
        october: 'October',
        november: 'November',
        december: 'December',
        next: 'Next',
        previous: 'Previous',
        cancel: 'Cancel',
        submit: 'Submit Form'
      }
    },
    zh: {
      translation: {
        complete: '提交完成',
        error: '提交之前请更正以下错误',
        required: '{{field}}必填',
        pattern: '{{field}}不符合{{pattern}}',
        minLength: '{{field}}必须大于{{length}}字符',
        maxLength: '{{field}}必须小于{{length}}字符',
        min: '{{field}}不能小于{{min}}.',
        max: '{{field}}不能大于{{max}}.',
        maxDate: '{{field}}不能包含{{- maxDate}}之后的日期',
        minDate: '{{field}}不能包含{{- minDate}}之前的日期',
        invalid_email: '{{field}}必须是一个有效的电子邮件', // eslint-disable-line camelcase
        invalid_url: '{{field}}必须是一个有效的url', // eslint-disable-line camelcase
        invalid_regex: '{{field}}不符合{{regex}}', // eslint-disable-line camelcase
        invalid_date: '{{field}}不是一个有效的日期', // eslint-disable-line camelcase
        invalid_day: '{{field}}不是一个有效的日期', // eslint-disable-line camelcase
        mask: '{{field}}和掩码不匹配',
        stripe: '{{stripe}}',
        month: '月',
        day: '天',
        year: '年',
        january: '一月',
        february: '二月',
        march: '三月',
        april: '四月',
        may: '五月',
        june: '六月',
        july: '七月',
        august: '八月',
        september: '九月',
        october: '十月',
        november: '十一月',
        december: '十二月',
        next: '下一个',
        previous: '上一个',
        cancel: '取消',
        submit: '提交表单'
      }
    }
  }
};
