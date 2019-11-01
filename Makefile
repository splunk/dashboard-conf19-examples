build-image:
	docker build -t dashboard-builder .

run:
	docker run -it -v $$PWD:/src --name builder dashboard-builder make --directory /src package-app

package-app:
	NODE_OPTIONS=--max-old-space-size=4096 && npm install && npm run build && slim package /src/build/dashboard_conf19_examples -o /src/splunkapps/

start:
	docker run -d -v $$PWD/build/dashboard_conf19_examples:/opt/splunk/etc/apps/dashboard_conf19_examples/ -p 8000:8000 -e "SPLUNK_PASSWORD=changemeplease1" -e "SPLUNK_START_ARGS=--accept-license" --name splunk splunk/splunk:8.0
	@echo "Check 'docker logs splunk' to see the status of the container"
	@open http://localhost:8000

down:
	@docker rm -f builder || true
	@docker rm -f splunk || true
