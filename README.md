test client for testing CORS functionality of oauth2-provider server

Run oauth2-provider

1. git clone git@github.com:iainporter/oauth2-provider.git
2. cd oauth2-provider
3. ./gradlew clean build
4. ./gradlew tomcatRun
5. Open http://localhost:8080/oauth2-provider/v1.0/healthcheck in browser
you should see: Running version 1.0.0

Run the client
6. Install Spring Boot CLI http://docs.spring.io/spring-boot/docs/current-SNAPSHOT/reference/htmlsingle/#getting-started-installing-the-cli
7. git clone git@github.com:iainporter/oauth2-provider-test-client.git
8. cd oauth2-provider-test-client
9. spring run app.groovy -- --server.port=9000
10 Open http://localhost:9000/ in browser
you should see Running version 1.0.0