/**
 * SenchaCRM.view.main.MainModel
 */
Ext.define('SenchaCRM.view.people.Model', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.people',
    data: {
        saveButtonDisabled: true,
        storeEditing: true,
        person: {
            company: ' ',
            title: ' ',
            tel: ' ',
            email: ' ',
            info: ' '
        }
    }
    //formulas: {
    //    storeEditing: function () {
    //        var store = Ext.getStore('People');
    //        return store.getUpdatedRecords().length === 0;
    //    }
    //}
});

