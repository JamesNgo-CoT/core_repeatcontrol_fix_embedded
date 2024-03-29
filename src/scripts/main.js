// The main javascript file for core_repeatcontrol_fix_embedded.
// IMPORTANT:
// Any resources from this project should be referenced using SRC_PATH preprocessor var
// Ex: let myImage = '/*@echo SRC_PATH*//img/sample.jpg';

$(function () {
  let container = $('#core_repeatcontrol_fix_embedded_container');

  const charactersNotAllowed = 'charactersNotAllowed';
  const fixEX = () => true;

  // const container = $('#corejs_repeatcontrol_fix_standalone_container');

  const definition = {
    id: 'thisform',

    success: () => {
      alert('SUCCESS');
    },

    sections: [
      {
        rows: [
          {
            fields: [
              {
                title: 'test',
                required: true
              }
            ]
          },
          {
            repeatControl: {
              id: 'witnesses',
              title: 'Is anyone else aware of what took place?',
              setTitle: 'Witness',
              bindTo: 'witnesses',
              className: 'repeatControl col-xs-12 mt-1 mb-3',
              min: 1,
              max: 10,
              initial: 1,
              addBtnLabel: ' Add another witness',
              removeBtnLabel: ' Remove this witness',
              rows: [
                {
                  fields: [
                    {
                      id: 'witness_name',
                      title: "Name",
                      type: 'text',
                      className: 'col-xs-12 col-sm-4',
                      required: true,
                      htmlAttr: { maxLength: 500 },
                      bindTo: 'witness_name',
                      validators: {
                        callback: {
                          message: charactersNotAllowed,
                          callback: (value, validator, $field) => {
                            return fixEX(value)
                          }
                        }
                      }
                    },
                    {
                      id: 'witness_phone',
                      title: "Phone Number",
                      type: 'text',
                      className: 'col-xs-12 col-sm-4',
                      required: false,
                      htmlAttr: { maxLength: 100 },
                      bindTo: 'witness_phone',
                      validators: {
                        callback: {
                          message: charactersNotAllowed,
                          callback: (value, validator, $field) => {
                            return fixEX(value)
                          }
                        }
                      }
                    },
                    {
                      id: 'witness_email',
                      title: "Email",
                      type: 'text',
                      className: 'col-xs-12 col-sm-4',
                      required: false,
                      htmlAttr: { maxLength: 2000 },
                      bindTo: 'witness_email',
                      validators: {
                        callback: {
                          message: charactersNotAllowed,
                          callback: (value, validator, $field) => {
                            return fixEX(value)
                          }
                        }
                      }
                    }
                  ]
                }
              ]
            }
          },
          {
            fields: [
              {
                title: 'Submit',
                type: 'button',
                onclick: () => {
                  $('#thisform').submit();
                }
              }
            ]
          }
        ]
      }
    ]
  };

  const cotForm = new CotForm(definition);

  cotForm.render({ target: container });
});
