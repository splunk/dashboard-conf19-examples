# New dashboard framework examples - .conf 2019

## Prerequisite 
* Install [nodejs](https://nodejs.org/en/) 10.x.
* Install Splunk Enterprise locally and have $SPLUNK_HOME env variable setup.

## Development
* `npm install` - install dependencies.
* `npm run dev` - start the project in dev mode. This command will symlink the project into your Splunk instance.
* Restart your Splunk instance if it's the first time you setup this project. `Dashboard Examples .Conf 2019` application should shows up in app bar.


## How to create a new page
* Add an xml file in `resources/default/data/ui/views`.
* Modify `resources/default/data/ui/nav/default.xml` to include your new page.
* Create a new folder under `src/pages/` with the same name of the new xml file.
* Create `index.jsx` and bootstrap the page using `@splunk/react-page`.
* Restart Splunk, your new page should shows up.