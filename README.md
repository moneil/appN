# AppN

May 12, 2020

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

	`$ export APP_PORT="6100"`

3. Start appN using 

	`$ npm install`

	`$ npm start`

## Docker

`$ docker run --env APP_NAME=_APP_007 --env APP_PATH=/a7 --env APP_VERSION_PATH=/a7/weebles --env APP_VERSION=7 --env APP_PORT=6100 -p 80:6100 blackboardhub.ddns.net/bbdn/appn:1.5` 

or edit ENVIRONMENT section in docker-compose.yml and `$ docker-compose up -d`

> Note: the docker-compose.yml file is suitable for deploying multiple appN instances - simply copy/paste the provided service example and edit the service name, host port, and environment variables to create a unique service description.
> 
> If you are fronting with a reverse proxy then be sure to also change the port settings per service as described in the file comments.
> 
> The compose file is also suitable for deploying in a Docker Swarm.  

Consistency in values...

1. Make certain you are consistent across configuratoin files re ports and app names

2. Make certain that networking reflects the network you are using e.g.: dockerdemo_skynet etc.





