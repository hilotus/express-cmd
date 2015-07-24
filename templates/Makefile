TESTS = test/units/**/*.js
REPORTER = spec

test:
	@./node_modules/.bin/mocha \
		--require test/test-helper.js \
		--timeout 15000 \
		--colors \
		--reporter $(REPORTER) \
		$(TESTS)

.PHONY: test

jenkins:
	@JUNIT_REPORT_PATH=test/reporter/report.xml JUNIT_REPORT_STACK=1 \
	./node_modules/.bin/mocha \
		--require test/test-helper.js \
		--timeout 15000 \
		--colors \
		--reporter mocha-jenkins-reporter \
		$(TESTS)

.PHONY: jenkins
