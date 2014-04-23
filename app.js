Ext.application({
    requires: ['Ext.container.Viewport'],
    name: 'AM',
    appFolder: 'app',    

    controllers: [
                  'Users'
              ],              
              launch: function() {
                  Ext.create('Ext.container.Viewport', {
                      layout: 'fit',
                      items: {
                          xtype: 'userlist'
                      }
                  });
              }

});

//test zmian STEP 2 - edycja w gitTest