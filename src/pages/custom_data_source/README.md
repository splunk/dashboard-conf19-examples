### Steps to create a custom data source

1. identify source of new data
1. build data source component
    1. import base `DataSource` class and `DataSet` class
    1. create a new class that extends `DataSource`
    1. override the `request` function
    1. `request` function returns a subscribe function
    1. inside the subscribe function, fetch data from the source
    1. transform data using `DataSet`
    1. send data to dashboard-framework by calling `.next()` on subscriber. This can be repeated as many times as needed
    1. call `.complete()` on subscriber to let dashboard-framework know all data has been pushed
    1. (optional) call `.error()` when anything goes wrong
1. include the new data source in preset
1. use the new data source in definition
