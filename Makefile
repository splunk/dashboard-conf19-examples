build-image:
	docker build -t dashboard-builder .

run:
	docker run -it -v $$PWD:/src --name builder dashboard-builder make --directory /src package-app

package-app:
	NODE_OPTIONS=--max-old-space-size=8192 && yarn install && yarn run build && cd build/dashboard_framework_examples && tar -czf ../../dashboard-framework-examples.tar.gz *

start:
	docker run --platform linux/amd64 -d -v $$PWD/build/dashboard_framework_examples:/opt/splunk/etc/apps/dashboard_framework_examples/ -p 8000:8000 -e "SPLUNK_PASSWORD=changemeplease1" -e "SPLUNK_START_ARGS=--accept-license" --name splunk splunk/splunk:9.1
	@echo "Check 'docker logs splunk' to see the status of the container"
	@open http://localhost:8000

down:
	@docker rm -f builder || true
	@docker rm -f splunk || true
