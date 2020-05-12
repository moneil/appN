# AppN

May 11, 2020

AppN is a very basic node.js application used in scenarios where deploying serveral applications is useful - it is small lightweight, customizeable, and meets the needs of having a quickly deployable application to test various scenarios such as reverse proxy or cases where multiple applications are useful. 

## Requirements

* Node.js 
* npm

## Usage

1. Pull the project:
`$ git clone https://github.com/moneil/appn.git 
`

2. Configuration your instance:
Edit `config.json` to change the app instance settings
or use environment variables.

	e.g.:
	
	`$ export APP_NAME="_APPN"`
	
	`$ export APP_VERSION="1.0"`
	
	`$ export APP_ROOT_PATH="app1"`
	
	`$ export APP_VERSION_PATH="/app1/version"`

3. Start appN using 
`$ npm start`

## Docker

`$ docker run --env APP_NAME=_APP_007 --env APP_PATH=/a7 --env APP_VERSION_PATH=/a7/weebles --env APP_VERSION=7 -p 80:8080 blackboardhub.ddns.net/bbdn/appn:1.0`

or edit ENVIRONMENT section in docker-compose.yml and `$ docker-compose up -d`



