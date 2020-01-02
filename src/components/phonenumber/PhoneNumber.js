import TextFieldComponent from '../textfield/TextField';

export default class PhoneNumberComponent extends TextFieldComponent {
  static schema(...extend) {
    return TextFieldComponent.schema({
      type: 'phoneNumber',
      label: 'zh'===localStorage.getItem('language')?'电话号码':'Phone Number',
      key: 'phoneNumber',
      inputType: 'tel',
      inputMask: '(999) 999-9999'
    }, ...extend);
  }

  static get builderInfo() {
    return {
      title: 'zh'===localStorage.getItem('language')?'电话号码':'Phone Number',
      group: 'advanced',
      icon: 'fa fa-phone-square',
      weight: 20,
      documentation: 'http://help.form.io/userguide/#phonenumber',
      schema: PhoneNumberComponent.schema()
    };
  }

  get defaultSchema() {
    return PhoneNumberComponent.schema();
  }
}
