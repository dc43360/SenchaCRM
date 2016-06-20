/**
 * SenchaCRM.view.main.Main
 */
Ext.define('SenchaCRM.view.main.Main', {
    extend: 'Ext.Viewport',
    xtype: 'app-main',

    requires: [
        'Ext.container.Container',
        'Ext.form.Label',
        'Ext.form.field.Text',
        'Ext.layout.container.Absolute',
        'Ext.layout.container.Border',
        'Ext.layout.container.Fit',
        'Ext.layout.container.VBox',
        'Ext.list.Tree',
        'Ext.plugin.Responsive',
        'SenchaCRM.view.main.Controller',
        'SenchaCRM.view.main.Model',
        'SenchaCRM.view.people.List'
    ],

    controller: 'main',
    viewModel: 'main',

    layout: {
        type: 'vbox',
        pack: 'start',
        align: 'stretch'
    },

    items: [
        {
            xtype: 'box',
            height: 3,
            style: 'background-color: #fc9a7c;'
        },
        {
            xtype: 'container',
            height: 44,
            layout: 'absolute',
            cls: 'header',
            items: [
                {
                    xtype: 'label',
                    html: 'SENCHA CRM',
                    cls: 'app-title',
                    x: 20,
                    y: 13
                },
                {
                    xtype: 'image',
                    src: 'resources/images/senchacrm.png',
                    alt: 'senchacrm-logo',
                    width: 26,
                    x: 185,
                    y: 10
                },
                {
                    xtype: 'textfield',
                    reference: 'search',
                    style: 'right:20',
                    width: 400,
                    style: 'top:6px;right:10px;',
                    emptyText: 'Jump to a contact, case, deal, tag, or search...',
                    triggers: {
                        search: {
                            cls: 'x-form-search-trigger',
                            handler: 'onSearchTriggerClick'
                        }
                    },
                    listeners: {
                        specialkey: 'onSearchFieldEnter'
                    }
                }
            ]
        },
        {
            layout: 'border',
            flex: 1,
            cls: 'main',
            reference: 'main-panel',
            items: [
                {
                    xtype: 'people-list',
                    flex: 1,
                },
                {
                    title: 'メニュー',
                    reference: 'menu-panel',
                    region: 'west',
                    plugins: 'responsive',
                    responsiveConfig: {
                        'width < 800': {
                            width: 44
                        },
                        'width >= 1000': {
                            width: 220
                        }
                    },
                    //width: 220,
                    glyph: 'xf0ca@FontAwesome',
                    split: true,
                    //collapsed: true,
                    floatable: false,
                    layout: 'fit',
                    items: [
                        {
                            xtype: 'treelist',
                            //rootVisible: false,
                            ui: 'nav',
                            cls: 'treelist-with-nav',
                            store: 'Menus',
                            listeners: {
                                itemclick: 'onMenuItemClick',
                                resize: {
                                    fn: 'onResizeTreeList',
                                    element: 'element',
                                    scope: 'controller'
                                }
                            }
                        }
                    ]
                }
            ]
        },
        {
            xtype: 'container',
            cls: 'footer',
            height: 33,
            items: [
                {
                    xtype: 'label',
                    html: '<div align="center" style="margin-top:.6em;">© 2016 SenchaCRM</div>'
                }
            ]
        }
    ]
});
