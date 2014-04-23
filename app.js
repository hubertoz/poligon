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


//lokalizacja > poligon_work
//pull do >>>>
//lokalizacja > poligon
//zmiany w poligon ....
//edycja poligon_work