# New dashboard framework examples - .conf 2019

## Prerequisite 
* Install [nodejs](https://nodejs.org/en/) 10.x.
* Install Splunk Enterprise locally and have $SPLUNK_HOME env variable setup.
* In Windows environment, to avoid any file permission issues start the command prompt with "Run as Administrator" to run the commands mentioned in the [Development](#development) section.

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


# Package the app

* Run `make build-image` to build the image
* Run `make run` to package the app with Node etc.
    * The app (`tgz`) will be created in `splunkapps`
* Run Splunk with the dashboard app via `make start`
* Remove all containers `make down`